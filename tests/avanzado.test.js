'use strict';
const assert=require('node:assert/strict'),A=require('../avanzado.js'),S=require('../estadistica.js');
const close=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
close(A.quant(.95,'chi',24),36.41502850180731);
close(A.quant(.975,'f',24,29),2.1540059930711766,1e-6);
const c={confidence:.95,tail:'two'};
const p=A.compare({...c,type:'paired',delta:0,a:[78,85,82,90,76,88],b:[72,80,79,82,74,81]});
close(p.estimate,31/6);assert.equal(p.df,5);assert.ok(p.reject);
assert.throws(()=>A.compare({...c,type:'paired',delta:0,a:[1,2],b:[1]}));
const power=A.power({...c,sd:15,delta:5,n:50,target:.8});
assert.ok(power.at(power.required)>=.8);assert.ok(power.at(power.required-1)<.8);close(A.power({...c,sd:15,delta:0,n:50,target:.8}).value,.05);
assert.equal(A.power({...c,tail:'right',sd:15,delta:-5,n:50,target:.8}).required,null);
const rows=Array.from({length:103},(_,i)=>({id:'R'+i,stratum:['A','B','C'][i%3],value:100+i}));
for(const method of ['mas','systematic','stratified'])for(const allocation of ['proportional','neyman'])for(const n of [1,17,103]){
const d={rows,n,seed:2026,method,allocation},r=A.sampling(d);assert.equal(r.selected.length,n);assert.equal(new Set(r.selected.map(x=>x.id)).size,n);assert.deepEqual(r,A.sampling(d));if(method==='stratified'){assert.equal(r.allocation.reduce((s,g)=>s+g.n,0),n);assert.ok(r.allocation.every(g=>g.n<=g.N));}}
assert.throws(()=>A.sampling({rows,n:104,seed:0,method:'mas'}));assert.throws(()=>A.sampling({rows:[rows[0],rows[0]],n:1,seed:0,method:'mas'}));
console.log('Pruebas avanzadas: OK');
