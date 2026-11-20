/* Stacked Nav by Kill Vanilla Studio: https://github.com/sq-assets/stacked-nav */
(()=>{
  const ds=(document.currentScript||{}).dataset||{};
  const pages=(ds.pages||'').split(',').map(p=>p.trim().replace(/\/$/,'')).filter(Boolean);
  if(pages.length&&!pages.includes(location.pathname.replace(/\/$/,'')))return;
  const h=document.querySelector('#header'),bar=h&&h.querySelector('.header-display-desktop'),nav=bar&&bar.querySelector('.header-nav');
  if(!nav)return;
  const side=(ds.side||'right').toLowerCase()==='left'?'left':'right';
  const px=v=>/^[\d.]+$/.test(String(v))?v+'px':v;
  const set=(k,v)=>v!=null&&v!==''&&h.style.setProperty(k,v);
  h.classList.add('sn-on','sn-'+side);if((ds.overlap||'off')==='on')h.classList.add('sn-overlap');
  set('--sn-gap',ds.gap&&px(ds.gap));set('--sn-size',ds.size&&px(ds.size));set('--sn-weight',ds.weight);
  set('--sn-case',ds.uppercase==='on'?'uppercase':ds.uppercase==='off'?'none':'');set('--sn-spacing',ds.letterSpacing);
  set('--sn-color',ds.color);set('--sn-hover',ds.hoverColor);set('--sn-active',ds.activeColor);set('--sn-top',ds.top&&px(ds.top));
  set('--sn-align',{left:'flex-start',right:'flex-end',center:'center'}[(ds.align||side).toLowerCase()]);
  /* keep the logo and buttons clear of the stack, and make room for it */
  const fit=()=>{
    bar.style.removeProperty('padding-'+side);bar.style.minHeight='';
    const n=nav.getBoundingClientRect(),gap=parseFloat(ds.space)||40;
    const hit=[...bar.querySelectorAll('.header-title,.header-actions')].some(el=>{const r=el.getBoundingClientRect();return r.width&&r.left<n.right&&r.right>n.left});
    if(hit)bar.style.setProperty('padding-'+side,(n.width+gap)+'px');
    if(!h.classList.contains('sn-overlap'))bar.style.minHeight=(nav.offsetHeight+nav.offsetTop)+'px'};
  fit();addEventListener('resize',fit);addEventListener('load',fit);if(document.fonts)document.fonts.ready.then(fit);
})();
