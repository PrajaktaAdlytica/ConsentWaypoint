from pathlib import Path
import json, sys, subprocess, html, hashlib
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'outputs'
A = OUT / 'brand-assets'
F = A / 'fonts'
F.mkdir(parents=True, exist_ok=True)
sys.path.insert(0, str(ROOT / 'work/vendor'))
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen

def fetch(url):
    return subprocess.run(['curl','--fail','--silent','--show-error','--location',url],check=True,capture_output=True).stdout

sources = []
for family, wanted in [('manrope','Manrope'), ('ibmplexmono','IBMPlexMono-Regular')]:
    url = f'https://api.github.com/repos/google/fonts/contents/ofl/{family}'
    entries = json.loads(fetch(url))
    for e in entries:
        take_font = e['name'].endswith('.ttf') and e['name'].startswith(wanted)
        if family=='ibmplexmono': take_font=e['name'] in ['IBMPlexMono-Regular.ttf','IBMPlexMono-Medium.ttf']
        if e['name']=='OFL.txt' or take_font:
            name = f'{family}-OFL.txt' if e['name']=='OFL.txt' else e['name']
            data = fetch(e['download_url'])
            (F/name).write_bytes(data)
            sources.append({'file':f'fonts/{name}','source':e['download_url'],'sha256':hashlib.sha256(data).hexdigest(),'license':'OFL-1.1'})

palette = {'canvas':'#F6F3EC','surface':'#FFFEFA','ink':'#202522','textSecondary':'#5A625D','coral':'#D45538','action':'#B8422B','actionHover':'#9E3521','actionPressed':'#862D1C','lilac':'#D8CEF2','sage':'#DDE7DC','allow':'#226043','allowTint':'#E5EFE7','counsel':'#79500C','counselTint':'#FFF1CC','deny':'#942F32','denyTint':'#FBE7E7','focus':'#4D3AA0','border':'#8B948D','divider':'#CDD3CB'}
tokens = {'version':'1.0','date':'2026-10-08','territory':'Evidence in Motion','colors':palette,'spacing':[4,8,12,16,20,24,32,40,48,64,80,96,128],'radii':{'label':4,'control':8,'evidence':12,'card':16,'scene':24},'layout':{'contentMax':1312,'readingMax':720,'formMax':640,'desktopGutter':64,'tabletGutter':32,'mobileGutter':20,'gridColumns':[12,8,4],'gridGapDesktop':24,'gridGapMobile':16,'headerDesktop':80,'headerMobile':64},'fonts':{'displayBodyUI':'Manrope','data':'IBM Plex Mono'},'motion':{'microMs':180,'revealMs':420,'sceneMs':800,'flipMs':420,'ease':'cubic-bezier(.22,1,.36,1)'},'semantic':{'text':'ink','textOnDark':'surface','primaryBackground':'action','primaryForeground':'surface','statusAllow':['allow','allowTint'],'statusCounsel':['counsel','counselTint'],'statusDeny':['deny','denyTint']}}
(OUT/'brand-tokens.json').write_text(json.dumps(tokens,indent=2)+'\n')
manrope_path = next(F.glob('Manrope*.ttf'))
mono_path = next(F.glob('IBMPlexMono-Regular*.ttf'))
css = f'''@font-face{{font-family:Manrope;src:url("brand-assets/fonts/{manrope_path.name}") format("truetype");font-weight:200 800;font-style:normal;font-display:swap}}
@font-face{{font-family:"IBM Plex Mono";src:url("brand-assets/fonts/{mono_path.name}") format("truetype");font-weight:400;font-style:normal;font-display:swap}}
@font-face{{font-family:"IBM Plex Mono";src:url("brand-assets/fonts/IBMPlexMono-Medium.ttf") format("truetype");font-weight:500;font-style:normal;font-display:swap}}
:root{{\n'''
import re
for k,v in palette.items():
    name=re.sub(r'([A-Z])',lambda m:'-'+m.group(1).lower(),k)
    css += f'  --cw-{name}: {v};\n'
