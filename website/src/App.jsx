import React,{Suspense,lazy,useEffect,useState,useRef} from 'react';
import {useLocation} from 'react-router-dom';
import Home from './Home';
import {Header,Footer} from './components';
import {useMotion} from './motion';
import {track,installEvents} from './analytics';
const Products=lazy(()=>import('./Products'));
const Editorial=lazy(()=>import('./Editorial'));
const Demo=lazy(()=>import('./Demo'));
const titles={'/':'Rights infrastructure for agent retrieval','/why-rights':'Why usage rights matter','/products':'The product suite','/platform':'The rights workflow','/solutions':'Teams & responsibilities','/pricing':'Pilot pricing','/workshop':'Rights-matrix workshop','/about':'About','/contact':'Contact','/trust':'Trust & responsibilities','/resources':'Field guides','/validation':'Pilot validation','/sign-in':'Workspace access','/legal/privacy':'Privacy','/legal/terms':'Terms'};
function Page({path,motion}){return path.startsWith('/demo')?<Demo/>:path==='/'?<Home motion={motion}/>:path==='/products'||/^\/products\/rights-(desk|review|proof|signal|report)$/.test(path)?<Products path={path}/>:<Editorial path={path}/>}
function RenderedPage({path,motion}){const ref=useRef();useMotion(ref,path,motion);return <div ref={ref} className={path!=='/'&&!path.startsWith('/demo')?'secondary-page-motion':undefined}><Page path={path} motion={motion}/></div>}
export default function App(){const {pathname,hash}=useLocation(),path=pathname.replace(/\/$/,'')||'/';const [motion,setMotion]=useState(()=>{try{return localStorage.getItem('cw-motion')!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches}catch{return false}});const demo=path.startsWith('/demo');const lastPath=useRef(null);
 useEffect(()=>{const m=matchMedia('(prefers-reduced-motion: reduce)');const on=e=>{if(e.matches)setMotion(false)};m.addEventListener('change',on);return()=>m.removeEventListener('change',on)},[]);
 useEffect(()=>{document.documentElement.classList.toggle('motion-disabled',!motion);try{localStorage.setItem('cw-motion',motion?'on':'off')}catch{}},[motion]);
 useEffect(()=>{const title=titles[path]||path.split('/').at(-1).replaceAll('-',' ').replace(/\b\w/g,c=>c.toUpperCase());document.title=`${title} — Consent Waypoint`;if(!hash)window.scrollTo(0,0);else requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView());track(demo?'demo_open':'landing_view',{path});if(path==='/demo/receipts/CW-0017')track('receipt_view',{path,id:'CW-0017'});if(lastPath.current!==null&&lastPath.current!==path)document.getElementById('main-content')?.focus({preventScroll:true});lastPath.current=path;if(path==='/pricing')track('pricing_view',{path});},[path,hash,demo]);
 useEffect(()=>installEvents(),[]);
 return <><a href="#main-content" className="skip-link">Skip to content</a>{!demo&&<Header/>}<div className="scroll-progress" aria-hidden="true"/><main id="main-content" tabIndex={-1}><Suspense fallback={<div className="page-loading" role="status">Opening the next chapter…</div>}><RenderedPage key={demo?'demo':path} path={path} motion={motion}/></Suspense></main>{!demo&&<Footer motion={motion} setMotion={setMotion}/>}</>;
}
