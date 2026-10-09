import {useLayoutEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);

// Native scroll remains the input. Wheel smoothing never locks a chapter.
export function useMotion(ref,path,enabled){useLayoutEffect(()=>{if(!ref.current)return;const root=ref.current;let lenis,tick;const mm=gsap.matchMedia();let ctx;
 if(!enabled)root.querySelectorAll('[data-count]').forEach(el=>{el.textContent=String(el.dataset.count).padStart(2,'0')});
 const progress=()=>{const p=document.querySelector('.scroll-progress');if(p){const h=document.documentElement.scrollHeight-innerHeight;p.style.transform=`scaleX(${h>0?scrollY/h:0})`}};
 window.addEventListener('scroll',progress,{passive:true});progress();
 if(enabled&&!path.startsWith('/demo')){
  lenis=new Lenis({duration:1.08,smoothWheel:true,syncTouch:false,anchors:true});
  lenis.on('scroll',ScrollTrigger.update);tick=time=>lenis.raf(time*1000);gsap.ticker.add(tick);
  ctx=gsap.context(()=>{
   const entries=[...root.querySelectorAll('.hero-entry')];if(entries.length)gsap.fromTo(entries,{y:36,opacity:0},{y:0,opacity:1,duration:1.05,stagger:.09,ease:'power3.out'});
   root.querySelectorAll('[data-reveal]').forEach(el=>{if(el.closest('.hero-entry'))return;gsap.fromTo(el,{y:28,opacity:0},{y:0,opacity:1,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 93%',once:true}})});
   root.querySelectorAll('[data-draw]').forEach(el=>{try{const len=el.getTotalLength();gsap.fromTo(el,{strokeDasharray:len,strokeDashoffset:len},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:el.closest('section')||el,start:'top 70%',end:'bottom 80%',scrub:.7}})}catch{}});
   root.querySelectorAll('.report-bars i,.editor-bar-track i,.mechanism-chart button>i').forEach(el=>gsap.from(el,{scaleX:0,transformOrigin:'left',duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
  },root);
  // Supporting pages enter from alternating sides and return as scroll reverses.
  // Animate the content plane; backgrounds and the navigation remain anchored.
  if(path!=='/')ctx.add(()=>{
   [...root.querySelectorAll('section')].filter(section=>!section.parentElement.closest('section')).forEach((section,index)=>{
    const content=[...section.children].find(child=>child.classList.contains('container'));
    if(!content)return;
    const direction=index%2===0?-1:1;
    const distance=()=>Math.min(innerWidth*.13,130);
    const entry=innerHeight*.35;
    const hold=Math.max(section.offsetHeight+innerHeight*.1,entry);
    const scene=gsap.timeline({scrollTrigger:{trigger:section,start:'top 90%',end:'bottom 10%',scrub:.45,invalidateOnRefresh:true}});
    scene.fromTo(content,{x:()=>direction*distance(),opacity:0},{x:0,opacity:1,ease:'power2.out',duration:entry})
     .to(content,{x:0,opacity:1,duration:hold,ease:'none'})
     .to(content,{x:()=>-direction*distance(),opacity:0,duration:entry,ease:'power2.in'});
   });
  });
  // Every chapter has a scroll-led sequence, including tablet and narrow layouts.
  ctx.add(()=>{
   root.querySelectorAll('.atmosphere-material').forEach(material=>{
    gsap.fromTo(material,{yPercent:-3},{yPercent:3,ease:'none',scrollTrigger:{trigger:material.parentElement.parentElement,start:'top bottom',end:'bottom top',scrub:.7}});
   });
   root.querySelectorAll('[data-count]').forEach(el=>{
    const target=Number(el.dataset.count),counter={value:0};
    const restore=()=>{el.textContent=String(target).padStart(2,'0')};
    gsap.to(counter,{value:target,duration:1.45,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true},onStart:()=>{el.textContent='00'},onUpdate:()=>{el.textContent=String(Math.round(counter.value)).padStart(2,'0')},onComplete:restore});
   });
   const request=root.querySelector('.request-story');
   if(request){
    const line=request.querySelector('.active-route'),packet=request.querySelector('.request-packet');
    gsap.fromTo(line,{strokeDasharray:430,strokeDashoffset:430},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:request.querySelector('.context-workbench'),start:'top 87%',end:'center 52%',scrub:.5}});
    gsap.fromTo(packet,{attr:{cx:0}},{attr:{cx:330},ease:'none',scrollTrigger:{trigger:request.querySelector('.context-routing'),start:'top 85%',end:'bottom 45%',scrub:.55}});
    gsap.fromTo(request.querySelector('.context-source'),{x:-18},{x:0,ease:'none',scrollTrigger:{trigger:request,start:'top 80%',end:'center 60%',scrub:.6}});
   }
   const evidence=root.querySelector('.evidence-story');if(evidence){
    gsap.fromTo(evidence.querySelector('.clause-highlight'),{backgroundSize:'0% 100%'},{backgroundSize:'100% 100%',ease:'none',scrollTrigger:{trigger:evidence.querySelector('.evidence-folio'),start:'top 75%',end:'center 50%',scrub:.6}});
   }
   const people=root.querySelector('.people-section');if(people){
    gsap.fromTo(people.querySelectorAll('.role-list button'),{x:-25},{x:0,stagger:.15,ease:'none',scrollTrigger:{trigger:people.querySelector('.people-grid'),start:'top 88%',end:'center 58%',scrub:.7}});
    gsap.fromTo(people.querySelector('.role-rings'),{rotate:-30,scale:.7},{rotate:35,scale:1,ease:'none',scrollTrigger:{trigger:people.querySelector('.people-grid'),start:'top 88%',end:'bottom 35%',scrub:.7}});
   }
   const quotes=root.querySelector('.testimonial-deck');if(quotes){gsap.fromTo(quotes,{rotate:4,y:50},{rotate:0,y:0,ease:'none',scrollTrigger:{trigger:quotes,start:'top 92%',end:'center 62%',scrub:.6}})}
   const pilot=root.querySelector('.pilot-card');if(pilot){
    gsap.fromTo(pilot,{rotate:3,scale:.94},{rotate:0,scale:1,ease:'none',scrollTrigger:{trigger:pilot,start:'top 92%',end:'center 58%',scrub:.65}});
    gsap.fromTo(pilot.querySelectorAll('li'),{x:20,opacity:.3},{x:0,opacity:1,stagger:.15,ease:'none',scrollTrigger:{trigger:pilot,start:'top 75%',end:'bottom 85%',scrub:.6}});
   }
   root.querySelectorAll('.closing').forEach(close=>{
    const waypoint=close.querySelector('.closing-waypoint');if(waypoint)gsap.fromTo(waypoint,{x:-100},{x:0,ease:'none',scrollTrigger:{trigger:close,start:'top 92%',end:'center 55%',scrub:.6}});
    gsap.fromTo(close.querySelector('.closing-row'),{y:45},{y:0,ease:'none',scrollTrigger:{trigger:close,start:'top 92%',end:'center 55%',scrub:.7}});
   });
   root.querySelectorAll('.suite-visual .route-figure,.proof-visual,.calendar-visual,.mechanism-desk-grid,.mechanism-review-grid,.mechanism-proof-grid,.mechanism-signal-grid,.mechanism-report-grid').forEach(el=>gsap.fromTo(el,{y:30,scale:.96},{y:0,scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top 92%',end:'center 65%',scrub:.6}}));
   // All information diagrams draw their connections, not their decorative icons.
   root.querySelectorAll('.editor-boundary svg path,.editor-flow svg path,.mechanism svg path').forEach(el=>{if(el.hasAttribute('data-draw'))return;try{const length=el.getTotalLength();gsap.fromTo(el,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:el.closest('section'),start:'top 85%',end:'center 50%',scrub:.6}})}catch{}});
  });
  mm.add('(min-width: 1000px) and (min-height: 740px) and (prefers-reduced-motion: no-preference)',()=>{const desktop=gsap.context(()=>{
   const hero=root.querySelector('.home-hero');if(hero){gsap.to('.hero-art-photo',{y:75,scale:1.06,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.7}});gsap.to('.hero-art .folio-front',{y:-45,rotate:-3,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.7}});gsap.to('.hero-art .folio-middle',{y:-20,x:20,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.7}})}
   const rights=root.querySelector('.rights-story');if(rights){const tl=gsap.timeline({scrollTrigger:{trigger:rights,start:'top 86px',end:'+=650',pin:true,scrub:1,anticipatePin:1}});tl.fromTo('.rights-gate',{x:-35,scale:.92},{x:0,scale:1,duration:1}).fromTo('.rights-bridge',{opacity:.2},{opacity:1,duration:.6},.2).fromTo('.rights-question',{clipPath:'inset(0 75% 0 0)',x:70},{clipPath:'inset(0 0% 0 0)',x:0,duration:1.1},.45).to('.rights-use-word',{color:'#B8422B',duration:.5},.8)}
   const evidence=root.querySelector('.evidence-story');if(evidence){gsap.fromTo('.evidence-folio',{rotate:7,y:65},{rotate:-2,y:0,ease:'none',scrollTrigger:{trigger:evidence,start:'top 80%',end:'center center',scrub:.8}})}
   root.querySelectorAll('[data-parallax]').forEach(el=>gsap.fromTo(el,{yPercent:-5,scale:1.06},{yPercent:5,scale:1.06,ease:'none',scrollTrigger:{trigger:el.closest('section'),start:'top bottom',end:'bottom top',scrub:.8}}));
   const panels=[...root.querySelectorAll('.suite-panel')];panels.forEach((panel,i)=>{if(!panels[i+1])return;gsap.to(panel,{scale:.94,filter:'brightness(.94)',transformOrigin:'center top',ease:'none',scrollTrigger:{trigger:panels[i+1],start:'top 75%',end:'top 150px',scrub:.6}})});
   root.querySelectorAll('.editor-boundary,.editor-role-art,.editor-notebook,.editor-document-cover').forEach(el=>gsap.fromTo(el,{clipPath:'inset(12% 8% 12% 8%)',scale:.96},{clipPath:'inset(0% 0% 0% 0%)',scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top 90%',end:'center 58%',scrub:.6}}));
   root.querySelectorAll('.editor-module-list,.editor-principles,.editor-price-pair').forEach(el=>{const children=[...el.children].filter(child=>!child.hasAttribute('data-reveal')); if(children.length)gsap.from(children,{y:55,rotate:2,opacity:0,stagger:.13,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})});
   root.querySelectorAll('.editor-flow,.editor-platform-rail,.process-object').forEach(el=>gsap.fromTo(el,{y:45},{y:-15,ease:'none',scrollTrigger:{trigger:el.closest('section'),start:'top bottom',end:'bottom top',scrub:.8}}));
  },root);return()=>desktop.revert()});
 }
 const refresh=()=>ScrollTrigger.refresh();document.fonts?.ready.then(refresh);const images=[...root.querySelectorAll('img')];images.forEach(im=>im.addEventListener('load',refresh,{once:true}));const timer=setTimeout(refresh,150);
 return()=>{clearTimeout(timer);window.removeEventListener('scroll',progress);images.forEach(im=>im.removeEventListener('load',refresh));mm.revert();ctx?.revert();root.querySelectorAll('[data-count]').forEach(el=>{el.textContent=String(el.dataset.count).padStart(2,'0')});if(tick)gsap.ticker.remove(tick);lenis?.destroy()};
 },[ref,path,enabled])}
