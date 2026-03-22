import{c as B}from"./chunk-AEOMTBSW-09l3K3gl.js";import{p as K}from"./treemap-KZPCXAKY-RU5UWGQG-CHNTr9Rb.js";import{X as Z,Y as G,V as H,j as N,Z as Q,K as q,m as r,p as w,x as I,L as J,aO as _,aP as ee,aQ as M,aR as te,U as ae,$ as ie,aS as le,n as re}from"./mermaid.esm.min-CTFk2j-u.js";import"./chunk-H3VCZNTA-BRSLEGtk.js";import"./app-BIAMY9LN.js";var se=re.pie,v={sections:new Map,showData:!1},u=v.sections,y=v.showData,oe=structuredClone(se),ne=r(()=>structuredClone(oe),"getConfig"),pe=r(()=>{u=new Map,y=v.showData,ie()},"clear"),de=r(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=r(()=>u,"getSections"),ue=r(e=>{y=e},"setShowData"),ge=r(()=>y,"getShowData"),P={getConfig:ne,clear:pe,setDiagramTitle:q,getDiagramTitle:Q,setAccTitle:N,getAccTitle:H,setAccDescription:G,getAccDescription:Z,addSection:de,getSections:ce,setShowData:ue,getShowData:ge},he=r((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),me={parse:r(async e=>{let a=await K("pie",e);w.debug(a),he(a,P)},"parse")},fe=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),xe=fe,$e=r(e=>{let a=[...e.values()].reduce((l,s)=>l+s,0),D=[...e.entries()].map(([l,s])=>({label:l,value:s})).filter(l=>l.value/a*100>=1).sort((l,s)=>s.value-l.value);return le().value(l=>l.value)(D)},"createPieArcs"),Se=r((e,a,D,l)=>{w.debug(`rendering pie chart
`+e);let s=l.db,T=I(),b=J(s.getConfig(),T.pie),C=40,o=18,d=4,p=450,g=p,h=_(a),n=h.append("g");n.attr("transform","translate("+g/2+","+p/2+")");let{themeVariables:i}=T,[k]=ee(i.pieOuterStrokeWidth);k??=2;let A=b.textPosition,c=Math.min(g,p)/2-C,L=M().innerRadius(0).outerRadius(c),W=M().innerRadius(c*A).outerRadius(c*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",c+k/2).attr("class","pieOuterCircle");let m=s.getSections(),E=$e(m),U=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],f=0;m.forEach(t=>{f+=t});let O=E.filter(t=>(t.data.value/f*100).toFixed(0)!=="0"),x=te(U);n.selectAll("mySlices").data(O).enter().append("path").attr("d",L).attr("fill",t=>x(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(O).enter().append("text").text(t=>(t.data.value/f*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let R=[...m.entries()].map(([t,S])=>({label:t,value:S})),$=n.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(t,S)=>{let F=o+d,X=F*R.length/2,Y=12*o,j=S*F-X;return"translate("+Y+","+j+")"});$.append("rect").attr("width",o).attr("height",o).style("fill",t=>x(t.label)).style("stroke",t=>x(t.label)),$.append("text").attr("x",o+d).attr("y",o-d).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);let V=Math.max(...$.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),z=g+C+o+d+V;h.attr("viewBox",`0 0 ${z} ${p}`),ae(h,p,z,b.useMaxWidth)},"draw"),we={draw:Se},Ce={parser:me,db:P,renderer:we,styles:xe};export{Ce as diagram};
