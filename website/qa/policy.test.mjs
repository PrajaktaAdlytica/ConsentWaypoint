import assert from 'node:assert/strict';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try {
  const {evaluate,SOURCES,EVENTS}=await server.ssrLoadModule('/src/Demo.jsx');
  const source=id=>SOURCES.find(s=>s.id===id);
  const cases=[
    ['External inference pauses','LIC-17','inference','external',30,'granted','atlas-r2','external-a','Requires counsel','Paused'],
    ['Internal read is scoped','LIC-17','read','internal',30,'granted','atlas-r2','internal-research','Allow','Not executed'],
    ['Redistribution is prohibited','LIC-17','redistribution','internal',30,'granted','atlas-r2','internal-research','Deny','Blocked'],
    ['Excess retention pauses','LIC-17','read','internal',90,'granted','atlas-r2','internal-research','Requires counsel','Paused'],
    ['Entitlement is a separate gate','LIC-17','read','internal',30,'unconfirmed','atlas-r2','internal-research','Not evaluated','Blocked'],
    ['Expired grant denies','LIC-31','read','internal',7,'granted','atlas-r2','internal-research','Deny','Blocked'],
    ['Pending review never allows','LIC-22','read','internal',7,'granted','atlas-r2','internal-research','Requires counsel','Paused'],
    ['Rejected scope denies','LIC-41','read','internal',7,'granted','atlas-r2','internal-research','Deny','Blocked'],
    ['Prohibited inference denies','LIC-38','inference','external',7,'granted','atlas-r2','external-a','Deny','Blocked'],
    ['Approved index matters','LIC-17','embedding','internal',30,'granted','meridian-m1','internal-research','Requires counsel','Paused'],
    ['Named approved index allows','LIC-17','embedding','internal',30,'granted','atlas-r2','internal-research','Allow','Not executed'],
    ['Internal inference remains unapproved','LIC-17','inference','internal',30,'granted','atlas-r2','internal-research','Requires counsel','Paused'],
    ['Model and destination mismatch pauses','LIC-17','inference','external',30,'granted','atlas-r2','internal-research','Requires counsel','Paused'],
  ];
  for(const [name,id,purpose,destination,retention,access,index,model,outcome,execution] of cases){
    const actual=evaluate(source(id),purpose,destination,retention,access,index,model);
    assert.equal(actual.outcome,outcome,name);assert.equal(actual.execution,execution,name);
    assert.ok(actual.reason&&actual.next,name+' has evidence and next action');
  }
  assert.equal(SOURCES.length,10);assert.equal(EVENTS.length,10);
  assert.equal(new Set(SOURCES.map(s=>s.id)).size,10);
  assert.equal(new Set(EVENTS.map(e=>e.id)).size,10);
  const totals={'Allow':0,'Requires counsel':0,'Deny':0};
  for(const event of EVENTS){
    const result=evaluate(source(event.source),event.purpose.toLowerCase(),event.destination.toLowerCase(),parseInt(event.retention),'granted',event.index||'atlas-r2',event.model||'external-a');
    assert.equal(result.outcome,event.outcome,event.id+' fixture matches evaluator');
    assert.equal(result.execution,event.status,event.id+' execution matches evaluator');
    totals[event.outcome]++;
  }
  assert.deepEqual(totals,{'Allow':4,'Requires counsel':3,'Deny':3});
  assert.ok(EVENTS.every(e=>e.status!=='Executed'));
  console.log(`PASS: ${cases.length} policy boundary cases; 10 fixture decisions; 4/3/3 report reconciliation; zero executions.`);
} finally {await server.close();}
