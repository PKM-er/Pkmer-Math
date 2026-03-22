import{X as ue,Y as de,Z as he,K as fe,V as ke,j as ye,m as c,x as ct,i as Tt,ar as me,as as pe,at as ge,U as xe,au as ve,av as be,p as st,aw as Te,ax as Vt,ay as jt,az as $e,aA as we,aB as _e,aC as De,aD as Se,aE as Ce,aF as Me,aG as Ut,aH as qt,aI as Qt,aJ as Xt,aK as Jt,aL as Ye,a as Ee,$ as Oe,r as it,aM as ee,f as Ae,e as Le,aN as St}from"./mermaid.esm.min-CpXBP0sO.js";import"./app-DAJqIKQB.js";var Ie=St((t,r)=>{(function(i,s){typeof t=="object"&&typeof r<"u"?r.exports=s():typeof define=="function"&&define.amd?define(s):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_isoWeek=s()})(t,(function(){var i="day";return function(s,a,h){var x=c(function(M){return M.add(4-M.isoWeekday(),i)},"a"),C=a.prototype;C.isoWeekYear=function(){return x(this).year()},C.isoWeek=function(M){if(!this.$utils().u(M))return this.add(7*(M-this.isoWeek()),i);var w,A,F,B,z=x(this),D=(w=this.isoWeekYear(),A=this.$u,F=(A?h.utc:h)().year(w).startOf("year"),B=4-F.isoWeekday(),F.isoWeekday()>4&&(B+=7),F.add(B,i));return z.diff(D,"week")+1},C.isoWeekday=function(M){return this.$utils().u(M)?this.day()||7:this.day(this.day()%7?M:M-7)};var I=C.startOf;C.startOf=function(M,w){var A=this.$utils(),F=!!A.u(w)||w;return A.p(M)==="isoweek"?F?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):I.bind(this)(M,w)}}}))}),Fe=St((t,r)=>{(function(i,s){typeof t=="object"&&typeof r<"u"?r.exports=s():typeof define=="function"&&define.amd?define(s):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_customParseFormat=s()})(t,(function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,h=/\d\d/,x=/\d\d?/,C=/\d*[^-_:/,()\s\d]+/,I={},M=c(function($){return($=+$)+($>68?1900:2e3)},"a"),w=c(function($){return function(S){this[$]=+S}},"f"),A=[/[+-]\d\d:?(\d\d)?|Z/,function($){(this.zone||(this.zone={})).offset=(function(S){if(!S||S==="Z")return 0;var L=S.match(/([+-]|\d\d)/g),E=60*L[1]+(+L[2]||0);return E===0?0:L[0]==="+"?-E:E})($)}],F=c(function($){var S=I[$];return S&&(S.indexOf?S:S.s.concat(S.f))},"u"),B=c(function($,S){var L,E=I.meridiem;if(E){for(var R=1;R<=24;R+=1)if($.indexOf(E(R,0,S))>-1){L=R>12;break}}else L=$===(S?"pm":"PM");return L},"d"),z={A:[C,function($){this.afternoon=B($,!1)}],a:[C,function($){this.afternoon=B($,!0)}],Q:[a,function($){this.month=3*($-1)+1}],S:[a,function($){this.milliseconds=100*+$}],SS:[h,function($){this.milliseconds=10*+$}],SSS:[/\d{3}/,function($){this.milliseconds=+$}],s:[x,w("seconds")],ss:[x,w("seconds")],m:[x,w("minutes")],mm:[x,w("minutes")],H:[x,w("hours")],h:[x,w("hours")],HH:[x,w("hours")],hh:[x,w("hours")],D:[x,w("day")],DD:[h,w("day")],Do:[C,function($){var S=I.ordinal,L=$.match(/\d+/);if(this.day=L[0],S)for(var E=1;E<=31;E+=1)S(E).replace(/\[|\]/g,"")===$&&(this.day=E)}],w:[x,w("week")],ww:[h,w("week")],M:[x,w("month")],MM:[h,w("month")],MMM:[C,function($){var S=F("months"),L=(F("monthsShort")||S.map((function(E){return E.slice(0,3)}))).indexOf($)+1;if(L<1)throw new Error;this.month=L%12||L}],MMMM:[C,function($){var S=F("months").indexOf($)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,w("year")],YY:[h,function($){this.year=M($)}],YYYY:[/\d{4}/,w("year")],Z:A,ZZ:A};function D($){var S,L;S=$,L=I&&I.formats;for(var E=($=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(g,p,m){var y=m&&m.toUpperCase();return p||L[m]||i[m]||L[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(l,d,u){return d||u.slice(1)}))}))).match(s),R=E.length,V=0;V<R;V+=1){var Y=E[V],v=z[Y],k=v&&v[0],f=v&&v[1];E[V]=f?{regex:k,parser:f}:Y.replace(/^\[|\]$/g,"")}return function(g){for(var p={},m=0,y=0;m<R;m+=1){var l=E[m];if(typeof l=="string")y+=l.length;else{var d=l.regex,u=l.parser,b=g.slice(y),e=d.exec(b)[0];u.call(p,e),g=g.replace(e,"")}}return(function(n){var o=n.afternoon;if(o!==void 0){var T=n.hours;o?T<12&&(n.hours+=12):T===12&&(n.hours=0),delete n.afternoon}})(p),p}}return c(D,"l"),function($,S,L){L.p.customParseFormat=!0,$&&$.parseTwoDigitYear&&(M=$.parseTwoDigitYear);var E=S.prototype,R=E.parse;E.parse=function(V){var Y=V.date,v=V.utc,k=V.args;this.$u=v;var f=k[1];if(typeof f=="string"){var g=k[2]===!0,p=k[3]===!0,m=g||p,y=k[2];p&&(y=k[2]),I=this.$locale(),!g&&y&&(I=L.Ls[y]),this.$d=(function(b,e,n,o){try{if(["x","X"].indexOf(e)>-1)return new Date((e==="X"?1e3:1)*b);var T=D(e)(b),O=T.year,_=T.month,W=T.day,P=T.hours,ht=T.minutes,H=T.seconds,J=T.milliseconds,rt=T.zone,at=T.week,ft=new Date,kt=W||(O||_?1:ft.getDate()),ot=O||ft.getFullYear(),N=0;O&&!_||(N=_>0?_-1:ft.getMonth());var tt,Q=P||0,j=ht||0,xt=H||0,et=J||0;return rt?new Date(Date.UTC(ot,N,kt,Q,j,xt,et+60*rt.offset*1e3)):n?new Date(Date.UTC(ot,N,kt,Q,j,xt,et)):(tt=new Date(ot,N,kt,Q,j,xt,et),at&&(tt=o(tt).week(at).toDate()),tt)}catch{return new Date("")}})(Y,f,v,L),this.init(),y&&y!==!0&&(this.$L=this.locale(y).$L),m&&Y!=this.format(f)&&(this.$d=new Date("")),I={}}else if(f instanceof Array)for(var l=f.length,d=1;d<=l;d+=1){k[1]=f[d-1];var u=L.apply(this,k);if(u.isValid()){this.$d=u.$d,this.$L=u.$L,this.init();break}d===l&&(this.$d=new Date(""))}else R.call(this,V)}}}))}),We=St((t,r)=>{(function(i,s){typeof t=="object"&&typeof r<"u"?r.exports=s():typeof define=="function"&&define.amd?define(s):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_advancedFormat=s()})(t,(function(){return function(i,s){var a=s.prototype,h=a.format;a.format=function(x){var C=this,I=this.$locale();if(!this.isValid())return h.bind(this)(x);var M=this.$utils(),w=(x||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(A){switch(A){case"Q":return Math.ceil((C.$M+1)/3);case"Do":return I.ordinal(C.$D);case"gggg":return C.weekYear();case"GGGG":return C.isoWeekYear();case"wo":return I.ordinal(C.week(),"W");case"w":case"ww":return M.s(C.week(),A==="w"?1:2,"0");case"W":case"WW":return M.s(C.isoWeek(),A==="W"?1:2,"0");case"k":case"kk":return M.s(String(C.$H===0?24:C.$H),A==="k"?1:2,"0");case"X":return Math.floor(C.$d.getTime()/1e3);case"x":return C.$d.getTime();case"z":return"["+C.offsetName()+"]";case"zzz":return"["+C.offsetName("long")+"]";default:return A}}));return h.bind(this)(w)}}}))}),Pe=St((t,r)=>{(function(i,s){typeof t=="object"&&typeof r<"u"?r.exports=s():typeof define=="function"&&define.amd?define(s):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_duration=s()})(t,(function(){var i,s,a=1e3,h=6e4,x=36e5,C=864e5,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M=31536e6,w=2628e6,A=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,F={years:M,months:w,days:C,hours:x,minutes:h,seconds:a,milliseconds:1,weeks:6048e5},B=c(function(Y){return Y instanceof R},"c"),z=c(function(Y,v,k){return new R(Y,k,v.$l)},"f"),D=c(function(Y){return s.p(Y)+"s"},"m"),$=c(function(Y){return Y<0},"l"),S=c(function(Y){return $(Y)?Math.ceil(Y):Math.floor(Y)},"$"),L=c(function(Y){return Math.abs(Y)},"y"),E=c(function(Y,v){return Y?$(Y)?{negative:!0,format:""+L(Y)+v}:{negative:!1,format:""+Y+v}:{negative:!1,format:""}},"v"),R=(function(){function Y(k,f,g){var p=this;if(this.$d={},this.$l=g,k===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return z(k*F[D(f)],this);if(typeof k=="number")return this.$ms=k,this.parseFromMilliseconds(),this;if(typeof k=="object")return Object.keys(k).forEach((function(l){p.$d[D(l)]=k[l]})),this.calMilliseconds(),this;if(typeof k=="string"){var m=k.match(A);if(m){var y=m.slice(2).map((function(l){return l!=null?Number(l):0}));return this.$d.years=y[0],this.$d.months=y[1],this.$d.weeks=y[2],this.$d.days=y[3],this.$d.hours=y[4],this.$d.minutes=y[5],this.$d.seconds=y[6],this.calMilliseconds(),this}}return this}c(Y,"l");var v=Y.prototype;return v.calMilliseconds=function(){var k=this;this.$ms=Object.keys(this.$d).reduce((function(f,g){return f+(k.$d[g]||0)*F[g]}),0)},v.parseFromMilliseconds=function(){var k=this.$ms;this.$d.years=S(k/M),k%=M,this.$d.months=S(k/w),k%=w,this.$d.days=S(k/C),k%=C,this.$d.hours=S(k/x),k%=x,this.$d.minutes=S(k/h),k%=h,this.$d.seconds=S(k/a),k%=a,this.$d.milliseconds=k},v.toISOString=function(){var k=E(this.$d.years,"Y"),f=E(this.$d.months,"M"),g=+this.$d.days||0;this.$d.weeks&&(g+=7*this.$d.weeks);var p=E(g,"D"),m=E(this.$d.hours,"H"),y=E(this.$d.minutes,"M"),l=this.$d.seconds||0;this.$d.milliseconds&&(l+=this.$d.milliseconds/1e3,l=Math.round(1e3*l)/1e3);var d=E(l,"S"),u=k.negative||f.negative||p.negative||m.negative||y.negative||d.negative,b=m.format||y.format||d.format?"T":"",e=(u?"-":"")+"P"+k.format+f.format+p.format+b+m.format+y.format+d.format;return e==="P"||e==="-P"?"P0D":e},v.toJSON=function(){return this.toISOString()},v.format=function(k){var f=k||"YYYY-MM-DDTHH:mm:ss",g={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return f.replace(I,(function(p,m){return m||String(g[p])}))},v.as=function(k){return this.$ms/F[D(k)]},v.get=function(k){var f=this.$ms,g=D(k);return g==="milliseconds"?f%=1e3:f=g==="weeks"?S(f/F[g]):this.$d[g],f||0},v.add=function(k,f,g){var p;return p=f?k*F[D(f)]:B(k)?k.$ms:z(k,this).$ms,z(this.$ms+p*(g?-1:1),this)},v.subtract=function(k,f){return this.add(k,f,!0)},v.locale=function(k){var f=this.clone();return f.$l=k,f},v.clone=function(){return z(this.$ms,this)},v.humanize=function(k){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!k)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},Y})(),V=c(function(Y,v,k){return Y.add(v.years()*k,"y").add(v.months()*k,"M").add(v.days()*k,"d").add(v.hours()*k,"h").add(v.minutes()*k,"m").add(v.seconds()*k,"s").add(v.milliseconds()*k,"ms")},"p");return function(Y,v,k){i=k,s=k().$utils(),k.duration=function(p,m){var y=k.locale();return z(p,{$l:y},m)},k.isDuration=B;var f=v.prototype.add,g=v.prototype.subtract;v.prototype.add=function(p,m){return B(p)?V(this,p,1):f.bind(this)(p,m)},v.prototype.subtract=function(p,m){return B(p)?V(this,p,-1):g.bind(this)(p,m)}}}))}),Yt=(function(){var t=c(function(y,l,d,u){for(d=d||{},u=y.length;u--;d[y[u]]=l);return d},"o"),r=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],a=[1,28],h=[1,29],x=[1,30],C=[1,31],I=[1,32],M=[1,33],w=[1,34],A=[1,9],F=[1,10],B=[1,11],z=[1,12],D=[1,13],$=[1,14],S=[1,15],L=[1,16],E=[1,19],R=[1,20],V=[1,21],Y=[1,22],v=[1,23],k=[1,25],f=[1,35],g={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(y,l,d,u,b,e,n){var o=e.length-1;switch(b){case 1:return e[o-1];case 2:this.$=[];break;case 3:e[o-1].push(e[o]),this.$=e[o-1];break;case 4:case 5:this.$=e[o];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(e[o].substr(11)),this.$=e[o].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=e[o].substr(18);break;case 19:u.TopAxis(),this.$=e[o].substr(8);break;case 20:u.setAxisFormat(e[o].substr(11)),this.$=e[o].substr(11);break;case 21:u.setTickInterval(e[o].substr(13)),this.$=e[o].substr(13);break;case 22:u.setExcludes(e[o].substr(9)),this.$=e[o].substr(9);break;case 23:u.setIncludes(e[o].substr(9)),this.$=e[o].substr(9);break;case 24:u.setTodayMarker(e[o].substr(12)),this.$=e[o].substr(12);break;case 27:u.setDiagramTitle(e[o].substr(6)),this.$=e[o].substr(6);break;case 28:this.$=e[o].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=e[o].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(e[o].substr(8)),this.$=e[o].substr(8);break;case 33:u.addTask(e[o-1],e[o]),this.$="task";break;case 34:this.$=e[o-1],u.setClickEvent(e[o-1],e[o],null);break;case 35:this.$=e[o-2],u.setClickEvent(e[o-2],e[o-1],e[o]);break;case 36:this.$=e[o-2],u.setClickEvent(e[o-2],e[o-1],null),u.setLink(e[o-2],e[o]);break;case 37:this.$=e[o-3],u.setClickEvent(e[o-3],e[o-2],e[o-1]),u.setLink(e[o-3],e[o]);break;case 38:this.$=e[o-2],u.setClickEvent(e[o-2],e[o],null),u.setLink(e[o-2],e[o-1]);break;case 39:this.$=e[o-3],u.setClickEvent(e[o-3],e[o-1],e[o]),u.setLink(e[o-3],e[o-2]);break;case 40:this.$=e[o-1],u.setLink(e[o-1],e[o]);break;case 41:case 47:this.$=e[o-1]+" "+e[o];break;case 42:case 43:case 45:this.$=e[o-2]+" "+e[o-1]+" "+e[o];break;case 44:case 46:this.$=e[o-3]+" "+e[o-2]+" "+e[o-1]+" "+e[o];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:a,15:h,16:x,17:C,18:I,19:18,20:M,21:w,22:A,23:F,24:B,25:z,26:D,27:$,28:S,29:L,30:E,31:R,33:V,35:Y,36:v,37:24,38:k,40:f},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:36,11:17,12:i,13:s,14:a,15:h,16:x,17:C,18:I,19:18,20:M,21:w,22:A,23:F,24:B,25:z,26:D,27:$,28:S,29:L,30:E,31:R,33:V,35:Y,36:v,37:24,38:k,40:f},t(r,[2,5]),t(r,[2,6]),t(r,[2,17]),t(r,[2,18]),t(r,[2,19]),t(r,[2,20]),t(r,[2,21]),t(r,[2,22]),t(r,[2,23]),t(r,[2,24]),t(r,[2,25]),t(r,[2,26]),t(r,[2,27]),{32:[1,37]},{34:[1,38]},t(r,[2,30]),t(r,[2,31]),t(r,[2,32]),{39:[1,39]},t(r,[2,8]),t(r,[2,9]),t(r,[2,10]),t(r,[2,11]),t(r,[2,12]),t(r,[2,13]),t(r,[2,14]),t(r,[2,15]),t(r,[2,16]),{41:[1,40],43:[1,41]},t(r,[2,4]),t(r,[2,28]),t(r,[2,29]),t(r,[2,33]),t(r,[2,34],{42:[1,42],43:[1,43]}),t(r,[2,40],{41:[1,44]}),t(r,[2,35],{43:[1,45]}),t(r,[2,36]),t(r,[2,38],{42:[1,46]}),t(r,[2,37]),t(r,[2,39])],defaultActions:{},parseError:c(function(y,l){if(l.recoverable)this.trace(y);else{var d=new Error(y);throw d.hash=l,d}},"parseError"),parse:c(function(y){var l=this,d=[0],u=[],b=[null],e=[],n=this.table,o="",T=0,O=0,_=0,W=2,P=1,ht=e.slice.call(arguments,1),H=Object.create(this.lexer),J={yy:{}};for(var rt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,rt)&&(J.yy[rt]=this.yy[rt]);H.setInput(y,J.yy),J.yy.lexer=H,J.yy.parser=this,typeof H.yylloc>"u"&&(H.yylloc={});var at=H.yylloc;e.push(at);var ft=H.options&&H.options.ranges;typeof J.yy.parseError=="function"?this.parseError=J.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function kt(U){d.length=d.length-2*U,b.length=b.length-U,e.length=e.length-U}c(kt,"popStack");function ot(){var U;return U=u.pop()||H.lex()||P,typeof U!="number"&&(U instanceof Array&&(u=U,U=u.pop()),U=l.symbols_[U]||U),U}c(ot,"lex");for(var N,tt,Q,j,xt,et,lt={},vt,Z,Gt,bt;;){if(Q=d[d.length-1],this.defaultActions[Q]?j=this.defaultActions[Q]:((N===null||typeof N>"u")&&(N=ot()),j=n[Q]&&n[Q][N]),typeof j>"u"||!j.length||!j[0]){var Ct="";bt=[];for(vt in n[Q])this.terminals_[vt]&&vt>W&&bt.push("'"+this.terminals_[vt]+"'");H.showPosition?Ct="Parse error on line "+(T+1)+`:
`+H.showPosition()+`
Expecting `+bt.join(", ")+", got '"+(this.terminals_[N]||N)+"'":Ct="Parse error on line "+(T+1)+": Unexpected "+(N==P?"end of input":"'"+(this.terminals_[N]||N)+"'"),this.parseError(Ct,{text:H.match,token:this.terminals_[N]||N,line:H.yylineno,loc:at,expected:bt})}if(j[0]instanceof Array&&j.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Q+", token: "+N);switch(j[0]){case 1:d.push(N),b.push(H.yytext),e.push(H.yylloc),d.push(j[1]),N=null,tt?(N=tt,tt=null):(O=H.yyleng,o=H.yytext,T=H.yylineno,at=H.yylloc,_>0);break;case 2:if(Z=this.productions_[j[1]][1],lt.$=b[b.length-Z],lt._$={first_line:e[e.length-(Z||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(Z||1)].first_column,last_column:e[e.length-1].last_column},ft&&(lt._$.range=[e[e.length-(Z||1)].range[0],e[e.length-1].range[1]]),et=this.performAction.apply(lt,[o,O,T,J.yy,j[1],b,e].concat(ht)),typeof et<"u")return et;Z&&(d=d.slice(0,-1*Z*2),b=b.slice(0,-1*Z),e=e.slice(0,-1*Z)),d.push(this.productions_[j[1]][0]),b.push(lt.$),e.push(lt._$),Gt=n[d[d.length-2]][d[d.length-1]],d.push(Gt);break;case 3:return!0}}return!0},"parse")},p=(function(){var y={EOF:1,parseError:c(function(l,d){if(this.yy.parser)this.yy.parser.parseError(l,d);else throw new Error(l)},"parseError"),setInput:c(function(l,d){return this.yy=d||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var d=l.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:c(function(l){var d=l.length,u=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var b=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===b.length?this.yylloc.first_column:0)+b[b.length-u.length].length-u[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(l){this.unput(this.match.slice(l))},"less"),pastInput:c(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var l=this.pastInput(),d=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:c(function(l,d){var u,b,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),b=l[0].match(/(?:\r\n?|\n).*/g),b&&(this.yylineno+=b.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-b[b.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],u=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var n in e)this[n]=e[n];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,d,u,b;this._more||(this.yytext="",this.match="");for(var e=this._currentRules(),n=0;n<e.length;n++)if(u=this._input.match(this.rules[e[n]]),u&&(!d||u[0].length>d[0].length)){if(d=u,b=n,this.options.backtrack_lexer){if(l=this.test_match(u,e[n]),l!==!1)return l;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(l=this.test_match(d,e[b]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var l=this.next();return l||this.lex()},"lex"),begin:c(function(l){this.conditionStack.push(l)},"begin"),popState:c(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:c(function(l){this.begin(l)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(l,d,u,b){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return y})();g.lexer=p;function m(){this.yy={}}return c(m,"Parser"),m.prototype=g,g.Parser=m,new m})();Yt.parser=Yt;var ze=Yt,He=it(Ae()),q=it(ee()),Be=it(Ie()),Ne=it(Fe()),Re=it(We());q.default.extend(Be.default);q.default.extend(Ne.default);q.default.extend(Re.default);var Zt={friday:5,saturday:6},X="",Lt="",It,Ft="",mt=[],pt=[],Wt=new Map,Pt=[],_t=[],dt="",zt="",se=["active","done","crit","milestone","vert"],Ht=[],gt=!1,Bt=!1,Nt="sunday",Dt="saturday",Et=0,Ge=c(function(){Pt=[],_t=[],dt="",Ht=[],$t=0,At=void 0,wt=void 0,G=[],X="",Lt="",zt="",It=void 0,Ft="",mt=[],pt=[],gt=!1,Bt=!1,Et=0,Wt=new Map,Oe(),Nt="sunday",Dt="saturday"},"clear"),Ve=c(function(t){Lt=t},"setAxisFormat"),je=c(function(){return Lt},"getAxisFormat"),Ue=c(function(t){It=t},"setTickInterval"),qe=c(function(){return It},"getTickInterval"),Qe=c(function(t){Ft=t},"setTodayMarker"),Xe=c(function(){return Ft},"getTodayMarker"),Je=c(function(t){X=t},"setDateFormat"),Ze=c(function(){gt=!0},"enableInclusiveEndDates"),Ke=c(function(){return gt},"endDatesAreInclusive"),ts=c(function(){Bt=!0},"enableTopAxis"),es=c(function(){return Bt},"topAxisEnabled"),ss=c(function(t){zt=t},"setDisplayMode"),is=c(function(){return zt},"getDisplayMode"),ns=c(function(){return X},"getDateFormat"),rs=c(function(t){mt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),as=c(function(){return mt},"getIncludes"),os=c(function(t){pt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),ls=c(function(){return pt},"getExcludes"),cs=c(function(){return Wt},"getLinks"),us=c(function(t){dt=t,Pt.push(t)},"addSection"),ds=c(function(){return Pt},"getSections"),hs=c(function(){let t=Kt(),r=10,i=0;for(;!t&&i<r;)t=Kt(),i++;return _t=G,_t},"getTasks"),ie=c(function(t,r,i,s){let a=t.format(r.trim()),h=t.format("YYYY-MM-DD");return s.includes(a)||s.includes(h)?!1:i.includes("weekends")&&(t.isoWeekday()===Zt[Dt]||t.isoWeekday()===Zt[Dt]+1)||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(a)||i.includes(h)},"isInvalidDate"),fs=c(function(t){Nt=t},"setWeekday"),ks=c(function(){return Nt},"getWeekday"),ys=c(function(t){Dt=t},"setWeekend"),ne=c(function(t,r,i,s){if(!i.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=(0,q.default)(t.startTime):a=(0,q.default)(t.startTime,r,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=(0,q.default)(t.endTime):h=(0,q.default)(t.endTime,r,!0);let[x,C]=ms(a,h,r,i,s);t.endTime=x.toDate(),t.renderEndTime=C},"checkTaskDates"),ms=c(function(t,r,i,s,a){let h=!1,x=null;for(;t<=r;)h||(x=r.toDate()),h=ie(t,i,s,a),h&&(r=r.add(1,"d")),t=t.add(1,"d");return[r,x]},"fixTaskDates"),Ot=c(function(t,r,i){if(i=i.trim(),c(h=>{let x=h.trim();return x==="x"||x==="X"},"isTimestampFormat")(r)&&/^\d+$/.test(i))return new Date(Number(i));let s=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(s!==null){let h=null;for(let C of s.groups.ids.split(" ")){let I=nt(C);I!==void 0&&(!h||I.endTime>h.endTime)&&(h=I)}if(h)return h.endTime;let x=new Date;return x.setHours(0,0,0,0),x}let a=(0,q.default)(i,r.trim(),!0);if(a.isValid())return a.toDate();{st.debug("Invalid date:"+i),st.debug("With date format:"+r.trim());let h=new Date(i);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+i);return h}},"getStartDate"),re=c(function(t){let r=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return r!==null?[Number.parseFloat(r[1]),r[2]]:[NaN,"ms"]},"parseDuration"),ae=c(function(t,r,i,s=!1){i=i.trim();let a=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(a!==null){let M=null;for(let A of a.groups.ids.split(" ")){let F=nt(A);F!==void 0&&(!M||F.startTime<M.startTime)&&(M=F)}if(M)return M.startTime;let w=new Date;return w.setHours(0,0,0,0),w}let h=(0,q.default)(i,r.trim(),!0);if(h.isValid())return s&&(h=h.add(1,"d")),h.toDate();let x=(0,q.default)(t),[C,I]=re(i);if(!Number.isNaN(C)){let M=x.add(C,I);M.isValid()&&(x=M)}return x.toDate()},"getEndDate"),$t=0,ut=c(function(t){return t===void 0?($t=$t+1,"task"+$t):t},"parseId"),ps=c(function(t,r){let i;r.substr(0,1)===":"?i=r.substr(1,r.length):i=r;let s=i.split(","),a={};Rt(s,a,se);for(let x=0;x<s.length;x++)s[x]=s[x].trim();let h="";switch(s.length){case 1:a.id=ut(),a.startTime=t.endTime,h=s[0];break;case 2:a.id=ut(),a.startTime=Ot(void 0,X,s[0]),h=s[1];break;case 3:a.id=ut(s[0]),a.startTime=Ot(void 0,X,s[1]),h=s[2];break}return h&&(a.endTime=ae(a.startTime,X,h,gt),a.manualEndTime=(0,q.default)(h,"YYYY-MM-DD",!0).isValid(),ne(a,X,pt,mt)),a},"compileData"),gs=c(function(t,r){let i;r.substr(0,1)===":"?i=r.substr(1,r.length):i=r;let s=i.split(","),a={};Rt(s,a,se);for(let h=0;h<s.length;h++)s[h]=s[h].trim();switch(s.length){case 1:a.id=ut(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:s[0]};break;case 2:a.id=ut(),a.startTime={type:"getStartDate",startData:s[0]},a.endTime={data:s[1]};break;case 3:a.id=ut(s[0]),a.startTime={type:"getStartDate",startData:s[1]},a.endTime={data:s[2]};break}return a},"parseData"),At,wt,G=[],oe={},xs=c(function(t,r){let i={section:dt,type:dt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:r},task:t,classes:[]},s=gs(wt,r);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=wt,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,i.order=Et,Et++;let a=G.push(i);wt=i.id,oe[i.id]=a-1},"addTask"),nt=c(function(t){let r=oe[t];return G[r]},"findTaskById"),vs=c(function(t,r){let i={section:dt,type:dt,description:t,task:t,classes:[]},s=ps(At,r);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,At=i,_t.push(i)},"addTaskOrg"),Kt=c(function(){let t=c(function(i){let s=G[i],a="";switch(G[i].raw.startTime.type){case"prevTaskEnd":{let h=nt(s.prevTaskId);s.startTime=h.endTime;break}case"getStartDate":a=Ot(void 0,X,G[i].raw.startTime.startData),a&&(G[i].startTime=a);break}return G[i].startTime&&(G[i].endTime=ae(G[i].startTime,X,G[i].raw.endTime.data,gt),G[i].endTime&&(G[i].processed=!0,G[i].manualEndTime=(0,q.default)(G[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ne(G[i],X,pt,mt))),G[i].processed},"compileTask"),r=!0;for(let[i,s]of G.entries())t(i),r=r&&s.processed;return r},"compileTasks"),bs=c(function(t,r){let i=r;ct().securityLevel!=="loose"&&(i=(0,He.sanitizeUrl)(r)),t.split(",").forEach(function(s){nt(s)!==void 0&&(ce(s,()=>{window.open(i,"_self")}),Wt.set(s,i))}),le(t,"clickable")},"setLink"),le=c(function(t,r){t.split(",").forEach(function(i){let s=nt(i);s!==void 0&&s.classes.push(r)})},"setClass"),Ts=c(function(t,r,i){if(ct().securityLevel!=="loose"||r===void 0)return;let s=[];if(typeof i=="string"){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let a=0;a<s.length;a++){let h=s[a].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),s[a]=h}}s.length===0&&s.push(t),nt(t)!==void 0&&ce(t,()=>{Le.runFunc(r,...s)})},"setClickFun"),ce=c(function(t,r){Ht.push(function(){let i=document.querySelector(`[id="${t}"]`);i!==null&&i.addEventListener("click",function(){r()})},function(){let i=document.querySelector(`[id="${t}-text"]`);i!==null&&i.addEventListener("click",function(){r()})})},"pushFun"),$s=c(function(t,r,i){t.split(",").forEach(function(s){Ts(s,r,i)}),le(t,"clickable")},"setClickEvent"),ws=c(function(t){Ht.forEach(function(r){r(t)})},"bindFunctions"),_s={getConfig:c(()=>ct().gantt,"getConfig"),clear:Ge,setDateFormat:Je,getDateFormat:ns,enableInclusiveEndDates:Ze,endDatesAreInclusive:Ke,enableTopAxis:ts,topAxisEnabled:es,setAxisFormat:Ve,getAxisFormat:je,setTickInterval:Ue,getTickInterval:qe,setTodayMarker:Qe,getTodayMarker:Xe,setAccTitle:ye,getAccTitle:ke,setDiagramTitle:fe,getDiagramTitle:he,setDisplayMode:ss,getDisplayMode:is,setAccDescription:de,getAccDescription:ue,addSection:us,getSections:ds,getTasks:hs,addTask:xs,findTaskById:nt,addTaskOrg:vs,setIncludes:rs,getIncludes:as,setExcludes:os,getExcludes:ls,setClickEvent:$s,setLink:bs,getLinks:cs,bindFunctions:ws,parseDuration:re,isInvalidDate:ie,setWeekday:fs,getWeekday:ks,setWeekend:ys};function Rt(t,r,i){let s=!0;for(;s;)s=!1,i.forEach(function(a){let h="^\\s*"+a+"\\s*$",x=new RegExp(h);t[0].match(x)&&(r[a]=!0,t.shift(1),s=!0)})}c(Rt,"getTaskTags");var yt=it(ee()),Ds=it(Pe());yt.default.extend(Ds.default);var Ss=c(function(){st.debug("Something is calling, setConf, remove the call")},"setConf"),te={monday:Me,tuesday:Ce,wednesday:Se,thursday:De,friday:_e,saturday:we,sunday:$e},Cs=c((t,r)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((h,x)=>h.startTime-x.startTime||h.order-x.order),a=0;for(let h of s)for(let x=0;x<i.length;x++)if(h.startTime>=i[x]){i[x]=h.endTime,h.order=x+r,x>a&&(a=x);break}return a},"getMaxIntersections"),K,Mt=1e4,Ms=c(function(t,r,i,s){let a=ct().gantt,h=ct().securityLevel,x;h==="sandbox"&&(x=Tt("#i"+r));let C=h==="sandbox"?Tt(x.nodes()[0].contentDocument.body):Tt("body"),I=h==="sandbox"?x.nodes()[0].contentDocument:document,M=I.getElementById(r);K=M.parentElement.offsetWidth,K===void 0&&(K=1200),a.useWidth!==void 0&&(K=a.useWidth);let w=s.db.getTasks(),A=[];for(let f of w)A.push(f.type);A=k(A);let F={},B=2*a.topPadding;if(s.db.getDisplayMode()==="compact"||a.displayMode==="compact"){let f={};for(let p of w)f[p.section]===void 0?f[p.section]=[p]:f[p.section].push(p);let g=0;for(let p of Object.keys(f)){let m=Cs(f[p],g)+1;g+=m,B+=m*(a.barHeight+a.barGap),F[p]=m}}else{B+=w.length*(a.barHeight+a.barGap);for(let f of A)F[f]=w.filter(g=>g.type===f).length}M.setAttribute("viewBox","0 0 "+K+" "+B);let z=C.select(`[id="${r}"]`),D=me().domain([pe(w,function(f){return f.startTime}),ge(w,function(f){return f.endTime})]).rangeRound([0,K-a.leftPadding-a.rightPadding]);function $(f,g){let p=f.startTime,m=g.startTime,y=0;return p>m?y=1:p<m&&(y=-1),y}c($,"taskCompare"),w.sort($),S(w,K,B),xe(z,B,K,a.useMaxWidth),z.append("text").text(s.db.getDiagramTitle()).attr("x",K/2).attr("y",a.titleTopMargin).attr("class","titleText");function S(f,g,p){let m=a.barHeight,y=m+a.barGap,l=a.topPadding,d=a.leftPadding,u=ve().domain([0,A.length]).range(["#00B9FA","#F95002"]).interpolate(be);E(y,l,d,g,p,f,s.db.getExcludes(),s.db.getIncludes()),V(d,l,g,p),L(f,y,l,d,m,u,g),Y(y,l),v(d,l,g,p)}c(S,"makeGantt");function L(f,g,p,m,y,l,d){f.sort((n,o)=>n.vert===o.vert?0:n.vert?1:-1);let u=[...new Set(f.map(n=>n.order))].map(n=>f.find(o=>o.order===n));z.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(n,o){return o=n.order,o*g+p-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",g).attr("class",function(n){for(let[o,T]of A.entries())if(n.type===T)return"section section"+o%a.numberSectionStyles;return"section section0"}).enter();let b=z.append("g").selectAll("rect").data(f).enter(),e=s.db.getLinks();if(b.append("rect").attr("id",function(n){return n.id}).attr("rx",3).attr("ry",3).attr("x",function(n){return n.milestone?D(n.startTime)+m+.5*(D(n.endTime)-D(n.startTime))-.5*y:D(n.startTime)+m}).attr("y",function(n,o){return o=n.order,n.vert?a.gridLineStartPadding:o*g+p}).attr("width",function(n){return n.milestone?y:n.vert?.08*y:D(n.renderEndTime||n.endTime)-D(n.startTime)}).attr("height",function(n){return n.vert?w.length*(a.barHeight+a.barGap)+a.barHeight*2:y}).attr("transform-origin",function(n,o){return o=n.order,(D(n.startTime)+m+.5*(D(n.endTime)-D(n.startTime))).toString()+"px "+(o*g+p+.5*y).toString()+"px"}).attr("class",function(n){let o="task",T="";n.classes.length>0&&(T=n.classes.join(" "));let O=0;for(let[W,P]of A.entries())n.type===P&&(O=W%a.numberSectionStyles);let _="";return n.active?n.crit?_+=" activeCrit":_=" active":n.done?n.crit?_=" doneCrit":_=" done":n.crit&&(_+=" crit"),_.length===0&&(_=" task"),n.milestone&&(_=" milestone "+_),n.vert&&(_=" vert "+_),_+=O,_+=" "+T,o+_}),b.append("text").attr("id",function(n){return n.id+"-text"}).text(function(n){return n.task}).attr("font-size",a.fontSize).attr("x",function(n){let o=D(n.startTime),T=D(n.renderEndTime||n.endTime);if(n.milestone&&(o+=.5*(D(n.endTime)-D(n.startTime))-.5*y,T=o+y),n.vert)return D(n.startTime)+m;let O=this.getBBox().width;return O>T-o?T+O+1.5*a.leftPadding>d?o+m-5:T+m+5:(T-o)/2+o+m}).attr("y",function(n,o){return n.vert?a.gridLineStartPadding+w.length*(a.barHeight+a.barGap)+60:(o=n.order,o*g+a.barHeight/2+(a.fontSize/2-2)+p)}).attr("text-height",y).attr("class",function(n){let o=D(n.startTime),T=D(n.endTime);n.milestone&&(T=o+y);let O=this.getBBox().width,_="";n.classes.length>0&&(_=n.classes.join(" "));let W=0;for(let[ht,H]of A.entries())n.type===H&&(W=ht%a.numberSectionStyles);let P="";return n.active&&(n.crit?P="activeCritText"+W:P="activeText"+W),n.done?n.crit?P=P+" doneCritText"+W:P=P+" doneText"+W:n.crit&&(P=P+" critText"+W),n.milestone&&(P+=" milestoneText"),n.vert&&(P+=" vertText"),O>T-o?T+O+1.5*a.leftPadding>d?_+" taskTextOutsideLeft taskTextOutside"+W+" "+P:_+" taskTextOutsideRight taskTextOutside"+W+" "+P+" width-"+O:_+" taskText taskText"+W+" "+P+" width-"+O}),ct().securityLevel==="sandbox"){let n;n=Tt("#i"+r);let o=n.nodes()[0].contentDocument;b.filter(function(T){return e.has(T.id)}).each(function(T){var O=o.querySelector("#"+T.id),_=o.querySelector("#"+T.id+"-text");let W=O.parentNode;var P=o.createElement("a");P.setAttribute("xlink:href",e.get(T.id)),P.setAttribute("target","_top"),W.appendChild(P),P.appendChild(O),P.appendChild(_)})}}c(L,"drawRects");function E(f,g,p,m,y,l,d,u){if(d.length===0&&u.length===0)return;let b,e;for(let{startTime:_,endTime:W}of l)(b===void 0||_<b)&&(b=_),(e===void 0||W>e)&&(e=W);if(!b||!e)return;if((0,yt.default)(e).diff((0,yt.default)(b),"year")>5){st.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let n=s.db.getDateFormat(),o=[],T=null,O=(0,yt.default)(b);for(;O.valueOf()<=e;)s.db.isInvalidDate(O,n,d,u)?T?T.end=O:T={start:O,end:O}:T&&(o.push(T),T=null),O=O.add(1,"d");z.append("g").selectAll("rect").data(o).enter().append("rect").attr("id",_=>"exclude-"+_.start.format("YYYY-MM-DD")).attr("x",_=>D(_.start.startOf("day"))+p).attr("y",a.gridLineStartPadding).attr("width",_=>D(_.end.endOf("day"))-D(_.start.startOf("day"))).attr("height",y-g-a.gridLineStartPadding).attr("transform-origin",function(_,W){return(D(_.start)+p+.5*(D(_.end)-D(_.start))).toString()+"px "+(W*f+.5*y).toString()+"px"}).attr("class","exclude-range")}c(E,"drawExcludeDays");function R(f,g,p,m){if(p<=0||f>g)return 1/0;let y=g-f,l=yt.default.duration({[m??"day"]:p}).asMilliseconds();return l<=0?1/0:Math.ceil(y/l)}c(R,"getEstimatedTickCount");function V(f,g,p,m){let y=s.db.getDateFormat(),l=s.db.getAxisFormat(),d;l?d=l:y==="D"?d="%d":d=a.axisFormat??"%Y-%m-%d";let u=Te(D).tickSize(-m+g+a.gridLineStartPadding).tickFormat(Vt(d)),b=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(b!==null){let e=parseInt(b[1],10);if(isNaN(e)||e<=0)st.warn(`Invalid tick interval value: "${b[1]}". Skipping custom tick interval.`);else{let n=b[2],o=s.db.getWeekday()||a.weekday,T=D.domain(),O=T[0],_=T[1],W=R(O,_,e,n);if(W>Mt)st.warn(`The tick interval "${e}${n}" would generate ${W} ticks, which exceeds the maximum allowed (${Mt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(n){case"millisecond":u.ticks(Jt.every(e));break;case"second":u.ticks(Xt.every(e));break;case"minute":u.ticks(Qt.every(e));break;case"hour":u.ticks(qt.every(e));break;case"day":u.ticks(Ut.every(e));break;case"week":u.ticks(te[o].every(e));break;case"month":u.ticks(jt.every(e));break}}}if(z.append("g").attr("class","grid").attr("transform","translate("+f+", "+(m-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let e=Ye(D).tickSize(-m+g+a.gridLineStartPadding).tickFormat(Vt(d));if(b!==null){let n=parseInt(b[1],10);if(isNaN(n)||n<=0)st.warn(`Invalid tick interval value: "${b[1]}". Skipping custom tick interval.`);else{let o=b[2],T=s.db.getWeekday()||a.weekday,O=D.domain(),_=O[0],W=O[1];if(R(_,W,n,o)<=Mt)switch(o){case"millisecond":e.ticks(Jt.every(n));break;case"second":e.ticks(Xt.every(n));break;case"minute":e.ticks(Qt.every(n));break;case"hour":e.ticks(qt.every(n));break;case"day":e.ticks(Ut.every(n));break;case"week":e.ticks(te[T].every(n));break;case"month":e.ticks(jt.every(n));break}}}z.append("g").attr("class","grid").attr("transform","translate("+f+", "+g+")").call(e).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(V,"makeGrid");function Y(f,g){let p=0,m=Object.keys(F).map(y=>[y,F[y]]);z.append("g").selectAll("text").data(m).enter().append(function(y){let l=y[0].split(Ee.lineBreakRegex),d=-(l.length-1)/2,u=I.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",d+"em");for(let[b,e]of l.entries()){let n=I.createElementNS("http://www.w3.org/2000/svg","tspan");n.setAttribute("alignment-baseline","central"),n.setAttribute("x","10"),b>0&&n.setAttribute("dy","1em"),n.textContent=e,u.appendChild(n)}return u}).attr("x",10).attr("y",function(y,l){if(l>0)for(let d=0;d<l;d++)return p+=m[l-1][1],y[1]*f/2+p*f+g;else return y[1]*f/2+g}).attr("font-size",a.sectionFontSize).attr("class",function(y){for(let[l,d]of A.entries())if(y[0]===d)return"sectionTitle sectionTitle"+l%a.numberSectionStyles;return"sectionTitle"})}c(Y,"vertLabels");function v(f,g,p,m){let y=s.db.getTodayMarker();if(y==="off")return;let l=z.append("g").attr("class","today"),d=new Date,u=l.append("line");u.attr("x1",D(d)+f).attr("x2",D(d)+f).attr("y1",a.titleTopMargin).attr("y2",m-a.titleTopMargin).attr("class","today"),y!==""&&u.attr("style",y.replace(/,/g,";"))}c(v,"drawToday");function k(f){let g={},p=[];for(let m=0,y=f.length;m<y;++m)Object.prototype.hasOwnProperty.call(g,f[m])||(g[f[m]]=!0,p.push(f[m]));return p}c(k,"checkUnique")},"draw"),Ys={setConf:Ss,draw:Ms},Es=c(t=>`
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

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
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

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
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
`,"getStyles"),Os=Es,Is={parser:ze,db:_s,renderer:Ys,styles:Os};export{Is as diagram};
