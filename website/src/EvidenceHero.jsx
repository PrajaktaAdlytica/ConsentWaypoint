import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Button, Icon} from './components';
import './EvidenceHero.css';
import Entrance from './Entrance';

gsap.registerPlugin(ScrollTrigger);
const clauses = {
  Read: ['Authorised users may consult the corpus', 'for internal research.'],
  Embed: ['Indexing is limited to', 'the approved internal Atlas index R2.'],
  Inference: ['The agreement does not specify inference', 'by a third-party model.'],
};
export default function EvidenceHero({motion}) {
  const root = useRef(null), scene = useRef(null);
  const [purpose, setPurpose] = useState('Inference');
  const [destination, setDestination] = useState('External model');
  const [chapter, setChapter] = useState(1);
  const [basis, setBasis] = useState(false);
  const [intro, setIntro] = useState(()=>motion && !window.location.hash);
  useEffect(()=>{if(!motion)setIntro(false)},[motion]);
  function reachHero(){if(root.current)window.scrollTo({top:Math.max(0,root.current.getBoundingClientRect().top+window.scrollY-86),behavior:'instant'});}
  const outcome = purpose !== 'Inference' && destination === 'Internal' ? 'Allow' : 'Requires counsel';
  const reason = outcome === 'Allow'
    ? purpose === 'Read' ? 'Internal research is within the reviewed scope.' : 'Approved Atlas index R2 · internal use only.'
    : purpose === 'Inference' ? 'Model inference has no approved grant. Route to counsel.' : 'This destination is outside the reviewed internal scope.';
  useLayoutEffect(() => {
    if (!motion || !root.current) return;
    const context = gsap.context(() => {
      gsap.fromTo('.evidence-hero-heading', {y:20, opacity:0}, {y:0, opacity:1, duration:.8, ease:'power3.out'});
      const timeline = gsap.timeline({scrollTrigger:{trigger:root.current,start:'top 86px',end:'bottom 25%',scrub:.8,invalidateOnRefresh:true}});
      timeline.fromTo('.hero-book-motion', {y:24,rotationX:10,scale:.96}, {y:-30,rotationX:-3,scale:1.015,ease:'none',duration:1})
        .fromTo('.hero-source-highlight', {backgroundColor:'#f4d49355'}, {backgroundColor:'#f4d493',duration:.6,ease:'none'}, .2)
        .fromTo('.hero-decision', {y:12}, {y:0,duration:.5,ease:'none'}, .5);
      scene.current = timeline.scrollTrigger;
    }, root);
    return () => { scene.current = null; context.revert(); };
  }, [motion]);
  function selectChapter(index) {
    setChapter(index);
    setBasis(index === 2);
    if (motion && scene.current) {
      const target = scene.current.start + (scene.current.end - scene.current.start) * [0,.5,.88][index];
      window.scrollTo({top:Math.max(0,target),behavior:'smooth'});
    }
  }
  return <section className="evidence-hero" id="overview" ref={root} aria-labelledby="hero-title">
    {intro && motion && <Entrance onHandoff={reachHero} onComplete={()=>{reachHero();setIntro(false)}}/>}
    <img className="hero-stage-image" src="/assets/visuals/hero-stage.png" alt="" fetchPriority="high"/>
    <div className="container evidence-hero-content">
      <div className="evidence-hero-heading">
        <h1 id="hero-title">The source. The use.<br/><span>The reason.</span></h1>
        <p>Keep the source clause close to every agent decision.</p>
      </div>
      <div className="hero-book-scene" onPointerMove={event => {
        if (!motion || event.pointerType !== 'mouse') return;
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--book-tilt', `${((event.clientX-box.left)/box.width-.5)*3}deg`);
      }} onPointerLeave={event => event.currentTarget.style.setProperty('--book-tilt','0deg')}>
        <div className="hero-book-motion">
          <img className="hero-book-image" src="/assets/visuals/hero-book.png" alt="Open ivory folio with a coral ribbon and lilac page tabs" fetchPriority="high"/>
          <div className="hero-book-page hero-source-page">
            <span className="hero-book-mono">ATLAS REFERENCE / LIC-17</span>
            <span className="hero-clause-number">§ 4.2</span>
            <p className="hero-source-excerpt" key={purpose}>{clauses[purpose][0]} <mark className="hero-source-highlight">{clauses[purpose][1]}</mark></p>
            <p className="hero-source-body">Authorised internal research. Approved Atlas index R2. Working copies retained for up to thirty days. Redistribution of source material is prohibited.</p>
            <div className="hero-source-footer">Source: Atlas Reference · § 4.2 · R2.4</div>
          </div>
          <div className="hero-book-page hero-use-page">
            <fieldset><legend>1 / Intended use</legend><div className="hero-segments">{['Read','Embed','Inference'].map(value => <button key={value} aria-pressed={purpose === value} onClick={() => setPurpose(value)}>{value}</button>)}</div></fieldset>
            <fieldset><legend>2 / Destination</legend><div className="hero-segments">{['Internal','External model'].map(value => <button key={value} aria-pressed={destination === value} onClick={() => setDestination(value)}>{value}</button>)}</div></fieldset>
            <div className={`hero-decision ${outcome === 'Allow' ? 'is-allow' : ''}`} role="status" aria-live="polite"><Icon name={outcome === 'Allow' ? 'check' : 'eye'} size={22}/><div><strong>{outcome}</strong><span>{purpose} · {destination} · Output none</span></div></div>
            <div className="hero-basis"><span className="hero-book-mono">3 / Source basis</span><button aria-expanded={basis} onClick={() => setBasis(!basis)}><span>§ 4.2 · {basis ? reason : 'Inspect the reviewed clause'}</span><Icon name="external" size={18}/></button></div>
            <span className="hero-fiction-note">Illustrative source · No retrieval executed</span>
          </div>
        </div>
      </div>
      <div className="hero-story-controls"><div className="hero-conversion"><Button to="/workshop">Request a workshop</Button><Link className="text-link" to="/demo">Sample workspace<Icon/></Link></div><div className="hero-chapters" role="group" aria-label="Explore the evidence sequence">{['Source','Intended use','Decision'].map((value,index) => <button key={value} aria-pressed={chapter === index} onClick={() => selectChapter(index)}>{value}</button>)}</div>{motion && <button className="hero-replay" onClick={()=>setIntro(true)}>Replay intro ↗</button>}</div>
    </div>
  </section>;
}