css += '''  --cw-font: "Manrope", sans-serif;
  --cw-font-data: "IBM Plex Mono", monospace;
  --cw-content: 1312px; --cw-reading: 720px; --cw-form: 640px;
  --cw-gutter: 64px; --cw-columns: 12; --cw-grid-gap: 24px;
  --cw-header: 80px; --cw-radius-control: 8px; --cw-radius-card: 16px;
  --cw-shadow-paper: 0 8px 24px rgba(32,37,34,.08);
  --cw-shadow-evidence: 0 20px 64px rgba(32,37,34,.12);
  --cw-shadow-overlay: 0 24px 80px rgba(32,37,34,.18);
  --cw-ease: cubic-bezier(.22,1,.36,1);
  --cw-micro: 180ms; --cw-reveal: 420ms; --cw-scene: 800ms;
  --cw-display: clamp(44px,6.12vw,88px);
  --cw-h1: clamp(40px,4.45vw,64px); --cw-h2: clamp(32px,3.62vw,52px);
}
'''
for s in tokens['spacing']: css += f':root{{--cw-space-{s}:{s}px}}\n'
css += '''@media(max-width:1199px){:root{--cw-gutter:32px;--cw-columns:8}}
@media(max-width:767px){:root{--cw-gutter:20px;--cw-columns:4;--cw-grid-gap:16px;--cw-header:64px}}
:focus-visible{outline:3px solid var(--cw-focus);outline-offset:3px}
[data-cw-theme="dark"] :focus-visible{outline-color:var(--cw-lilac)}
@media(prefers-reduced-motion:reduce){[data-cw-motion]{animation:none!important;transition:none!important;transform:none!important}}
'''
(OUT/'brand-tokens.css').write_text(css)

def lum(h):
    x=[int(h[i:i+2],16)/255 for i in [1,3,5]]
    x=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in x]
    return sum(a*b for a,b in zip(x,[.2126,.7152,.0722]))
def ratio(a,b):
    x,y=sorted([lum(a),lum(b)],reverse=True)
    return (x+.05)/(y+.05)
pairs=[('ink','canvas',4.5),('textSecondary','canvas',4.5),('ink','lilac',4.5),('ink','sage',4.5),('surface','action',4.5),('surface','actionHover',4.5),('surface','actionPressed',4.5),('allow','allowTint',4.5),('counsel','counselTint',4.5),('deny','denyTint',4.5),('focus','surface',3),('lilac','ink',3),('border','surface',3),('surface','ink',4.5)]
checks=[{'foreground':palette[a],'background':palette[b],'roles':[a,b],'ratio':round(ratio(palette[a],palette[b]),2),'threshold':t,'pass':ratio(palette[a],palette[b])>=t} for a,b,t in pairs]
(OUT/'contrast-checks.json').write_text(json.dumps({'method':'WCAG relative luminance; individual token pairs only, not whole-site certification','pairs':checks},indent=2)+'\n')
assert all(x['pass'] for x in checks), checks

def mark(ink=palette['ink'], dot=palette['coral']):
    return f'<path d="M25 9H12v17M39 55h13V38" fill="none" stroke="{ink}" stroke-width="7" stroke-linecap="square" stroke-linejoin="round"/><circle cx="32" cy="32" r="6" fill="{dot}"/>'
def svg(content,w=64,h=64,label='Consent Waypoint'):
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{label}">{content}</svg>'
font=TTFont(manrope_path)
font=instantiateVariableFont(font,{'wght':650},inplace=False)
gs=font.getGlyphSet(); cmap=font.getBestCmap(); unit=font['head'].unitsPerEm
scale=32/unit
def outlined_text(text,x=80,y=44):
    parts=[]
    for c in text:
        g=gs[cmap[ord(c)]]; pen=SVGPathPen(gs); g.draw(pen)
        if pen.getCommands(): parts.append(f'<path transform="translate({x:.3f} {y}) scale({scale:.6f} {-scale:.6f})" d="{pen.getCommands()}"/>')
        x+=g.width*scale
    return ''.join(parts),round(x+8)
txt,w=outlined_text('Consent Waypoint')
for name,ink,dot in [('primary',palette['ink'],palette['coral']),('reverse',palette['surface'],palette['coral']),('mono',palette['ink'],palette['ink'])]:
    (A/f'mark-{name}.svg').write_text(svg(mark(ink,dot)))
    (A/f'logo-{name}.svg').write_text(svg(mark(ink,dot)+f'<g fill="{ink}">{txt}</g>',w,64))
(A/'logo-editable.svg').write_text(svg(mark()+f'<text x="80" y="44" font-family="Manrope,sans-serif" font-weight="650" font-size="32" fill="{palette["ink"]}">Consent Waypoint</text>',w,64))
compact_txt,cw=outlined_text('Consent',0,106)
compact2,_=outlined_text('Waypoint',0,146)
(A/'logo-compact.svg').write_text(svg(f'<g transform="translate(39 0)">{mark()}</g><g fill="{palette["ink"]}">{compact_txt}{compact2}</g>',max(cw,156),160))
(A/'favicon.svg').write_text(svg(f'<rect width="64" height="64" rx="12" fill="{palette["canvas"]}"/>'+mark()))

def raster_mark(size,bg=None,ink=palette['ink'],dot=palette['coral']):
    n=8; s=size*n; im=Image.new('RGBA',(s,s),bg or (0,0,0,0)); d=ImageDraw.Draw(im)
    p=lambda v: v*s/64
    d.line([(p(25),p(9)),(p(12),p(9)),(p(12),p(26))],fill=ink,width=round(p(7)),joint='curve')
    d.line([(p(39),p(55)),(p(52),p(55)),(p(52),p(38))],fill=ink,width=round(p(7)),joint='curve')
    d.ellipse([p(26),p(26),p(38),p(38)],fill=dot)
    return im.resize((size,size),Image.Resampling.LANCZOS)
