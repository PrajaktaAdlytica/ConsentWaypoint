import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {createPortal} from 'react-dom';
import './Entrance.css';

// A photographic 2.5D passage: texture displacement makes the ribbon breathe,
// while the camera follows its path into the opening. No new 3D geometry is implied.
const vertex = `attribute vec2 position; varying vec2 uv; void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`;
const fragment = `precision mediump float;
varying vec2 uv; uniform sampler2D plate; uniform float time; uniform float progress;
uniform float aspect; uniform float imageAspect;
void main(){
 vec2 p=vec2(uv.x,1.-uv.y);
 vec2 cover=vec2(min(1.,aspect/imageAspect),min(1.,imageAspect/aspect));
 p=(p-.5)*cover+vec2(.5+.17*(1.-cover.x),.5);
 float zoom=1.+pow(progress,2.2)*5.5;
 vec2 focus=vec2(.70,.30);
 p=focus+(p-focus)/zoom;
 // Restrict silk displacement to its coral pixels and the foreground path.
 vec3 original=texture2D(plate,p).rgb;
 float coral=smoothstep(.025,.13,original.r-max(original.g,original.b));
 float area=smoothstep(.46,.78,p.y);
 float settle=1.-smoothstep(.72,1.,progress);
 p.x+=sin(p.y*26.+time*2.8)*.005*coral*area*settle;
 p.y+=sin(p.x*19.+p.y*12.+time*2.4)*.003*coral*area*settle;
 gl_FragColor=texture2D(plate,p);
}`;

export function EntranceStill(){return <section className="entry-still" aria-label="The Passage of Evidence"><img className="entry-still-image" src="/assets/visuals/entry-passage.webp" alt="A coral ribbon leading between towering ivory paper walls toward a lilac-lit passage"/><div className="entry-still-copy"><h2>Every use<br/>has a<br/>beginning.</h2><span>FOLLOW THE SOURCE</span></div><a className="entry-continue" href="#overview">Explore Consent Waypoint <span aria-hidden="true">↓</span></a></section>}

