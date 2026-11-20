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
  /* make room for the stack, and keep the logo and buttons clear of it */
  const list=nav.querySelector('.header-nav-list')||nav;
  const fit=()=>{
    bar.style.removeProperty('padding-'+side);bar.style.minHeight='';
    const n=list.getBoundingClientRect(),gap=parseFloat(ds.space)||40;
    const hit=[...bar.querySelectorAll('.header-title-text,.header-title-logo,.header-actions a,.header-actions button,.header-actions svg')].some(el=>{const r=el.getBoundingClientRect();return r.width&&r.height&&r.left<n.right+gap&&r.right>n.left-gap});
    if(hit)bar.style.setProperty('padding-'+side,(n.width+gap)+'px');
    if(!h.classList.contains('sn-overlap'))bar.style.minHeight=(list.offsetHeight+list.offsetTop)+'px'};
  /* sticky: the stack scrolls up with the header, then stays pinned in the corner */
  if((ds.sticky||'off')==='on'){
    const fl=document.createElement('nav');fl.className='sn-float sn-'+side+((ds.stickyBlend||'off')==='on'?' sn-blend':'');
    fl.setAttribute('aria-label','Site navigation');fl.append(list.cloneNode(true));document.body.append(fl);
    [...h.style].filter(p=>p.startsWith('--sn-')).forEach(p=>fl.style.setProperty(p,h.style.getPropertyValue(p)));
    const o=[...list.querySelectorAll('a')],c=[...fl.querySelectorAll('a')];
    let TOP=ds.stickyTop!=null&&ds.stickyTop!==''?parseFloat(ds.stickyTop):null;
    const look=()=>{const cs=getComputedStyle(o[0]||list);['fontFamily','fontSize','fontWeight','letterSpacing','textTransform','color','lineHeight'].forEach(k=>fl.style[k]=cs[k]);
      o.forEach((a,i)=>c[i]&&(c[i].style.textDecoration=getComputedStyle(a).textDecoration))};
    const check=()=>{const r=list.getBoundingClientRect();if(TOP==null&&scrollY<1)TOP=r.top;const t=TOP??20;
      const stuck=r.top<t;fl.classList.toggle('sn-show',stuck);list.style.visibility=stuck?'hidden':'';
      fl.style.top=t+'px';fl.style[side]=(side==='right'?innerWidth-r.right-(innerWidth-document.documentElement.clientWidth):r.left)+'px'};
    look();check();addEventListener('scroll',check,{passive:true});addEventListener('resize',()=>{look();check()});addEventListener('load',()=>{look();check()});
  }
  fit();addEventListener('resize',fit);addEventListener('load',fit);if(document.fonts)document.fonts.ready.then(fit);
})();