for s in [16,32,48,180,192,512]:
    name=f'favicon-{s}.png' if s<=48 else ('apple-touch-icon.png' if s==180 else f'app-icon-{s}.png')
    raster_mark(s,palette['canvas']).save(A/name)
raster_mark(64,palette['canvas']).save(A/'favicon.ico',sizes=[(16,16),(32,32),(48,48),(64,64)])
raster_mark(512).save(A/'mark-primary.png')
for name,ink in [('primary',palette['ink']),('reverse',palette['surface'])]:
    factor=3; im=Image.new('RGBA',(w*factor,64*factor),(0,0,0,0)); im.alpha_composite(raster_mark(64*factor,ink=ink),(0,0))
    ft=ImageFont.truetype(str(manrope_path),32*factor)
    ft.set_variation_by_axes([650])
    ImageDraw.Draw(im).text((80*factor,44*factor),'Consent Waypoint',font=ft,fill=ink,anchor='ls')
    im.save(A/f'logo-{name}.png')
(A/'site.webmanifest').write_text(json.dumps({'name':'Consent Waypoint — Concept preview','short_name':'Consent Waypoint','icons':[{'src':'app-icon-192.png','sizes':'192x192','type':'image/png'},{'src':'app-icon-512.png','sizes':'512x512','type':'image/png'}],'theme_color':palette['canvas'],'background_color':palette['canvas'],'display':'browser'},indent=2))

icons={
 'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 'chevron-down':'<path d="m6 9 6 6 6-6"/>',
 'close':'<path d="m6 6 12 12M6 18 18 6"/>',
 'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
 'search':'<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
 'check':'<path d="m5 12 4 4L19 6"/>',
 'review':'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 'deny':'<path d="m8 3-5 5v8l5 5h8l5-5V8l-5-5zM7 12h10"/>',
 'info':'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.5"/>',
 'warning':'<path d="m12 3 10 18H2zM12 9v5m0 3v.5"/>',
 'external':'<path d="M14 3h7v7m0-7L10 14M10 3H4v17h17v-6"/>',
 'download':'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
 'email':'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
 'eye':'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
 'eye-off':'<path d="m3 3 18 18M7 6c-3 2-5 6-5 6s4 7 10 7c2 0 4-1 5-2M11 5h1c6 0 10 7 10 7l-2 3"/>',
 'play':'<path d="m8 4 12 8-12 8z"/>',
 'pause':'<path d="M8 4v16M16 4v16"/>',
 'reset':'<path d="M3 11a9 9 0 1 1 2 7M3 3v8h8"/>',
 'source':'<path d="M5 3h10l4 4v14H5zM15 3v5h4M8 12h8M8 16h6"/>',
 'rights-desk':'<path d="M4 4h16v16H4zM4 9h16M9 9v11M4 14h16"/>',
 'rights-review':'<path d="M3 12h6m0 0 6-7h6m-12 7 6 7h6"/><circle cx="9" cy="12" r="2"/>',
 'rights-proof':'<circle cx="4" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="20" cy="12" r="2"/><path d="m6 11 4-4m4 0 4 4M6 12h12"/>',
 'rights-signal':'<path d="M3 17h18M5 5v14M12 9v10M19 3v16"/><circle cx="12" cy="9" r="2"/>',
 'rights-report':'<path d="M5 3h14v18H5zM8 7h8M8 11h3M8 15h8M14 10v3"/>',
 'person':'<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
 'lock':'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>'}
sprite='<svg xmlns="http://www.w3.org/2000/svg">'+''.join(f'<symbol id="{k}" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">{v}</g></symbol>' for k,v in icons.items())+'</svg>'
(A/'icons.svg').write_text(sprite)
manifest={'status':'Brand foundation assets; not deployed website','date':'2026-10-08','originalAssets':['logo variants','favicon/app icons','UI/module icon sprite'],'wordmark':'Primary/reverse/monochrome and compact SVG lockups have outlined glyphs; logo-editable.svg retains text. Manrope weight 650.','fonts':sources,'socialAssets':{'LinkedIn':'Official permitted asset and real profile URL pending; no active link','Crunchbase':'Official permitted asset and real profile URL pending; no active link'},'icons':list(icons),'files':sorted(p.name for p in A.iterdir() if p.is_file())}
(A/'asset-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(json.dumps({'files':len(manifest['files']),'fontFiles':len(sources),'contrastPairs':len(checks),'allContrastPairsPass':True,'logoWidth':w}))
