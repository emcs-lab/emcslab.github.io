/* EMCS Lab site scripts (shared by all pages) */
var BASE=document.documentElement.getAttribute('data-base')||'./';
var ALL={};[J,JREVIEW,IC,DC,PT].forEach(function(l){l.forEach(function(e){ALL[e[0]]=e;});});

/* ---------- RENDER HELPERS ---------- */
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
function authors(a){return esc(a).replace(/Kim, Y\.\*|Kim, Y\.|Kim, Y\. H\.|Yonghun Kim\*|Yong Hun Kim|김용훈/g,function(m){return '<em>'+m+'</em>';});}
function num(k){return k.replace(/^[A-Z]/,'');}
function pubItem(e){
  return '<li><span class="no">['+num(e[0])+']</span><div><span class="ti">'+esc(e[3])+(e[5]?'<span class="badge">'+e[5]+'</span>':'')+'</span><div class="au">'+authors(e[2])+'</div><div class="ve"><i>'+e[1]+'</i> · '+esc(e[4])+'</div></div></li>';
}
function renderList(cat){
  var src=cat==='journal'?JREVIEW.concat(J):cat==='iconf'?IC:cat==='dconf'?DC:PT;
  var out='',year=null;
  if(cat==='journal'){
    out+='<div class="yearhead">Under review</div><ul class="publist">'+JREVIEW.map(pubItem).join('')+'</ul>';
    src=J;
  }
  src.forEach(function(e){
    if(e[1]!==year){if(year!==null)out+='</ul>';year=e[1];out+='<div class="yearhead">'+year+'</div><ul class="publist">';}
    out+=pubItem(e);
  });
  out+='</ul>';
  document.getElementById('publist').innerHTML=out;
}
function rcard(r){
  return '<a class="rcard" href="'+BASE+'research/'+r.slug+'.html"><span class="idx">'+r.idx+'</span>'+ICONS[r.icon]+'<h3>'+r.title+'</h3><p>'+r.short+'</p><div class="kw">'+r.kw.slice(0,3).map(function(k){return '<span>'+k+'</span>';}).join('')+'</div></a>';
}
var g;if(g=document.getElementById('rgrid-home'))g.innerHTML=RESEARCH.map(rcard).join('');
if(g=document.getElementById('rgrid-research'))g.innerHTML=RESEARCH.map(rcard).join('');
if(g=document.getElementById('pubhome'))g.innerHTML=J.slice(0,5).map(function(e){return '<li><span class="yr">'+e[1]+'</span><div><b>'+esc(e[3])+'</b><small>'+authors(e[2])+' · '+esc(e[4])+'</small></div></li>';}).join('');

function renderDetail(slug){
  var i=RESEARCH.findIndex(function(r){return r.slug===slug;});if(i<0)return false;
  var r=RESEARCH[i];
  document.getElementById('rd-crumb').textContent=r.title;
  document.getElementById('rd-idx').textContent='Research · '+r.idx;
  document.getElementById('rd-title').textContent=r.title;
  document.getElementById('rd-lead').textContent=r.lead;
  document.getElementById('rd-body').innerHTML=r.body;
  document.getElementById('rd-kw').innerHTML=r.kw.map(function(k){return '<span>'+k+'</span>';}).join('');
  document.getElementById('rd-pubs').innerHTML=r.pubs.length?r.pubs.map(function(k){var e=ALL[k];return e?'<li><b>'+k+'</b><span>'+esc(e[3])+' <span style="font-family:var(--mono);font-size:11.5px">('+e[1]+')</span></span></li>':'';}).join(''):'<li><span style="grid-column:1/-1">Ongoing project; first results in preparation.</span></li>';
  document.getElementById('rd-members').innerHTML=r.members.map(function(m){return '<li><span style="grid-column:1/-1">'+m+'</span></li>';}).join('');
  document.getElementById('rd-subnav').innerHTML='<a href="'+BASE+'research/index.html">Overview</a>'+RESEARCH.map(function(x){return '<a href="'+BASE+'research/'+x.slug+'.html"'+(x.slug===slug?' class="on"':'')+'>'+x.title+'</a>';}).join('');
  var p=RESEARCH[(i+RESEARCH.length-1)%RESEARCH.length],n=RESEARCH[(i+1)%RESEARCH.length];
  document.getElementById('rd-nav').innerHTML='<a href="'+BASE+'research/'+p.slug+'.html"><span>← Previous</span>'+p.title+'</a><a href="'+BASE+'research/'+n.slug+'.html" style="text-align:right"><span>Next →</span>'+n.title+'</a>';
  return true;
}


/* ---------- PUB TABS ---------- */
var tabs=document.querySelectorAll('#pubtabs button');
if(tabs.length){renderList('journal');tabs.forEach(function(b){b.addEventListener('click',function(){
  tabs.forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false');});
  renderList(b.dataset.cat);
});});}
/* ---------- RESEARCH DETAIL ---------- */
var rd=document.body.getAttribute('data-research');if(rd)renderDetail(rd);
/* ---------- SCOPE ---------- */
(function(){
  var c=document.getElementById('scope');if(!c)return;var ctx=c.getContext('2d');
  var W=c.width,H=c.height,t=0,reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='rgba(138,155,174,.18)';ctx.lineWidth=1;
    for(var x=0;x<=W;x+=W/10){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(var y=0;y<=H;y+=H/6){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    var mid=H*0.42,amp=H*0.26,cols=['#E08A52','#6FB1E0','#8FD3A4'];
    for(var p=0;p<3;p++){
      ctx.strokeStyle=cols[p];ctx.lineWidth=2;ctx.beginPath();
      for(var x=0;x<=W;x++){var th=x/W*4*Math.PI-t-p*2*Math.PI/3;var v=Math.sin(th)+0.04*Math.sin(6*th+t*2);var y=mid-amp*v;x?ctx.lineTo(x,y):ctx.moveTo(x,y);}
      ctx.stroke();
    }
    var tb=H*0.86;
    ctx.strokeStyle='rgba(231,236,242,.35)';ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(0,tb);ctx.lineTo(W,tb);ctx.stroke();ctx.setLineDash([]);
    ctx.strokeStyle='#E7ECF2';ctx.lineWidth=1.8;ctx.beginPath();
    for(var x=0;x<=W;x++){var th=x/W*4*Math.PI-t;var y=tb-6*Math.sin(6*th)*Math.exp(-((x/W)*3));x?ctx.lineTo(x,y):ctx.moveTo(x,y);}
    ctx.stroke();
    ctx.fillStyle='#8A9BAE';ctx.font='11px IBM Plex Mono, monospace';ctx.fillText('T_e ref',8,tb-10);ctx.fillText('ripple → 0 after DOB',W-150,tb-10);
    if(!reduce){t+=0.035;requestAnimationFrame(draw);}
  }
  draw();
})();

/* ---------- COPY ---------- */
var cb=document.getElementById('copybtn');
if(cb)cb.addEventListener('click',function(){
  var el=document.getElementById('mailtxt');
  function done(){cb.textContent='copied';setTimeout(function(){cb.textContent='copy';},1500);}
  function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);}
  try{navigator.clipboard.writeText(el.textContent).then(done,fallback);}catch(e){fallback();}
});
