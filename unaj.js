/* Presentación y navegación UNAJ. No contiene cálculos estadísticos. */
'use strict';
(()=>{
 const byId=id=>document.getElementById(id),collapse=byId('collapseNav');
 collapse.addEventListener('click',()=>{const compact=document.body.classList.toggle('compact-nav');collapse.setAttribute('aria-expanded',String(!compact));collapse.setAttribute('aria-label',compact?'Expandir menú':'Contraer menú');});
 const form=byId('form'),error=byId('error');
 if(form&&error){new MutationObserver(()=>{form.classList.toggle('has-error',!error.hidden);if(!error.hidden){error.setAttribute('tabindex','-1');error.focus({preventScroll:true});}}).observe(error,{attributes:true,attributeFilter:['hidden']});}
 const chart=byId('chart');
 if(chart&&byId('homeView')){const axes=document.createElement('p');axes.className='chart-axes';chart.after(axes);new MutationObserver(()=>{if(!chart.children.length){axes.textContent='';return;}const labels={hypothesis:'Eje horizontal: estadístico Z / t · Eje vertical: densidad',variance:'Eje horizontal: estadístico χ² / F · Eje vertical: densidad',compare:'Eje horizontal: estadístico t · Eje vertical: densidad',interval:'Eje horizontal: valor del parámetro estimado',power:'Eje horizontal: tamaño n · Eje vertical: potencia (0–100 %)',sample:'Proporción de observaciones requeridas',sampling:'Fracción de registros seleccionados'};axes.textContent=labels[mode]||'';}).observe(chart,{childList:true});}
 const fields=byId('fields');
 if(fields){const labelInputs=()=>fields.querySelectorAll('input').forEach(input=>{if(!input.placeholder&&input.value)input.placeholder='Ej.: '+input.value;});new MutationObserver(labelInputs).observe(fields,{childList:true});labelInputs();}
 if(!byId('homeView'))return;
 const toolButtons=[...document.querySelectorAll('nav button[data-mode]')],pages=['home','info',...toolButtons.map(b=>b.dataset.mode)];
 function display(page,focus=false){
  const isTool=page!=='home'&&page!=='info';
  byId('homeView').hidden=page!=='home';byId('infoView').hidden=page!=='info';byId('toolView').hidden=!isTool;
  document.querySelectorAll('[data-page]').forEach(a=>{if(a.dataset.page===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  toolButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===page)));
  const title=page==='home'?'Inicio':page==='info'?'Información':modules[page][0];
  byId('currentSection').textContent=title;document.title=title+' | Estadística Inferencial UNAJ';
  if(focus){const target=byId(page==='home'?'homeTitle':page==='info'?'infoTitle':'pageTitle');target.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
 }
 function go(page,focus=true){if(!pages.includes(page))page='home';if(page!=='home'&&page!=='info'){const b=toolButtons.find(b=>b.dataset.mode===page);b.click();}else display(page,focus);if(location.hash!=='#'+page)location.hash=page;}
 toolButtons.forEach(b=>b.addEventListener('click',()=>{display(b.dataset.mode,true);if(location.hash!=='#'+b.dataset.mode)location.hash=b.dataset.mode;}));
 document.querySelectorAll('[data-page],[data-open]').forEach(a=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();go(a.dataset.page||a.dataset.open);}));
 window.addEventListener('hashchange',()=>{const page=location.hash.slice(1)||'home';if(byId('currentSection').textContent!==(page==='home'?'Inicio':page==='info'?'Información':modules[page]?.[0]))go(page);});
 const initial=location.hash.slice(1)||'home';if(initial==='home'||initial==='info')display(initial);else go(initial,false);
})();
