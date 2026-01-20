import{m as c,$ as ue,G as de,e as he,j as fe,U as ye,H as me,a as ct,i as xt,aq as ke,ar as pe,as as ge,W as be,at as ve,au as Te,q as st,p as it,av as xe,aw as Vt,ax as jt,ay as $e,az as we,aA as _e,aB as De,aC as Se,aD as Me,aE as Ce,aF as Ut,aG as qt,aH as Qt,aI as Jt,aJ as Xt,aK as Ye,h as Ee,N as Ae,aL as ee,f as Le,d as Ie,aM as St}from"./mermaid.esm.min-DKRWs6VZ.js";import"./app-Ww4hozov.js";var Fe=St((t,r)=>{(function(s,i){typeof t=="object"&&typeof r<"u"?r.exports=i():typeof define=="function"&&define.amd?define(i):(s=typeof globalThis<"u"?globalThis:s||self).dayjs_plugin_isoWeek=i()})(t,(function(){var s="day";return function(i,a,h){var b=c(function(C){return C.add(4-C.isoWeekday(),s)},"a"),M=a.prototype;M.isoWeekYear=function(){return b(this).year()},M.isoWeek=function(C){if(!this.$utils().u(C))return this.add(7*(C-this.isoWeek()),s);var w,L,W,N,H=b(this),D=(w=this.isoWeekYear(),L=this.$u,W=(L?h.utc:h)().year(w).startOf("year"),N=4-W.isoWeekday(),W.isoWeekday()>4&&(N+=7),W.add(N,s));return H.diff(D,"week")+1},M.isoWeekday=function(C){return this.$utils().u(C)?this.day()||7:this.day(this.day()%7?C:C-7)};var F=M.startOf;M.startOf=function(C,w){var L=this.$utils(),W=!!L.u(w)||w;return L.p(C)==="isoweek"?W?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):F.bind(this)(C,w)}}}))}),We=St((t,r)=>{(function(s,i){typeof t=="object"&&typeof r<"u"?r.exports=i():typeof define=="function"&&define.amd?define(i):(s=typeof globalThis<"u"?globalThis:s||self).dayjs_plugin_customParseFormat=i()})(t,(function(){var s={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,h=/\d\d/,b=/\d\d?/,M=/\d*[^-_:/,()\s\d]+/,F={},C=c(function($){return($=+$)+($>68?1900:2e3)},"a"),w=c(function($){return function(S){this[$]=+S}},"f"),L=[/[+-]\d\d:?(\d\d)?|Z/,function($){(this.zone||(this.zone={})).offset=(function(S){if(!S||S==="Z")return 0;var I=S.match(/([+-]|\d\d)/g),E=60*I[1]+(+I[2]||0);return E===0?0:I[0]==="+"?-E:E})($)}],W=c(function($){var S=F[$];return S&&(S.indexOf?S:S.s.concat(S.f))},"u"),N=c(function($,S){var I,E=F.meridiem;if(E){for(var G=1;G<=24;G+=1)if($.indexOf(E(G,0,S))>-1){I=G>12;break}}else I=$===(S?"pm":"PM");return I},"d"),H={A:[M,function($){this.afternoon=N($,!1)}],a:[M,function($){this.afternoon=N($,!0)}],Q:[a,function($){this.month=3*($-1)+1}],S:[a,function($){this.milliseconds=100*+$}],SS:[h,function($){this.milliseconds=10*+$}],SSS:[/\d{3}/,function($){this.milliseconds=+$}],s:[b,w("seconds")],ss:[b,w("seconds")],m:[b,w("minutes")],mm:[b,w("minutes")],H:[b,w("hours")],h:[b,w("hours")],HH:[b,w("hours")],hh:[b,w("hours")],D:[b,w("day")],DD:[h,w("day")],Do:[M,function($){var S=F.ordinal,I=$.match(/\d+/);if(this.day=I[0],S)for(var E=1;E<=31;E+=1)S(E).replace(/\[|\]/g,"")===$&&(this.day=E)}],w:[b,w("week")],ww:[h,w("week")],M:[b,w("month")],MM:[h,w("month")],MMM:[M,function($){var S=W("months"),I=(W("monthsShort")||S.map((function(E){return E.slice(0,3)}))).indexOf($)+1;if(I<1)throw new Error;this.month=I%12||I}],MMMM:[M,function($){var S=W("months").indexOf($)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,w("year")],YY:[h,function($){this.year=C($)}],YYYY:[/\d{4}/,w("year")],Z:L,ZZ:L};function D($){var S,I;S=$,I=F&&F.formats;for(var E=($=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(g,p,k){var m=k&&k.toUpperCase();return p||I[k]||s[k]||I[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(l,d,u){return d||u.slice(1)}))}))).match(i),G=E.length,V=0;V<G;V+=1){var Y=E[V],v=H[Y],y=v&&v[0],f=v&&v[1];E[V]=f?{regex:y,parser:f}:Y.replace(/^\[|\]$/g,"")}return function(g){for(var p={},k=0,m=0;k<G;k+=1){var l=E[k];if(typeof l=="string")m+=l.length;else{var d=l.regex,u=l.parser,T=g.slice(m),e=d.exec(T)[0];u.call(p,e),g=g.replace(e,"")}}return(function(n){var o=n.afternoon;if(o!==void 0){var x=n.hours;o?x<12&&(n.hours+=12):x===12&&(n.hours=0),delete n.afternoon}})(p),p}}return c(D,"l"),function($,S,I){I.p.customParseFormat=!0,$&&$.parseTwoDigitYear&&(C=$.parseTwoDigitYear);var E=S.prototype,G=E.parse;E.parse=function(V){var Y=V.date,v=V.utc,y=V.args;this.$u=v;var f=y[1];if(typeof f=="string"){var g=y[2]===!0,p=y[3]===!0,k=g||p,m=y[2];p&&(m=y[2]),F=this.$locale(),!g&&m&&(F=I.Ls[m]),this.$d=(function(T,e,n,o){try{if(["x","X"].indexOf(e)>-1)return new Date((e==="X"?1e3:1)*T);var x=D(e)(T),A=x.year,_=x.month,O=x.day,P=x.hours,ht=x.minutes,z=x.seconds,X=x.milliseconds,rt=x.zone,at=x.week,ft=new Date,yt=O||(A||_?1:ft.getDate()),ot=A||ft.getFullYear(),B=0;A&&!_||(B=_>0?_-1:ft.getMonth());var tt,Q=P||0,j=ht||0,bt=z||0,et=X||0;return rt?new Date(Date.UTC(ot,B,yt,Q,j,bt,et+60*rt.offset*1e3)):n?new Date(Date.UTC(ot,B,yt,Q,j,bt,et)):(tt=new Date(ot,B,yt,Q,j,bt,et),at&&(tt=o(tt).week(at).toDate()),tt)}catch{return new Date("")}})(Y,f,v,I),this.init(),m&&m!==!0&&(this.$L=this.locale(m).$L),k&&Y!=this.format(f)&&(this.$d=new Date("")),F={}}else if(f instanceof Array)for(var l=f.length,d=1;d<=l;d+=1){y[1]=f[d-1];var u=I.apply(this,y);if(u.isValid()){this.$d=u.$d,this.$L=u.$L,this.init();break}d===l&&(this.$d=new Date(""))}else G.call(this,V)}}}))}),Oe=St((t,r)=>{(function(s,i){typeof t=="object"&&typeof r<"u"?r.exports=i():typeof define=="function"&&define.amd?define(i):(s=typeof globalThis<"u"?globalThis:s||self).dayjs_plugin_advancedFormat=i()})(t,(function(){return function(s,i){var a=i.prototype,h=a.format;a.format=function(b){var M=this,F=this.$locale();if(!this.isValid())return h.bind(this)(b);var C=this.$utils(),w=(b||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(L){switch(L){case"Q":return Math.ceil((M.$M+1)/3);case"Do":return F.ordinal(M.$D);case"gggg":return M.weekYear();case"GGGG":return M.isoWeekYear();case"wo":return F.ordinal(M.week(),"W");case"w":case"ww":return C.s(M.week(),L==="w"?1:2,"0");case"W":case"WW":return C.s(M.isoWeek(),L==="W"?1:2,"0");case"k":case"kk":return C.s(String(M.$H===0?24:M.$H),L==="k"?1:2,"0");case"X":return Math.floor(M.$d.getTime()/1e3);case"x":return M.$d.getTime();case"z":return"["+M.offsetName()+"]";case"zzz":return"["+M.offsetName("long")+"]";default:return L}}));return h.bind(this)(w)}}}))}),Pe=St((t,r)=>{(function(s,i){typeof t=="object"&&typeof r<"u"?r.exports=i():typeof define=="function"&&define.amd?define(i):(s=typeof globalThis<"u"?globalThis:s||self).dayjs_plugin_duration=i()})(t,(function(){var s,i,a=1e3,h=6e4,b=36e5,M=864e5,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,C=31536e6,w=2628e6,L=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,W={years:C,months:w,days:M,hours:b,minutes:h,seconds:a,milliseconds:1,weeks:6048e5},N=c(function(Y){return Y instanceof G},"c"),H=c(function(Y,v,y){return new G(Y,y,v.$l)},"f"),D=c(function(Y){return i.p(Y)+"s"},"m"),$=c(function(Y){return Y<0},"l"),S=c(function(Y){return $(Y)?Math.ceil(Y):Math.floor(Y)},"$"),I=c(function(Y){return Math.abs(Y)},"y"),E=c(function(Y,v){return Y?$(Y)?{negative:!0,format:""+I(Y)+v}:{negative:!1,format:""+Y+v}:{negative:!1,format:""}},"v"),G=(function(){function Y(y,f,g){var p=this;if(this.$d={},this.$l=g,y===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return H(y*W[D(f)],this);if(typeof y=="number")return this.$ms=y,this.parseFromMilliseconds(),this;if(typeof y=="object")return Object.keys(y).forEach((function(l){p.$d[D(l)]=y[l]})),this.calMilliseconds(),this;if(typeof y=="string"){var k=y.match(L);if(k){var m=k.slice(2).map((function(l){return l!=null?Number(l):0}));return this.$d.years=m[0],this.$d.months=m[1],this.$d.weeks=m[2],this.$d.days=m[3],this.$d.hours=m[4],this.$d.minutes=m[5],this.$d.seconds=m[6],this.calMilliseconds(),this}}return this}c(Y,"l");var v=Y.prototype;return v.calMilliseconds=function(){var y=this;this.$ms=Object.keys(this.$d).reduce((function(f,g){return f+(y.$d[g]||0)*W[g]}),0)},v.parseFromMilliseconds=function(){var y=this.$ms;this.$d.years=S(y/C),y%=C,this.$d.months=S(y/w),y%=w,this.$d.days=S(y/M),y%=M,this.$d.hours=S(y/b),y%=b,this.$d.minutes=S(y/h),y%=h,this.$d.seconds=S(y/a),y%=a,this.$d.milliseconds=y},v.toISOString=function(){var y=E(this.$d.years,"Y"),f=E(this.$d.months,"M"),g=+this.$d.days||0;this.$d.weeks&&(g+=7*this.$d.weeks);var p=E(g,"D"),k=E(this.$d.hours,"H"),m=E(this.$d.minutes,"M"),l=this.$d.seconds||0;this.$d.milliseconds&&(l+=this.$d.milliseconds/1e3,l=Math.round(1e3*l)/1e3);var d=E(l,"S"),u=y.negative||f.negative||p.negative||k.negative||m.negative||d.negative,T=k.format||m.format||d.format?"T":"",e=(u?"-":"")+"P"+y.format+f.format+p.format+T+k.format+m.format+d.format;return e==="P"||e==="-P"?"P0D":e},v.toJSON=function(){return this.toISOString()},v.format=function(y){var f=y||"YYYY-MM-DDTHH:mm:ss",g={Y:this.$d.years,YY:i.s(this.$d.years,2,"0"),YYYY:i.s(this.$d.years,4,"0"),M:this.$d.months,MM:i.s(this.$d.months,2,"0"),D:this.$d.days,DD:i.s(this.$d.days,2,"0"),H:this.$d.hours,HH:i.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:i.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:i.s(this.$d.seconds,2,"0"),SSS:i.s(this.$d.milliseconds,3,"0")};return f.replace(F,(function(p,k){return k||String(g[p])}))},v.as=function(y){return this.$ms/W[D(y)]},v.get=function(y){var f=this.$ms,g=D(y);return g==="milliseconds"?f%=1e3:f=g==="weeks"?S(f/W[g]):this.$d[g],f||0},v.add=function(y,f,g){var p;return p=f?y*W[D(f)]:N(y)?y.$ms:H(y,this).$ms,H(this.$ms+p*(g?-1:1),this)},v.subtract=function(y,f){return this.add(y,f,!0)},v.locale=function(y){var f=this.clone();return f.$l=y,f},v.clone=function(){return H(this.$ms,this)},v.humanize=function(y){return s().add(this.$ms,"ms").locale(this.$l).fromNow(!y)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},Y})(),V=c(function(Y,v,y){return Y.add(v.years()*y,"y").add(v.months()*y,"M").add(v.days()*y,"d").add(v.hours()*y,"h").add(v.minutes()*y,"m").add(v.seconds()*y,"s").add(v.milliseconds()*y,"ms")},"p");return function(Y,v,y){s=y,i=y().$utils(),y.duration=function(p,k){var m=y.locale();return H(p,{$l:m},k)},y.isDuration=N;var f=v.prototype.add,g=v.prototype.subtract;v.prototype.add=function(p,k){return N(p)?V(this,p,1):f.bind(this)(p,k)},v.prototype.subtract=function(p,k){return N(p)?V(this,p,-1):g.bind(this)(p,k)}}}))}),Yt=(function(){var t=c(function(m,l,d,u){for(d=d||{},u=m.length;u--;d[m[u]]=l);return d},"o"),r=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],s=[1,26],i=[1,27],a=[1,28],h=[1,29],b=[1,30],M=[1,31],F=[1,32],C=[1,33],w=[1,34],L=[1,9],W=[1,10],N=[1,11],H=[1,12],D=[1,13],$=[1,14],S=[1,15],I=[1,16],E=[1,19],G=[1,20],V=[1,21],Y=[1,22],v=[1,23],y=[1,25],f=[1,35],g={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(m,l,d,u,T,e,n){var o=e.length-1;switch(T){case 1:return e[o-1];case 2:this.$=[];break;case 3:e[o-1].push(e[o]),this.$=e[o-1];break;case 4:case 5:this.$=e[o];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(e[o].substr(11)),this.$=e[o].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=e[o].substr(18);break;case 19:u.TopAxis(),this.$=e[o].substr(8);break;case 20:u.setAxisFormat(e[o].substr(11)),this.$=e[o].substr(11);break;case 21:u.setTickInterval(e[o].substr(13)),this.$=e[o].substr(13);break;case 22:u.setExcludes(e[o].substr(9)),this.$=e[o].substr(9);break;case 23:u.setIncludes(e[o].substr(9)),this.$=e[o].substr(9);break;case 24:u.setTodayMarker(e[o].substr(12)),this.$=e[o].substr(12);break;case 27:u.setDiagramTitle(e[o].substr(6)),this.$=e[o].substr(6);break;case 28:this.$=e[o].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=e[o].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(e[o].substr(8)),this.$=e[o].substr(8);break;case 33:u.addTask(e[o-1],e[o]),this.$="task";break;case 34:this.$=e[o-1],u.setClickEvent(e[o-1],e[o],null);break;case 35:this.$=e[o-2],u.setClickEvent(e[o-2],e[o-1],e[o]);break;case 36:this.$=e[o-2],u.setClickEvent(e[o-2],e[o-1],null),u.setLink(e[o-2],e[o]);break;case 37:this.$=e[o-3],u.setClickEvent(e[o-3],e[o-2],e[o-1]),u.setLink(e[o-3],e[o]);break;case 38:this.$=e[o-2],u.setClickEvent(e[o-2],e[o],null),u.setLink(e[o-2],e[o-1]);break;case 39:this.$=e[o-3],u.setClickEvent(e[o-3],e[o-1],e[o]),u.setLink(e[o-3],e[o-2]);break;case 40:this.$=e[o-1],u.setLink(e[o-1],e[o]);break;case 41:case 47:this.$=e[o-1]+" "+e[o];break;case 42:case 43:case 45:this.$=e[o-2]+" "+e[o-1]+" "+e[o];break;case 44:case 46:this.$=e[o-3]+" "+e[o-2]+" "+e[o-1]+" "+e[o];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:s,13:i,14:a,15:h,16:b,17:M,18:F,19:18,20:C,21:w,22:L,23:W,24:N,25:H,26:D,27:$,28:S,29:I,30:E,31:G,33:V,35:Y,36:v,37:24,38:y,40:f},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:36,11:17,12:s,13:i,14:a,15:h,16:b,17:M,18:F,19:18,20:C,21:w,22:L,23:W,24:N,25:H,26:D,27:$,28:S,29:I,30:E,31:G,33:V,35:Y,36:v,37:24,38:y,40:f},t(r,[2,5]),t(r,[2,6]),t(r,[2,17]),t(r,[2,18]),t(r,[2,19]),t(r,[2,20]),t(r,[2,21]),t(r,[2,22]),t(r,[2,23]),t(r,[2,24]),t(r,[2,25]),t(r,[2,26]),t(r,[2,27]),{32:[1,37]},{34:[1,38]},t(r,[2,30]),t(r,[2,31]),t(r,[2,32]),{39:[1,39]},t(r,[2,8]),t(r,[2,9]),t(r,[2,10]),t(r,[2,11]),t(r,[2,12]),t(r,[2,13]),t(r,[2,14]),t(r,[2,15]),t(r,[2,16]),{41:[1,40],43:[1,41]},t(r,[2,4]),t(r,[2,28]),t(r,[2,29]),t(r,[2,33]),t(r,[2,34],{42:[1,42],43:[1,43]}),t(r,[2,40],{41:[1,44]}),t(r,[2,35],{43:[1,45]}),t(r,[2,36]),t(r,[2,38],{42:[1,46]}),t(r,[2,37]),t(r,[2,39])],defaultActions:{},parseError:c(function(m,l){if(l.recoverable)this.trace(m);else{var d=new Error(m);throw d.hash=l,d}},"parseError"),parse:c(function(m){var l=this,d=[0],u=[],T=[null],e=[],n=this.table,o="",x=0,A=0,_=0,O=2,P=1,ht=e.slice.call(arguments,1),z=Object.create(this.lexer),X={yy:{}};for(var rt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,rt)&&(X.yy[rt]=this.yy[rt]);z.setInput(m,X.yy),X.yy.lexer=z,X.yy.parser=this,typeof z.yylloc>"u"&&(z.yylloc={});var at=z.yylloc;e.push(at);var ft=z.options&&z.options.ranges;typeof X.yy.parseError=="function"?this.parseError=X.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function yt(U){d.length=d.length-2*U,T.length=T.length-U,e.length=e.length-U}c(yt,"popStack");function ot(){var U;return U=u.pop()||z.lex()||P,typeof U!="number"&&(U instanceof Array&&(u=U,U=u.pop()),U=l.symbols_[U]||U),U}c(ot,"lex");for(var B,tt,Q,j,bt,et,lt={},vt,Z,Rt,Tt;;){if(Q=d[d.length-1],this.defaultActions[Q]?j=this.defaultActions[Q]:((B===null||typeof B>"u")&&(B=ot()),j=n[Q]&&n[Q][B]),typeof j>"u"||!j.length||!j[0]){var Mt="";Tt=[];for(vt in n[Q])this.terminals_[vt]&&vt>O&&Tt.push("'"+this.terminals_[vt]+"'");z.showPosition?Mt="Parse error on line "+(x+1)+`:
`+z.showPosition()+`
Expecting `+Tt.join(", ")+", got '"+(this.terminals_[B]||B)+"'":Mt="Parse error on line "+(x+1)+": Unexpected "+(B==P?"end of input":"'"+(this.terminals_[B]||B)+"'"),this.parseError(Mt,{text:z.match,token:this.terminals_[B]||B,line:z.yylineno,loc:at,expected:Tt})}if(j[0]instanceof Array&&j.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Q+", token: "+B);switch(j[0]){case 1:d.push(B),T.push(z.yytext),e.push(z.yylloc),d.push(j[1]),B=null,tt?(B=tt,tt=null):(A=z.yyleng,o=z.yytext,x=z.yylineno,at=z.yylloc,_>0);break;case 2:if(Z=this.productions_[j[1]][1],lt.$=T[T.length-Z],lt._$={first_line:e[e.length-(Z||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(Z||1)].first_column,last_column:e[e.length-1].last_column},ft&&(lt._$.range=[e[e.length-(Z||1)].range[0],e[e.length-1].range[1]]),et=this.performAction.apply(lt,[o,A,x,X.yy,j[1],T,e].concat(ht)),typeof et<"u")return et;Z&&(d=d.slice(0,-1*Z*2),T=T.slice(0,-1*Z),e=e.slice(0,-1*Z)),d.push(this.productions_[j[1]][0]),T.push(lt.$),e.push(lt._$),Rt=n[d[d.length-2]][d[d.length-1]],d.push(Rt);break;case 3:return!0}}return!0},"parse")},p=(function(){var m={EOF:1,parseError:c(function(l,d){if(this.yy.parser)this.yy.parser.parseError(l,d);else throw new Error(l)},"parseError"),setInput:c(function(l,d){return this.yy=d||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var d=l.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:c(function(l){var d=l.length,u=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var T=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===T.length?this.yylloc.first_column:0)+T[T.length-u.length].length-u[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(l){this.unput(this.match.slice(l))},"less"),pastInput:c(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var l=this.pastInput(),d=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:c(function(l,d){var u,T,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),T=l[0].match(/(?:\r\n?|\n).*/g),T&&(this.yylineno+=T.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:T?T[T.length-1].length-T[T.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],u=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var n in e)this[n]=e[n];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,d,u,T;this._more||(this.yytext="",this.match="");for(var e=this._currentRules(),n=0;n<e.length;n++)if(u=this._input.match(this.rules[e[n]]),u&&(!d||u[0].length>d[0].length)){if(d=u,T=n,this.options.backtrack_lexer){if(l=this.test_match(u,e[n]),l!==!1)return l;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(l=this.test_match(d,e[T]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var l=this.next();return l||this.lex()},"lex"),begin:c(function(l){this.conditionStack.push(l)},"begin"),popState:c(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:c(function(l){this.begin(l)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(l,d,u,T){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return m})();g.lexer=p;function k(){this.yy={}}return c(k,"Parser"),k.prototype=g,g.Parser=k,new k})();Yt.parser=Yt;var He=Yt,ze=st(Le()),q=st(ee()),Ne=st(Fe()),Be=st(We()),Ge=st(Oe());q.default.extend(Ne.default);q.default.extend(Be.default);q.default.extend(Ge.default);var Zt={friday:5,saturday:6},J="",It="",Ft,Wt="",kt=[],pt=[],Ot=new Map,Pt=[],_t=[],dt="",Ht="",ie=["active","done","crit","milestone","vert"],zt=[],gt=!1,Nt=!1,Bt="sunday",Dt="saturday",Et=0,Re=c(function(){Pt=[],_t=[],dt="",zt=[],$t=0,Lt=void 0,wt=void 0,R=[],J="",It="",Ht="",Ft=void 0,Wt="",kt=[],pt=[],gt=!1,Nt=!1,Et=0,Ot=new Map,Ae(),Bt="sunday",Dt="saturday"},"clear"),Ve=c(function(t){It=t},"setAxisFormat"),je=c(function(){return It},"getAxisFormat"),Ue=c(function(t){Ft=t},"setTickInterval"),qe=c(function(){return Ft},"getTickInterval"),Qe=c(function(t){Wt=t},"setTodayMarker"),Je=c(function(){return Wt},"getTodayMarker"),Xe=c(function(t){J=t},"setDateFormat"),Ze=c(function(){gt=!0},"enableInclusiveEndDates"),Ke=c(function(){return gt},"endDatesAreInclusive"),ti=c(function(){Nt=!0},"enableTopAxis"),ei=c(function(){return Nt},"topAxisEnabled"),ii=c(function(t){Ht=t},"setDisplayMode"),si=c(function(){return Ht},"getDisplayMode"),ni=c(function(){return J},"getDateFormat"),ri=c(function(t){kt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),ai=c(function(){return kt},"getIncludes"),oi=c(function(t){pt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),li=c(function(){return pt},"getExcludes"),ci=c(function(){return Ot},"getLinks"),ui=c(function(t){dt=t,Pt.push(t)},"addSection"),di=c(function(){return Pt},"getSections"),hi=c(function(){let t=Kt(),r=10,s=0;for(;!t&&s<r;)t=Kt(),s++;return _t=R,_t},"getTasks"),se=c(function(t,r,s,i){let a=t.format(r.trim()),h=t.format("YYYY-MM-DD");return i.includes(a)||i.includes(h)?!1:s.includes("weekends")&&(t.isoWeekday()===Zt[Dt]||t.isoWeekday()===Zt[Dt]+1)||s.includes(t.format("dddd").toLowerCase())?!0:s.includes(a)||s.includes(h)},"isInvalidDate"),fi=c(function(t){Bt=t},"setWeekday"),yi=c(function(){return Bt},"getWeekday"),mi=c(function(t){Dt=t},"setWeekend"),ne=c(function(t,r,s,i){if(!s.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=(0,q.default)(t.startTime):a=(0,q.default)(t.startTime,r,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=(0,q.default)(t.endTime):h=(0,q.default)(t.endTime,r,!0);let[b,M]=ki(a,h,r,s,i);t.endTime=b.toDate(),t.renderEndTime=M},"checkTaskDates"),ki=c(function(t,r,s,i,a){let h=!1,b=null;for(;t<=r;)h||(b=r.toDate()),h=se(t,s,i,a),h&&(r=r.add(1,"d")),t=t.add(1,"d");return[r,b]},"fixTaskDates"),At=c(function(t,r,s){if(s=s.trim(),c(h=>{let b=h.trim();return b==="x"||b==="X"},"isTimestampFormat")(r)&&/^\d+$/.test(s))return new Date(Number(s));let i=/^after\s+(?<ids>[\d\w- ]+)/.exec(s);if(i!==null){let h=null;for(let M of i.groups.ids.split(" ")){let F=nt(M);F!==void 0&&(!h||F.endTime>h.endTime)&&(h=F)}if(h)return h.endTime;let b=new Date;return b.setHours(0,0,0,0),b}let a=(0,q.default)(s,r.trim(),!0);if(a.isValid())return a.toDate();{it.debug("Invalid date:"+s),it.debug("With date format:"+r.trim());let h=new Date(s);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+s);return h}},"getStartDate"),re=c(function(t){let r=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return r!==null?[Number.parseFloat(r[1]),r[2]]:[NaN,"ms"]},"parseDuration"),ae=c(function(t,r,s,i=!1){s=s.trim();let a=/^until\s+(?<ids>[\d\w- ]+)/.exec(s);if(a!==null){let C=null;for(let L of a.groups.ids.split(" ")){let W=nt(L);W!==void 0&&(!C||W.startTime<C.startTime)&&(C=W)}if(C)return C.startTime;let w=new Date;return w.setHours(0,0,0,0),w}let h=(0,q.default)(s,r.trim(),!0);if(h.isValid())return i&&(h=h.add(1,"d")),h.toDate();let b=(0,q.default)(t),[M,F]=re(s);if(!Number.isNaN(M)){let C=b.add(M,F);C.isValid()&&(b=C)}return b.toDate()},"getEndDate"),$t=0,ut=c(function(t){return t===void 0?($t=$t+1,"task"+$t):t},"parseId"),pi=c(function(t,r){let s;r.substr(0,1)===":"?s=r.substr(1,r.length):s=r;let i=s.split(","),a={};Gt(i,a,ie);for(let b=0;b<i.length;b++)i[b]=i[b].trim();let h="";switch(i.length){case 1:a.id=ut(),a.startTime=t.endTime,h=i[0];break;case 2:a.id=ut(),a.startTime=At(void 0,J,i[0]),h=i[1];break;case 3:a.id=ut(i[0]),a.startTime=At(void 0,J,i[1]),h=i[2];break}return h&&(a.endTime=ae(a.startTime,J,h,gt),a.manualEndTime=(0,q.default)(h,"YYYY-MM-DD",!0).isValid(),ne(a,J,pt,kt)),a},"compileData"),gi=c(function(t,r){let s;r.substr(0,1)===":"?s=r.substr(1,r.length):s=r;let i=s.split(","),a={};Gt(i,a,ie);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:a.id=ut(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:i[0]};break;case 2:a.id=ut(),a.startTime={type:"getStartDate",startData:i[0]},a.endTime={data:i[1]};break;case 3:a.id=ut(i[0]),a.startTime={type:"getStartDate",startData:i[1]},a.endTime={data:i[2]};break}return a},"parseData"),Lt,wt,R=[],oe={},bi=c(function(t,r){let s={section:dt,type:dt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:r},task:t,classes:[]},i=gi(wt,r);s.raw.startTime=i.startTime,s.raw.endTime=i.endTime,s.id=i.id,s.prevTaskId=wt,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,s.vert=i.vert,s.order=Et,Et++;let a=R.push(s);wt=s.id,oe[s.id]=a-1},"addTask"),nt=c(function(t){let r=oe[t];return R[r]},"findTaskById"),vi=c(function(t,r){let s={section:dt,type:dt,description:t,task:t,classes:[]},i=pi(Lt,r);s.startTime=i.startTime,s.endTime=i.endTime,s.id=i.id,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,s.vert=i.vert,Lt=s,_t.push(s)},"addTaskOrg"),Kt=c(function(){let t=c(function(s){let i=R[s],a="";switch(R[s].raw.startTime.type){case"prevTaskEnd":{let h=nt(i.prevTaskId);i.startTime=h.endTime;break}case"getStartDate":a=At(void 0,J,R[s].raw.startTime.startData),a&&(R[s].startTime=a);break}return R[s].startTime&&(R[s].endTime=ae(R[s].startTime,J,R[s].raw.endTime.data,gt),R[s].endTime&&(R[s].processed=!0,R[s].manualEndTime=(0,q.default)(R[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ne(R[s],J,pt,kt))),R[s].processed},"compileTask"),r=!0;for(let[s,i]of R.entries())t(s),r=r&&i.processed;return r},"compileTasks"),Ti=c(function(t,r){let s=r;ct().securityLevel!=="loose"&&(s=(0,ze.sanitizeUrl)(r)),t.split(",").forEach(function(i){nt(i)!==void 0&&(ce(i,()=>{window.open(s,"_self")}),Ot.set(i,s))}),le(t,"clickable")},"setLink"),le=c(function(t,r){t.split(",").forEach(function(s){let i=nt(s);i!==void 0&&i.classes.push(r)})},"setClass"),xi=c(function(t,r,s){if(ct().securityLevel!=="loose"||r===void 0)return;let i=[];if(typeof s=="string"){i=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let a=0;a<i.length;a++){let h=i[a].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),i[a]=h}}i.length===0&&i.push(t),nt(t)!==void 0&&ce(t,()=>{Ie.runFunc(r,...i)})},"setClickFun"),ce=c(function(t,r){zt.push(function(){let s=document.querySelector(`[id="${t}"]`);s!==null&&s.addEventListener("click",function(){r()})},function(){let s=document.querySelector(`[id="${t}-text"]`);s!==null&&s.addEventListener("click",function(){r()})})},"pushFun"),$i=c(function(t,r,s){t.split(",").forEach(function(i){xi(i,r,s)}),le(t,"clickable")},"setClickEvent"),wi=c(function(t){zt.forEach(function(r){r(t)})},"bindFunctions"),_i={getConfig:c(()=>ct().gantt,"getConfig"),clear:Re,setDateFormat:Xe,getDateFormat:ni,enableInclusiveEndDates:Ze,endDatesAreInclusive:Ke,enableTopAxis:ti,topAxisEnabled:ei,setAxisFormat:Ve,getAxisFormat:je,setTickInterval:Ue,getTickInterval:qe,setTodayMarker:Qe,getTodayMarker:Je,setAccTitle:me,getAccTitle:ye,setDiagramTitle:fe,getDiagramTitle:he,setDisplayMode:ii,getDisplayMode:si,setAccDescription:de,getAccDescription:ue,addSection:ui,getSections:di,getTasks:hi,addTask:bi,findTaskById:nt,addTaskOrg:vi,setIncludes:ri,getIncludes:ai,setExcludes:oi,getExcludes:li,setClickEvent:$i,setLink:Ti,getLinks:ci,bindFunctions:wi,parseDuration:re,isInvalidDate:se,setWeekday:fi,getWeekday:yi,setWeekend:mi};function Gt(t,r,s){let i=!0;for(;i;)i=!1,s.forEach(function(a){let h="^\\s*"+a+"\\s*$",b=new RegExp(h);t[0].match(b)&&(r[a]=!0,t.shift(1),i=!0)})}c(Gt,"getTaskTags");var mt=st(ee()),Di=st(Pe());mt.default.extend(Di.default);var Si=c(function(){it.debug("Something is calling, setConf, remove the call")},"setConf"),te={monday:Ce,tuesday:Me,wednesday:Se,thursday:De,friday:_e,saturday:we,sunday:$e},Mi=c((t,r)=>{let s=[...t].map(()=>-1/0),i=[...t].sort((h,b)=>h.startTime-b.startTime||h.order-b.order),a=0;for(let h of i)for(let b=0;b<s.length;b++)if(h.startTime>=s[b]){s[b]=h.endTime,h.order=b+r,b>a&&(a=b);break}return a},"getMaxIntersections"),K,Ct=1e4,Ci=c(function(t,r,s,i){let a=ct().gantt,h=ct().securityLevel,b;h==="sandbox"&&(b=xt("#i"+r));let M=h==="sandbox"?xt(b.nodes()[0].contentDocument.body):xt("body"),F=h==="sandbox"?b.nodes()[0].contentDocument:document,C=F.getElementById(r);K=C.parentElement.offsetWidth,K===void 0&&(K=1200),a.useWidth!==void 0&&(K=a.useWidth);let w=i.db.getTasks(),L=[];for(let f of w)L.push(f.type);L=y(L);let W={},N=2*a.topPadding;if(i.db.getDisplayMode()==="compact"||a.displayMode==="compact"){let f={};for(let p of w)f[p.section]===void 0?f[p.section]=[p]:f[p.section].push(p);let g=0;for(let p of Object.keys(f)){let k=Mi(f[p],g)+1;g+=k,N+=k*(a.barHeight+a.barGap),W[p]=k}}else{N+=w.length*(a.barHeight+a.barGap);for(let f of L)W[f]=w.filter(g=>g.type===f).length}C.setAttribute("viewBox","0 0 "+K+" "+N);let H=M.select(`[id="${r}"]`),D=ke().domain([pe(w,function(f){return f.startTime}),ge(w,function(f){return f.endTime})]).rangeRound([0,K-a.leftPadding-a.rightPadding]);function $(f,g){let p=f.startTime,k=g.startTime,m=0;return p>k?m=1:p<k&&(m=-1),m}c($,"taskCompare"),w.sort($),S(w,K,N),be(H,N,K,a.useMaxWidth),H.append("text").text(i.db.getDiagramTitle()).attr("x",K/2).attr("y",a.titleTopMargin).attr("class","titleText");function S(f,g,p){let k=a.barHeight,m=k+a.barGap,l=a.topPadding,d=a.leftPadding,u=ve().domain([0,L.length]).range(["#00B9FA","#F95002"]).interpolate(Te);E(m,l,d,g,p,f,i.db.getExcludes(),i.db.getIncludes()),V(d,l,g,p),I(f,m,l,d,k,u,g),Y(m,l),v(d,l,g,p)}c(S,"makeGantt");function I(f,g,p,k,m,l,d){f.sort((n,o)=>n.vert===o.vert?0:n.vert?1:-1);let u=[...new Set(f.map(n=>n.order))].map(n=>f.find(o=>o.order===n));H.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(n,o){return o=n.order,o*g+p-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",g).attr("class",function(n){for(let[o,x]of L.entries())if(n.type===x)return"section section"+o%a.numberSectionStyles;return"section section0"}).enter();let T=H.append("g").selectAll("rect").data(f).enter(),e=i.db.getLinks();if(T.append("rect").attr("id",function(n){return n.id}).attr("rx",3).attr("ry",3).attr("x",function(n){return n.milestone?D(n.startTime)+k+.5*(D(n.endTime)-D(n.startTime))-.5*m:D(n.startTime)+k}).attr("y",function(n,o){return o=n.order,n.vert?a.gridLineStartPadding:o*g+p}).attr("width",function(n){return n.milestone?m:n.vert?.08*m:D(n.renderEndTime||n.endTime)-D(n.startTime)}).attr("height",function(n){return n.vert?w.length*(a.barHeight+a.barGap)+a.barHeight*2:m}).attr("transform-origin",function(n,o){return o=n.order,(D(n.startTime)+k+.5*(D(n.endTime)-D(n.startTime))).toString()+"px "+(o*g+p+.5*m).toString()+"px"}).attr("class",function(n){let o="task",x="";n.classes.length>0&&(x=n.classes.join(" "));let A=0;for(let[O,P]of L.entries())n.type===P&&(A=O%a.numberSectionStyles);let _="";return n.active?n.crit?_+=" activeCrit":_=" active":n.done?n.crit?_=" doneCrit":_=" done":n.crit&&(_+=" crit"),_.length===0&&(_=" task"),n.milestone&&(_=" milestone "+_),n.vert&&(_=" vert "+_),_+=A,_+=" "+x,o+_}),T.append("text").attr("id",function(n){return n.id+"-text"}).text(function(n){return n.task}).attr("font-size",a.fontSize).attr("x",function(n){let o=D(n.startTime),x=D(n.renderEndTime||n.endTime);if(n.milestone&&(o+=.5*(D(n.endTime)-D(n.startTime))-.5*m,x=o+m),n.vert)return D(n.startTime)+k;let A=this.getBBox().width;return A>x-o?x+A+1.5*a.leftPadding>d?o+k-5:x+k+5:(x-o)/2+o+k}).attr("y",function(n,o){return n.vert?a.gridLineStartPadding+w.length*(a.barHeight+a.barGap)+60:(o=n.order,o*g+a.barHeight/2+(a.fontSize/2-2)+p)}).attr("text-height",m).attr("class",function(n){let o=D(n.startTime),x=D(n.endTime);n.milestone&&(x=o+m);let A=this.getBBox().width,_="";n.classes.length>0&&(_=n.classes.join(" "));let O=0;for(let[ht,z]of L.entries())n.type===z&&(O=ht%a.numberSectionStyles);let P="";return n.active&&(n.crit?P="activeCritText"+O:P="activeText"+O),n.done?n.crit?P=P+" doneCritText"+O:P=P+" doneText"+O:n.crit&&(P=P+" critText"+O),n.milestone&&(P+=" milestoneText"),n.vert&&(P+=" vertText"),A>x-o?x+A+1.5*a.leftPadding>d?_+" taskTextOutsideLeft taskTextOutside"+O+" "+P:_+" taskTextOutsideRight taskTextOutside"+O+" "+P+" width-"+A:_+" taskText taskText"+O+" "+P+" width-"+A}),ct().securityLevel==="sandbox"){let n;n=xt("#i"+r);let o=n.nodes()[0].contentDocument;T.filter(function(x){return e.has(x.id)}).each(function(x){var A=o.querySelector("#"+x.id),_=o.querySelector("#"+x.id+"-text");let O=A.parentNode;var P=o.createElement("a");P.setAttribute("xlink:href",e.get(x.id)),P.setAttribute("target","_top"),O.appendChild(P),P.appendChild(A),P.appendChild(_)})}}c(I,"drawRects");function E(f,g,p,k,m,l,d,u){if(d.length===0&&u.length===0)return;let T,e;for(let{startTime:_,endTime:O}of l)(T===void 0||_<T)&&(T=_),(e===void 0||O>e)&&(e=O);if(!T||!e)return;if((0,mt.default)(e).diff((0,mt.default)(T),"year")>5){it.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let n=i.db.getDateFormat(),o=[],x=null,A=(0,mt.default)(T);for(;A.valueOf()<=e;)i.db.isInvalidDate(A,n,d,u)?x?x.end=A:x={start:A,end:A}:x&&(o.push(x),x=null),A=A.add(1,"d");H.append("g").selectAll("rect").data(o).enter().append("rect").attr("id",_=>"exclude-"+_.start.format("YYYY-MM-DD")).attr("x",_=>D(_.start.startOf("day"))+p).attr("y",a.gridLineStartPadding).attr("width",_=>D(_.end.endOf("day"))-D(_.start.startOf("day"))).attr("height",m-g-a.gridLineStartPadding).attr("transform-origin",function(_,O){return(D(_.start)+p+.5*(D(_.end)-D(_.start))).toString()+"px "+(O*f+.5*m).toString()+"px"}).attr("class","exclude-range")}c(E,"drawExcludeDays");function G(f,g,p,k){if(p<=0||f>g)return 1/0;let m=g-f,l=mt.default.duration({[k??"day"]:p}).asMilliseconds();return l<=0?1/0:Math.ceil(m/l)}c(G,"getEstimatedTickCount");function V(f,g,p,k){let m=i.db.getDateFormat(),l=i.db.getAxisFormat(),d;l?d=l:m==="D"?d="%d":d=a.axisFormat??"%Y-%m-%d";let u=xe(D).tickSize(-k+g+a.gridLineStartPadding).tickFormat(Vt(d)),T=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||a.tickInterval);if(T!==null){let e=parseInt(T[1],10);if(isNaN(e)||e<=0)it.warn(`Invalid tick interval value: "${T[1]}". Skipping custom tick interval.`);else{let n=T[2],o=i.db.getWeekday()||a.weekday,x=D.domain(),A=x[0],_=x[1],O=G(A,_,e,n);if(O>Ct)it.warn(`The tick interval "${e}${n}" would generate ${O} ticks, which exceeds the maximum allowed (${Ct}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(n){case"millisecond":u.ticks(Xt.every(e));break;case"second":u.ticks(Jt.every(e));break;case"minute":u.ticks(Qt.every(e));break;case"hour":u.ticks(qt.every(e));break;case"day":u.ticks(Ut.every(e));break;case"week":u.ticks(te[o].every(e));break;case"month":u.ticks(jt.every(e));break}}}if(H.append("g").attr("class","grid").attr("transform","translate("+f+", "+(k-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||a.topAxis){let e=Ye(D).tickSize(-k+g+a.gridLineStartPadding).tickFormat(Vt(d));if(T!==null){let n=parseInt(T[1],10);if(isNaN(n)||n<=0)it.warn(`Invalid tick interval value: "${T[1]}". Skipping custom tick interval.`);else{let o=T[2],x=i.db.getWeekday()||a.weekday,A=D.domain(),_=A[0],O=A[1];if(G(_,O,n,o)<=Ct)switch(o){case"millisecond":e.ticks(Xt.every(n));break;case"second":e.ticks(Jt.every(n));break;case"minute":e.ticks(Qt.every(n));break;case"hour":e.ticks(qt.every(n));break;case"day":e.ticks(Ut.every(n));break;case"week":e.ticks(te[x].every(n));break;case"month":e.ticks(jt.every(n));break}}}H.append("g").attr("class","grid").attr("transform","translate("+f+", "+g+")").call(e).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(V,"makeGrid");function Y(f,g){let p=0,k=Object.keys(W).map(m=>[m,W[m]]);H.append("g").selectAll("text").data(k).enter().append(function(m){let l=m[0].split(Ee.lineBreakRegex),d=-(l.length-1)/2,u=F.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",d+"em");for(let[T,e]of l.entries()){let n=F.createElementNS("http://www.w3.org/2000/svg","tspan");n.setAttribute("alignment-baseline","central"),n.setAttribute("x","10"),T>0&&n.setAttribute("dy","1em"),n.textContent=e,u.appendChild(n)}return u}).attr("x",10).attr("y",function(m,l){if(l>0)for(let d=0;d<l;d++)return p+=k[l-1][1],m[1]*f/2+p*f+g;else return m[1]*f/2+g}).attr("font-size",a.sectionFontSize).attr("class",function(m){for(let[l,d]of L.entries())if(m[0]===d)return"sectionTitle sectionTitle"+l%a.numberSectionStyles;return"sectionTitle"})}c(Y,"vertLabels");function v(f,g,p,k){let m=i.db.getTodayMarker();if(m==="off")return;let l=H.append("g").attr("class","today"),d=new Date,u=l.append("line");u.attr("x1",D(d)+f).attr("x2",D(d)+f).attr("y1",a.titleTopMargin).attr("y2",k-a.titleTopMargin).attr("class","today"),m!==""&&u.attr("style",m.replace(/,/g,";"))}c(v,"drawToday");function y(f){let g={},p=[];for(let k=0,m=f.length;k<m;++k)Object.prototype.hasOwnProperty.call(g,f[k])||(g[f[k]]=!0,p.push(f[k]));return p}c(y,"checkUnique")},"draw"),Yi={setConf:Si,draw:Ci},Ei=c(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Ai=Ei,Fi={parser:He,db:_i,renderer:Yi,styles:Ai};export{Fi as diagram};
