import{c as S}from"./chunk-AEOMTBSW-BXRVFYq8.js";import{p as I}from"./treemap-KZPCXAKY-RU5UWGQG-aj7lwpdW.js";import{Y as E,X as F,Z as z,K as D,V as P,j as R,m as o,aO as V,$ as W,L as v,n as B,o as w,p as j,aT as G,U as Z}from"./mermaid.esm.min-6jWboAEB.js";import"./chunk-H3VCZNTA-B_5HiC6z.js";import"./app-B2DRjV_P.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},b={axes:[],curves:[],options:h},x=structuredClone(b),K=B.radar,U=o(()=>v({...K,...w().radar}),"getConfig"),M=o(()=>x.axes,"getAxes"),X=o(()=>x.curves,"getCurves"),Y=o(()=>x.options,"getOptions"),_=o(a=>{x.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),H=o(a=>{x.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:q(t.entries)}))},"setCurves"),q=o(a=>{if(a[0].axis==null)return a.map(e=>e.value);let t=M();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{let r=a.find(i=>i.axis?.$refText===e.name);if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),J=o(a=>{let t=a.reduce((e,r)=>(e[r.name]=r,e),{});x.options={showLegend:t.showLegend?.value??h.showLegend,ticks:t.ticks?.value??h.ticks,max:t.max?.value??h.max,min:t.min?.value??h.min,graticule:t.graticule?.value??h.graticule}},"setOptions"),N=o(()=>{W(),x=structuredClone(b)},"clear"),f={getAxes:M,getCurves:X,getOptions:Y,setAxes:_,setCurves:H,setOptions:J,getConfig:U,clear:N,setAccTitle:R,getAccTitle:P,setDiagramTitle:D,getDiagramTitle:z,getAccDescription:F,setAccDescription:E},Q=o(a=>{S(a,f);let{axes:t,curves:e,options:r}=a;f.setAxes(t),f.setCurves(e),f.setOptions(r)},"populate"),tt={parse:o(async a=>{let t=await I("radar",a);j.debug(t),Q(t)},"parse")},et=o((a,t,e,r)=>{let i=r.db,n=i.getAxes(),l=i.getCurves(),s=i.getOptions(),c=i.getConfig(),d=i.getDiagramTitle(),g=V(t),p=at(g,c),u=s.max??Math.max(...l.map(y=>Math.max(...y.entries))),m=s.min,$=Math.min(c.width,c.height)/2;rt(p,n,$,s.ticks,s.graticule),it(p,n,$,c),C(p,n,l,m,u,s.graticule,c),k(p,l,s.showLegend,c),p.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),at=o((a,t)=>{let e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return Z(a,r,e,t.useMaxWidth??!0),a.attr("viewBox",`0 0 ${e} ${r}`),a.append("g").attr("transform",`translate(${i.x}, ${i.y})`)},"drawFrame"),rt=o((a,t,e,r,i)=>{if(i==="circle")for(let n=0;n<r;n++){let l=e*(n+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(i==="polygon"){let n=t.length;for(let l=0;l<r;l++){let s=e*(l+1)/r,c=t.map((d,g)=>{let p=2*g*Math.PI/n-Math.PI/2,u=s*Math.cos(p),m=s*Math.sin(p);return`${u},${m}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),it=o((a,t,e,r)=>{let i=t.length;for(let n=0;n<i;n++){let l=t[n].label,s=2*n*Math.PI/i-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(s)).attr("y2",e*r.axisScaleFactor*Math.sin(s)).attr("class","radarAxisLine"),a.append("text").text(l).attr("x",e*r.axisLabelFactor*Math.cos(s)).attr("y",e*r.axisLabelFactor*Math.sin(s)).attr("class","radarAxisLabel")}},"drawAxes");function C(a,t,e,r,i,n,l){let s=t.length,c=Math.min(l.width,l.height)/2;e.forEach((d,g)=>{if(d.entries.length!==s)return;let p=d.entries.map((u,m)=>{let $=2*Math.PI*m/s-Math.PI/2,y=L(u,r,i,c),A=y*Math.cos($),O=y*Math.sin($);return{x:A,y:O}});n==="circle"?a.append("path").attr("d",T(p,l.curveTension)).attr("class",`radarCurve-${g}`):n==="polygon"&&a.append("polygon").attr("points",p.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${g}`)})}o(C,"drawCurves");function L(a,t,e,r){let i=Math.min(Math.max(a,t),e);return r*(i-t)/(e-t)}o(L,"relativeRadius");function T(a,t){let e=a.length,r=`M${a[0].x},${a[0].y}`;for(let i=0;i<e;i++){let n=a[(i-1+e)%e],l=a[i],s=a[(i+1)%e],c=a[(i+2)%e],d={x:l.x+(s.x-n.x)*t,y:l.y+(s.y-n.y)*t},g={x:s.x-(c.x-l.x)*t,y:s.y-(c.y-l.y)*t};r+=` C${d.x},${d.y} ${g.x},${g.y} ${s.x},${s.y}`}return`${r} Z`}o(T,"closedRoundCurve");function k(a,t,e,r){if(!e)return;let i=(r.width/2+r.marginRight)*3/4,n=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((s,c)=>{let d=a.append("g").attr("transform",`translate(${i}, ${n+c*l})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(s.label)})}o(k,"drawLegend");var st={draw:et},nt=o((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){let i=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return e},"genIndexStyles"),lt=o(a=>{let t=G(),e=w(),r=v(t,e.themeVariables),i=v(r.radar,a);return{themeVariables:r,radarOptions:i}},"buildRadarStyleOptions"),ot=o(({radar:a}={})=>{let{themeVariables:t,radarOptions:e}=lt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${nt(t,e)}
	`},"styles"),xt={parser:tt,db:f,renderer:st,styles:ot};export{xt as diagram};