export default function Entrance({onComplete,onHandoff}) {
 const root=useRef(null), canvas=useRef(null), pauseButton=useRef(null), skip=useRef(null), finishAction=useRef(null), timelineRef=useRef(null), pausedRef=useRef(false), complete=useRef(onComplete);
 const [paused,setPaused]=useState(false);
 complete.current=onComplete;
 const togglePaused=()=>setPaused(current=>{const next=!current;pausedRef.current=next;timelineRef.current?.paused(next);return next;});
 useEffect(()=>{
  let disposed=false, finished=false, frame=0, timeline, gl, texture, program, buffer;
  const previousFocus=document.activeElement;
  const finish=()=>{if(finished||disposed)return;finished=true;complete.current();if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});};
  finishAction.current=finish;
  skip.current?.focus({preventScroll:true});
  const key=e=>{if(e.key==='Escape')finish();if(e.key==='Tab'){const controls=[pauseButton.current,skip.current].filter(Boolean);if(!controls.length)return;e.preventDefault();const active=controls.indexOf(document.activeElement),direction=e.shiftKey?-1:1;controls[(active+direction+controls.length)%controls.length]?.focus();}};
  window.addEventListener('keydown',key);window.addEventListener('wheel',finish,{passive:true});window.addEventListener('touchmove',finish,{passive:true});
  const surface=canvas.current;
  surface.addEventListener('webglcontextlost',finish);
  const image=new Image(); image.src='/assets/visuals/entry-passage.webp';
  const timeout=setTimeout(finish,3500);
  image.onerror=finish;
  image.onload=()=>{
   if(disposed||finished)return;clearTimeout(timeout);
   const state={progress:0};
   const plate=root.current.querySelector('.entrance-plate'),copy=root.current.querySelector('.entrance-copy'),light=root.current.querySelector('.entrance-light');
   try{
    gl=canvas.current.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});
    if(!gl)throw new Error('Canvas fallback');
    const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){gl.deleteShader(s);throw new Error('Shader fallback');}return s;};
    program=gl.createProgram();const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,fragment);gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error('Link fallback');gl.useProgram(program);
    buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);const pos=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
    texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,image);
    const uniforms=Object.fromEntries(['time','progress','aspect','imageAspect'].map(n=>[n,gl.getUniformLocation(program,n)]));
    let lastTick=performance.now(),lastDraw=0,shaderTime=0;
    const draw=now=>{if(disposed||finished)return;frame=requestAnimationFrame(draw);const delta=Math.min((now-lastTick)/1000,.05);lastTick=now;if(!pausedRef.current)shaderTime+=delta;if(now-lastDraw<30)return;lastDraw=now;const rect=root.current.getBoundingClientRect(),dpr=Math.min(devicePixelRatio,1.5);const w=Math.round(rect.width*dpr),h=Math.round(rect.height*dpr);if(canvas.current.width!==w||canvas.current.height!==h){canvas.current.width=w;canvas.current.height=h;gl.viewport(0,0,w,h);}gl.uniform1f(uniforms.time,shaderTime);gl.uniform1f(uniforms.progress,state.progress);gl.uniform1f(uniforms.aspect,w/h);gl.uniform1f(uniforms.imageAspect,image.width/image.height);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);};
    frame=requestAnimationFrame(draw);canvas.current.style.opacity='1';
   }catch{
    // The same camera journey remains available without a GPU renderer.
    gsap.set(plate,{transformOrigin:'70% 30%' });
   }
   timeline=gsap.timeline({onComplete:finish,paused:pausedRef.current});timelineRef.current=timeline;
   timeline.to(copy,{opacity:1,y:0,duration:.9},0)
    .to(state,{progress:1,duration:7.5,ease:'power1.inOut'},.5)
    .to(plate,{scale:6.5,duration:7.5,ease:'power2.in'},.5)
    .to(copy,{opacity:0,y:-20,duration:1},2.8)
    .to(light,{opacity:.9,duration:.8},6.7)
    .call(()=>onHandoff?.(),[],7.3)
    .to(root.current,{opacity:0,duration:1.3,ease:'power2.inOut'},7.3);
  };
  return()=>{disposed=true;clearTimeout(timeout);cancelAnimationFrame(frame);timeline?.kill();gsap.killTweensOf(root.current?.querySelectorAll('.entrance-plate'));window.removeEventListener('keydown',key);window.removeEventListener('wheel',finish);window.removeEventListener('touchmove',finish);surface.removeEventListener('webglcontextlost',finish);if(gl){if(texture)gl.deleteTexture(texture);if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program);}image.onload=null;image.onerror=null;};
 },[]);
 return createPortal(<div className="entrance" ref={root} role="dialog" aria-modal="true" aria-label="Consent Waypoint entrance animation">
  <img className="entrance-plate" src="/assets/visuals/entry-passage.webp" alt=""/>
  <canvas ref={canvas} className="entrance-canvas" aria-hidden="true"/>
  <div className="entrance-light" aria-hidden="true"/>
  <div className="entrance-copy"><div className="entrance-brand"><img src="/assets/brand-assets/mark-reverse.svg" alt=""/>Consent Waypoint</div><p>Every use<br/>has a<br/>beginning.</p><span>FOLLOW THE SOURCE</span></div>
  <div className="entrance-controls">
   <button ref={pauseButton} className="entrance-control" onClick={togglePaused} aria-pressed={paused}>{paused?'Resume':'Pause'} <span aria-hidden="true">{paused?'▶':'Ⅱ'}</span></button>
   <button ref={skip} className="entrance-control entrance-skip" onClick={()=>finishAction.current?.()}>Skip intro <span aria-hidden="true">→</span></button>
  </div>
 </div>,document.body);
}
