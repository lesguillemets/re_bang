/*
 long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 Released under the Apache License, Version 2.0
 see: https://github.com/dcodeIO/long.js for details
*/
function aa(a){this.o=1;this.g=a}function g(a,b,c){this.o=a;this.g=b;this.i=c}function ba(a,b,c){this.o=0;this.g=a;this.i=b;this.G=c}function k(a,b,c,d,f){this.o=0;this.g=a;this.i=b;this.G=c;this.d=d;this.e=f}function ca(a){var b=l,c=l,d=l,f=l;this.o=0;this.g=b;this.i=7;this.G=c;this.d=a;this.e=d;this.j=f}function m(a,b){this.j=a;void 0===b&&(this.x=da)}function p(a){this.j=a}function t(a,b){this.j=a;this.D=b;this.arity=a.length-b.length}var l=new function(a){this.o=a}(0),u={},da={},ea={};
function fa(a,b){for(;;)if(a=v(a),a instanceof Function){if(b.length===a.length)return a.apply(null,b);if(b.length<a.length)return new t(a,b);var c=a.apply(null,b.slice(0,a.length));b=b.slice(a.length);a=x(c)}else if(a instanceof t){if(b.length===a.arity)return a.j.apply(null,a.D.concat(b));if(b.length<a.arity)return new t(a.j,a.D.concat(b));c=a.j.apply(null,a.D.concat(b.slice(0,a.arity)));b=b.slice(a.arity);a=x(c)}else return a}
function y(a,b){a=v(a);return a instanceof Function?1===a.length?a(b):new t(a,[b]):a instanceof t?1===a.arity?a.j.apply(null,a.D.concat([b])):new t(a.j,a.D.concat([b])):a}
function C(a,b,c){a=v(a);if(a instanceof Function)switch(a.length){case 2:return a(b,c);case 1:return y(x(a(b)),c);default:return new t(a,[b,c])}else if(a instanceof t)switch(a.arity){case 2:return a.j.apply(null,a.D.concat([b,c]));case 1:return y(x(a.j.apply(null,a.D.concat([b]))),c);default:return new t(a.j,a.D.concat([b,c]))}else return a}
function ga(a){var b=ha,c=new g(0,new k(new k(new g(0,ia,ja),ka,la,ma,na),oa,ma,ka,pa),qa),b=v(b);if(b instanceof Function)switch(b.length){case 3:return b(c,"world",a);case 2:return y(x(b(c,"world")),a);case 1:return C(x(b(c)),"world",a);default:return new t(b,[c,"world",a])}else if(b instanceof t)switch(b.arity){case 3:return b.j.apply(null,b.D.concat([c,"world",a]));case 2:return y(x(b.j.apply(null,b.D.concat([c,"world"]))),a);case 1:return C(x(b.j.apply(null,b.D.concat([c]))),"world",a);default:return new t(b.j,
b.D.concat([c,"world",a]))}else return b}function v(a){if(a instanceof m){if(a.j!==u)if(a.x===da){var b=a.j;a.j=u;a.x=b()}else return a.j();if(a.x===da)throw"Infinite loop!";return a.x}return a}var D=0,ra=[];function x(a){for(ra.push(D);a instanceof p;){var b=a.j;a.j=u;D=0;a=b()}D=ra.pop();return a}if(!window)var window={};window.Haste={};window.A=fa;window.E=v;window.B=x;function sa(a){throw v(a);}function F(a){return ta(a,l)}
function ta(a,b,c){var d=c?c:0;return d>=a.length?v(b):{o:1,g:a.charCodeAt(d),i:new m(function(){return ta(a,b,d+1)})}}if("undefined"==typeof G)var G=void 0;var ua=new ArrayBuffer(8);new Uint32Array(ua);new Float32Array(ua);new Float64Array(ua);
window.jsGetMouseCoords=function(a){var b=0,c=0;a||(a=window.event);if(a.pageX||a.pageY)b=a.pageX,c=a.pageY;else if(a.clientX||a.clientY)b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,c=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;return[b-(a.currentTarget.offsetLeft||0),c-(a.currentTarget.offsetTop||0)]};function va(a){var b=v(wa),c=[];for(a=v(a);a.o;)a=v(a),c.push(v(a.g)),a=v(a.i);return c.join(b)}
function xa(a,b,c){b=new ArrayBuffer(b);(new window[a](b))[0]=c;return b}function ya(a,b,c){var d=new ArrayBuffer(b);(new window[a](d))[0]=c;a=new Uint8Array(d);c=0;for(b=b-1;c<b;++c,--b){var f=a[c];a[c]=a[b];a[b]=f}return d}window.toABle=xa;window.toABbe=ya;var za=new ArrayBuffer(2);(new DataView(za)).setInt16(0,256,!0);256!==(new Int16Array(za))[0]&&(window.toABle=ya,window.toABbe=xa);var H={};
(function(a,b){function c(a,c,b){if(null!==a&&"object"===typeof a&&Array.isArray(a.a))return a;this.c=0;this.a=null;this.length=0;if("le"===c||"be"===c)b=c,c=10;null!==a&&this.ja(a||0,c||10,b||"be")}function d(a,c,b){var d=0;for(b=Math.min(a.length,b);c<b;c++)var e=a.charCodeAt(c)-48,d=d<<4,d=49<=e&&54>=e?d|e-49+10:17<=e&&22>=e?d|e-17+10:d|e&15;return d}function f(a,c,b,d){var e=0;for(b=Math.min(a.length,b);c<b;c++)var f=a.charCodeAt(c)-48,e=e*d,e=49<=f?e+(f-49+10):17<=f?e+(f-17+10):e+f;return e}
"object"===typeof a?a.Ra=c:b.M=c;c.M=c;c.$=26;c.max=function(a,c){return 0<a.N(c)?a:c};c.min=function(a,c){return 0>a.N(c)?a:c};c.prototype.ja=function(a,c,b){if("number"===typeof a)this.ka(a,c,b);else if("object"===typeof a)this.T(a,c,b);else{"hex"===c&&(c=16);a=a.toString().replace(/\s+/g,"");var d=0;"-"===a[0]&&d++;16===c?this.ma(a,d):this.la(a,c,d);"-"===a[0]&&(this.c=1);this.u();"le"===b&&this.T(this.ia(),c,b)}};c.prototype.ka=function(a,c,b){0>a&&(this.c=1,a=-a);67108864>a?(this.a=[a&67108863],
this.length=1):4503599627370496>a?(this.a=[a&67108863,a/67108864&67108863],this.length=2):(this.a=[a&67108863,a/67108864&67108863,1],this.length=3);"le"===b&&this.T(this.ia(),c,b)};c.prototype.T=function(a,c,b){if(0>=a.length)this.a=[0],this.length=1;else{this.length=Math.ceil(a.length/3);this.a=Array(this.length);for(c=0;c<this.length;c++)this.a[c]=0;var d=0;if("be"===b)for(c=a.length-1,b=0;0<=c;c-=3){var e=a[c]|a[c-1]<<8|a[c-2]<<16;this.a[b]|=e<<d&67108863;this.a[b+1]=e>>>26-d&67108863;d+=24;26<=
d&&(d-=26,b++)}else if("le"===b)for(b=c=0;c<a.length;c+=3)e=a[c]|a[c+1]<<8|a[c+2]<<16,this.a[b]|=e<<d&67108863,this.a[b+1]=e>>>26-d&67108863,d+=24,26<=d&&(d-=26,b++);this.u()}};c.prototype.ma=function(a,c){this.length=Math.ceil((a.length-c)/6);this.a=Array(this.length);for(var b=0;b<this.length;b++)this.a[b]=0;for(var e=0,b=a.length-6,f=0;b>=c;b-=6){var r=d(a,b,b+6);this.a[f]|=r<<e&67108863;this.a[f+1]|=r>>>26-e&4194303;e+=24;26<=e&&(e-=26,f++)}b+6!==c&&(r=d(a,c,b+6),this.a[f]|=r<<e&67108863,this.a[f+
1]|=r>>>26-e&4194303);this.u()};c.prototype.la=function(a,c,b){this.a=[0];this.length=1;for(var d=0,e=1;67108863>=e;e*=c)d++;d--;for(var e=e/c|0,r=a.length-b,h=r%d,q=Math.min(r,r-h)+b,r=0;b<q;b+=d)r=f(a,b,b+d,c),this.ca(e),67108864>this.a[0]+r?this.a[0]+=r:this.Y(r);if(0!==h){d=1;r=f(a,b,a.length,c);for(b=0;b<h;b++)d*=c;this.ca(d);67108864>this.a[0]+r?this.a[0]+=r:this.Y(r)}};c.prototype.ra=function(a){a.a=Array(this.length);for(var c=0;c<this.length;c++)a.a[c]=this.a[c];a.length=this.length;a.c=
this.c};c.prototype.clone=function(){var a=new c(null);this.ra(a);return a};c.prototype.u=function(){for(;1<this.length&&0===this.a[this.length-1];)this.length--;return this.J()};c.prototype.J=function(){1===this.length&&0===this.a[0]&&(this.c=0);return this};var e=" 0 00 000 0000 00000 000000 0000000 00000000 000000000 0000000000 00000000000 000000000000 0000000000000 00000000000000 000000000000000 0000000000000000 00000000000000000 000000000000000000 0000000000000000000 00000000000000000000 000000000000000000000 0000000000000000000000 00000000000000000000000 000000000000000000000000 0000000000000000000000000".split(" "),
h=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],n=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1E7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64E6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243E5,28629151,33554432,39135393,45435424,52521875,60466176];c.prototype.toString=function(a,c){a=a||10;c=c|0||1;if(16===a||"hex"===a){for(var b="",d=0,f=0,r=0;r<this.length;r++){var T=
this.a[r],q=((T<<d|f)&16777215).toString(16),f=T>>>24-d&16777215,b=0!==f||r!==this.length-1?e[6-q.length]+q+b:q+b,d=d+2;26<=d&&(d-=26,r--)}for(0!==f&&(b=f.toString(16)+b);0!==b.length%c;)b="0"+b;0!==this.c&&(b="-"+b);return b}if(a===(a|0)&&2<=a&&36>=a){d=h[a];f=n[a];b="";r=this.clone();for(r.c=0;0!==r.I();)T=r.W(f).toString(a),r=r.ba(f),b=0!==r.I()?e[d-T.length]+T+b:T+b;for(0===this.I()&&(b="0"+b);0!==b.length%c;)b="0"+b;0!==this.c&&(b="-"+b);return b}throw"Base should be between 2 and 36";};c.prototype.toJSON=
function(){return this.toString(16)};c.prototype.ia=function(){this.u();var a=Array(this.byteLength());a[0]=0;for(var b=this.clone(),c=0;0!==b.I();c++){var d=b.oa();b.fa(8);a[a.length-c-1]=d}return a};c.prototype.X=Math.qa?function(a){return 32-Math.qa(a)}:function(a){var b=0;4096<=a&&(b+=13,a>>>=13);64<=a&&(b+=7,a>>>=7);8<=a&&(b+=4,a>>>=4);2<=a&&(b+=2,a>>>=2);return b+a};c.prototype.pa=function(){var a=0,a=this.X(this.a[this.length-1]);return 26*(this.length-1)+a};c.prototype.byteLength=function(){return Math.ceil(this.pa()/
8)};c.prototype.m=function(){if(0===this.I())return this.clone();var a=this.clone();a.c=this.c^1;return a};c.prototype.ya=function(a){for(;this.length<a.length;)this.a[this.length++]=0;for(var b=0;b<a.length;b++)this.a[b]|=a.a[b];return this.u()};c.prototype.da=function(a){return this.ya(a)};c.prototype.Ca=function(a){return this.length>a.length?this.clone().da(a):a.clone().da(this)};c.prototype.xa=function(a){var b;b=this.length>a.length?a:this;for(var c=0;c<b.length;c++)this.a[c]&=a.a[c];this.length=
b.length;return this.u()};c.prototype.aa=function(a){return this.xa(a)};c.prototype.ua=function(a){return this.length>a.length?this.clone().aa(a):a.clone().aa(this)};c.prototype.za=function(a){var b;this.length>a.length?b=this:(b=a,a=this);for(var c=0;c<a.length;c++)this.a[c]=b.a[c]^a.a[c];if(this!==b)for(;c<b.length;c++)this.a[c]=b.a[c];this.length=b.length;return this.u()};c.prototype.ga=function(a){return this.za(a)};c.prototype.Ga=function(a){return this.length>a.length?this.clone().ga(a):a.clone().ga(this)};
c.prototype.P=function(a){if(0!==this.c&&0===a.c){this.c=0;var b=this.R(a);this.c^=1;return this.J()}if(0===this.c&&0!==a.c)return a.c=0,b=this.R(a),a.c=1,b.J();var c;this.length>a.length?c=this:(c=a,a=this);for(var d=b=0;d<a.length;d++)b=(c.a[d]|0)+(a.a[d]|0)+b,this.a[d]=b&67108863,b>>>=26;for(;0!==b&&d<c.length;d++)b=(c.a[d]|0)+b,this.a[d]=b&67108863,b>>>=26;this.length=c.length;if(0!==b)this.a[this.length]=b,this.length++;else if(c!==this)for(;d<c.length;d++)this.a[d]=c.a[d];return this};c.prototype.add=
function(a){if(0!==a.c&&0===this.c){a.c=0;var b=this.sub(a);a.c^=1;return b}return 0===a.c&&0!==this.c?(this.c=0,b=a.sub(this),this.c=1,b):this.length>a.length?this.clone().P(a):a.clone().P(this)};c.prototype.R=function(a){if(0!==a.c){a.c=0;var b=this.P(a);a.c=1;return b.J()}if(0!==this.c)return this.c=0,this.P(a),this.c=1,this.J();b=this.N(a);if(0===b)return this.c=0,this.length=1,this.a[0]=0,this;var c;0<b?c=this:(c=a,a=this);for(var d=0,e=0;e<a.length;e++)b=(c.a[e]|0)-(a.a[e]|0)+d,d=b>>26,this.a[e]=
b&67108863;for(;0!==d&&e<c.length;e++)b=(c.a[e]|0)+d,d=b>>26,this.a[e]=b&67108863;if(0===d&&e<c.length&&c!==this)for(;e<c.length;e++)this.a[e]=c.a[e];this.length=Math.max(this.length,e);c!==this&&(this.c=1);return this.u()};c.prototype.sub=function(a){return this.clone().R(a)};c.prototype.Da=function(a,b){if(63>this.length+a.length){b.c=a.c^this.c;var c=this.length+a.length|0;b.length=c;var c=c-1|0,d=this.a[0]|0,e=a.a[0]|0,d=d*e,f=d/67108864|0;b.a[0]=d&67108863;for(var h=1;h<c;h++){for(var q=f>>>
26,f=f&67108863,n=Math.min(h,a.length-1),O=Math.max(0,h-this.length+1);O<=n;O++)d=this.a[h-O|0]|0,e=a.a[O]|0,d*=e,e=d&67108863,q=q+(d/67108864|0)|0,e=e+f|0,f=e&67108863,q=q+(e>>>26)|0;b.a[h]=f|0;f=q|0}0!==f?b.a[h]=f|0:b.length--}else{b.c=a.c^this.c;b.length=this.length+a.length;for(h=c=f=0;h<b.length-1;h++){q=c;c=0;f&=67108863;n=Math.min(h,a.length-1);for(O=Math.max(0,h-this.length+1);O<=n;O++)d=(this.a[h-O]|0)*(a.a[O]|0),e=d&67108863,q=q+(d/67108864|0)|0,e=e+f|0,f=e&67108863,q=q+(e>>>26)|0,c+=q>>>
26,q&=67108863;b.a[h]=f;f=q}0!==f?b.a[h]=f:b.length--}return b.u()};c.prototype.H=function(a){var b=new c(null);b.a=Array(this.length+a.length);return this.Da(a,b)};c.prototype.ca=function(a){for(var b=0,c=0;c<this.length;c++){var d=(this.a[c]|0)*a,e=(d&67108863)+(b&67108863),b=b>>26,b=b+(d/67108864|0),b=b+(e>>>26);this.a[c]=e&67108863}0!==b&&(this.a[c]=b,this.length++)};c.prototype.ea=function(a){var b=a%26;a=(a-b)/26;var c=67108863>>>26-b<<26-b;if(0!==b){for(var d=0,e=0;e<this.length;e++){var f=
this.a[e]&c;this.a[e]=(this.a[e]|0)-f<<b|d;d=f>>>26-b}d&&(this.a[e]=d,this.length++)}if(0!==a){for(e=this.length-1;0<=e;e--)this.a[e+a]=this.a[e];for(e=0;e<a;e++)this.a[e]=0;this.length+=a}return this.u()};c.prototype.fa=function(a){var b;b=0;var c=a%26,d=Math.min((a-c)/26,this.length),e=67108863^67108863>>>c<<c;b=Math.max(0,b-d);if(0!==d)if(this.length>d)for(this.length-=d,a=0;a<this.length;a++)this.a[a]=this.a[a+d];else this.a[0]=0,this.length=1;d=0;for(a=this.length-1;0<=a&&(0!==d||a>=b);a--){var f=
this.a[a]|0;this.a[a]=d<<26-c|f>>>c;d=f&e}0===this.length&&(this.a[0]=0,this.length=1);this.u()};c.prototype.Ka=function(a){return this.clone().ea(a)};c.prototype.Y=function(a){this.a[0]+=a;for(a=0;a<this.length&&67108864<=this.a[a];a++)this.a[a]-=67108864,a===this.length-1?this.a[a+1]=1:this.a[a+1]++;this.length=Math.max(this.length,a+1)};c.prototype.wa=function(){this.c=0;return this};c.prototype.abs=function(){return this.clone().wa()};c.prototype.U=function(a,b,c){var d=a.length+c,e;if(this.a.length<
d){var f=Array(d);for(e=0;e<this.length;e++)f[e]=this.a[e];this.a=f}else e=this.length;for(this.length=Math.max(this.length,d);e<this.length;e++)this.a[e]=0;for(e=f=0;e<a.length;e++)d=(this.a[e+c]|0)+f,f=(a.a[e]|0)*b,d-=f&67108863,f=(d>>26)-(f/67108864|0),this.a[e+c]=d&67108863;for(;e<this.length-c;e++)d=(this.a[e+c]|0)+f,f=d>>26,this.a[e+c]=d&67108863;if(0===f)return this.u();for(e=f=0;e<this.length;e++)d=-(this.a[e]|0)+f,f=d>>26,this.a[e]=d&67108863;this.c=1;return this.u()};c.prototype.na=function(a,
b){var d=this.length-a.length,e=this.clone(),f=a,h=f.a[f.length-1]|0,d=26-this.X(h);0!==d&&(f=f.Ka(d),e.ea(d),h=f.a[f.length-1]|0);var n=e.length-f.length,q;if("mod"!==b){q=new c(null);q.length=n+1;q.a=Array(q.length);for(var L=0;L<q.length;L++)q.a[L]=0}L=e.clone().U(f,1,n);0===L.c&&(e=L,q&&(q.a[n]=1));for(--n;0<=n;n--){L=67108864*(e.a[f.length+n]|0)+(e.a[f.length+n-1]|0);L=Math.min(L/h|0,67108863);for(e.U(f,L,n);0!==e.c;)L--,e.c=0,e.U(f,1,n),0!==e.I()&&(e.c^=1);q&&(q.a[n]=L)}q&&q.u();e.u();"div"!==
b&&0!==d&&e.fa(d);return{s:q?q:null,C:e}};c.prototype.K=function(a,b,d){if(0!==this.c&&0===a.c){var e=this.m().K(a,b),f,h;"mod"!==b&&(f=e.s.m());"div"!==b&&(h=e.C.m(),d&&h.m&&(h=h.add(a)));return{s:f,C:h}}return 0===this.c&&0!==a.c?(e=this.K(a.m(),b),"mod"!==b&&(f=e.s.m()),{s:f,C:e.C}):0!==(this.c&a.c)?(e=this.m().K(a.m(),b),"div"!==b&&(h=e.C.m(),d&&h.m&&(h=h.R(a))),{s:e.s,C:h}):a.length>this.length||0>this.N(a)?{s:new c(0),C:this}:1===a.length?"div"===b?{s:this.Z(a.a[0]),C:null}:"mod"===b?{s:null,
C:new c(this.W(a.a[0]))}:{s:this.Z(a.a[0]),C:new c(this.W(a.a[0]))}:this.na(a,b)};c.prototype.s=function(a){return this.K(a,"div",!1).s};c.prototype.C=function(a){return this.K(a,"mod",!1).C};c.prototype.W=function(a){for(var b=67108864%a,c=0,d=this.length-1;0<=d;d--)c=(b*c+(this.a[d]|0))%a;return c};c.prototype.ba=function(a){for(var b=0,c=this.length-1;0<=c;c--)b=(this.a[c]|0)+67108864*b,this.a[c]=b/a|0,b%=a;return this.u()};c.prototype.Z=function(a){return this.clone().ba(a)};c.prototype.V=function(){return 1===
(this.a[0]&1)};c.prototype.oa=function(){return this.a[0]&255};c.prototype.I=function(){var a=0,b=0>a;b&&(a=-a);if(0!==this.c&&!b)return-1;if(0===this.c&&b)return 1;a&=67108863;this.u();1<this.length?a=1:(b=this.a[0]|0,a=b===a?0:b<a?-1:1);0!==this.c&&(a=-a);return a};c.prototype.N=function(a){if(0!==this.c&&0===a.c)return-1;if(0===this.c&&0!==a.c)return 1;a=this.Ja(a);return 0!==this.c?-a:a};c.prototype.Ja=function(a){if(this.length>a.length)return 1;if(this.length<a.length)return-1;for(var b=0,c=
this.length-1;0<=c;c--){var d=this.a[c]|0,e=a.a[c]|0;if(d!==e){d<e?b=-1:d>e&&(b=1);break}}return b}})(void 0,H);H.Qa=new H.M(0);H.ONE=new H.M(1);H.Pa=new H.M(4294967296);function J(a,b,c){this.h=a|0;this.f=b|0;this.l=!!c}var Aa={},Ba={};function Ca(a,b){return b?0<=(a>>>=0)&&256>a:-128<=(a|=0)&&128>a}function K(a,b){var c,d;if(b){if(d=Ca(a>>>=0,!0))if(c=Ba[a])return c;c=new J(a,0>(a|0)?-1:0,!0);d&&(Ba[a]=c)}else{if(d=Ca(a|=0,!1))if(c=Aa[a])return c;c=new J(a,0>a?-1:0,!1);d&&(Aa[a]=c)}return c}
function M(a,b){if(isNaN(a)||!isFinite(a))return b?Da:N;if(b){if(0>a)return Da;if(a>=Ea)return Fa}else{if(a<=-Ga)return P;if(a+1>=Ga)return Ha}return 0>a?M(-a,b).m():new J(a%Q|0,a/Q|0,b)}var Ia=Math.pow,Q=4294967296,Ea=Q*Q,Ga=Ea/2,Ja=K(16777216),N=K(0),Da=K(0,!0),S=K(1);K(1,!0);var Ka=K(-1),Ha=new J(-1,2147483647,!1),Fa=new J(-1,-1,!0),P=new J(0,-2147483648,!1),U=J.prototype;U.Ma=function(){return this.l?this.h>>>0:this.h};
U.S=function(){return this.l?(this.f>>>0)*Q+(this.h>>>0):this.f*Q+(this.h>>>0)};U.L=function(){return 0===this.f&&0===this.h};U.F=function(){return!this.l&&0>this.f};U.V=function(){return 1===(this.h&1)};U.w=function(a){return this.l!==a.l&&1===this.f>>>31&&1===a.f>>>31?!1:this.f===a.f&&this.h===a.h};U.Ta=function(a){return!this.w(a)};U.ha=function(){return 0>this.O(Ja)};U.Sa=function(a){return 0>=this.O(a)};U.sa=function(a){return 0<this.O(a)};U.ta=function(a){return 0<=this.O(a)};
U.$=function(a){if(this.w(a))return 0;var b=this.F(),c=a.F();return b&&!c?-1:!b&&c?1:this.l?a.f>>>0>this.f>>>0||a.f===this.f&&a.h>>>0>this.h>>>0?-1:1:this.sub(a).F()?-1:1};U.O=U.$;U.Ba=function(){return!this.l&&this.w(P)?P:this.Ea().add(S)};U.m=U.Ba;
U.add=function(a){var b=this.f>>>16,c=this.f&65535,d=this.h>>>16,f=a.f>>>16,e=a.f&65535,h=a.h>>>16,n;n=0+((this.h&65535)+(a.h&65535));a=0+(n>>>16);a+=d+h;d=0+(a>>>16);d+=c+e;c=0+(d>>>16);c=c+(b+f)&65535;return new J((a&65535)<<16|n&65535,c<<16|d&65535,this.l)};U.Fa=function(a){return this.add(a.m())};U.sub=U.Fa;
U.multiply=function(a){if(this.L()||a.L())return N;if(this.w(P))return a.V()?P:N;if(a.w(P))return this.V()?P:N;if(this.F())return a.F()?this.m().H(a.m()):this.m().H(a).m();if(a.F())return this.H(a.m()).m();if(this.ha()&&a.ha())return M(this.S()*a.S(),this.l);var b=this.f>>>16,c=this.f&65535,d=this.h>>>16,f=this.h&65535,e=a.f>>>16,h=a.f&65535,n=a.h>>>16;a=a.h&65535;var w,z,I,R;R=0+f*a;I=0+(R>>>16);I+=d*a;z=0+(I>>>16);I=(I&65535)+f*n;z+=I>>>16;I&=65535;z+=c*a;w=0+(z>>>16);z=(z&65535)+d*n;w+=z>>>16;
z&=65535;z+=f*h;w+=z>>>16;z&=65535;w=w+(b*a+c*n+d*h+f*e)&65535;return new J(I<<16|R&65535,w<<16|z,this.l)};U.H=U.multiply;
U.va=function(a){if(a.L())throw Error("division by zero");if(this.L())return this.l?Da:N;var b,c,d;if(this.w(P)){if(a.w(S)||a.w(Ka))return P;if(a.w(P))return S;b=this.Ia().s(a).Ha();if(b.w(N))return a.F()?S:Ka;c=this.sub(a.H(b));return d=b.add(c.s(a))}if(a.w(P))return this.l?Da:N;if(this.F())return a.F()?this.m().s(a.m()):this.m().s(a).m();if(a.F())return this.s(a.m()).m();d=N;for(c=this;c.ta(a);){b=Math.max(1,Math.floor(c.S()/a.S()));for(var f=Math.ceil(Math.log(b)/Math.LN2),f=48>=f?1:Ia(2,f-48),
e=M(b),h=e.H(a);h.F()||h.sa(c);)b-=f,e=M(b,this.l),h=e.H(a);e.L()&&(e=S);d=d.add(e);c=c.sub(h)}return d};U.s=U.va;U.Aa=function(a){return this.sub(this.s(a).H(a))};U.C=U.Aa;U.Ea=function(){return new J(~this.h,~this.f,this.l)};U.ua=function(a){return new J(this.h&a.h,this.f&a.f,this.l)};U.Ca=function(a){return new J(this.h|a.h,this.f|a.f,this.l)};U.Ga=function(a){return new J(this.h^a.h,this.f^a.f,this.l)};
U.Ha=function(){var a=1;return 0===(a&=63)?this:32>a?new J(this.h<<a,this.f<<a|this.h>>>32-a,this.l):new J(0,this.h<<a-32,this.l)};U.Ia=function(){var a=1;return 0===(a&=63)?this:32>a?new J(this.h>>>a|this.f<<32-a,this.f>>a,this.l):new J(this.f>>a-32,0<=this.f?0:-1,this.l)};U.La=function(a){a&=63;if(0===a)return this;var b=this.f;return 32>a?new J(this.h>>>a|b<<32-a,b>>>a,this.l):32===a?new J(b,0,this.l):new J(b>>>a-32,0,this.l)};U.Na=function(){return this.l?new J(this.h,this.f,!1):this};
U.Oa=function(){return this.l?this:new J(this.h,this.f,!0)};function La(a){return K(a,!0)}
function Ma(a,b){var c=a[0],d=a[1],f=a[2],e=a[3],c=V(c,d,f,e,b[0],7,-680876936),e=V(e,c,d,f,b[1],12,-389564586),f=V(f,e,c,d,b[2],17,606105819),d=V(d,f,e,c,b[3],22,-1044525330),c=V(c,d,f,e,b[4],7,-176418897),e=V(e,c,d,f,b[5],12,1200080426),f=V(f,e,c,d,b[6],17,-1473231341),d=V(d,f,e,c,b[7],22,-45705983),c=V(c,d,f,e,b[8],7,1770035416),e=V(e,c,d,f,b[9],12,-1958414417),f=V(f,e,c,d,b[10],17,-42063),d=V(d,f,e,c,b[11],22,-1990404162),c=V(c,d,f,e,b[12],7,1804603682),e=V(e,c,d,f,b[13],12,-40341101),f=V(f,e,
c,d,b[14],17,-1502002290),d=V(d,f,e,c,b[15],22,1236535329),c=W(c,d,f,e,b[1],5,-165796510),e=W(e,c,d,f,b[6],9,-1069501632),f=W(f,e,c,d,b[11],14,643717713),d=W(d,f,e,c,b[0],20,-373897302),c=W(c,d,f,e,b[5],5,-701558691),e=W(e,c,d,f,b[10],9,38016083),f=W(f,e,c,d,b[15],14,-660478335),d=W(d,f,e,c,b[4],20,-405537848),c=W(c,d,f,e,b[9],5,568446438),e=W(e,c,d,f,b[14],9,-1019803690),f=W(f,e,c,d,b[3],14,-187363961),d=W(d,f,e,c,b[8],20,1163531501),c=W(c,d,f,e,b[13],5,-1444681467),e=W(e,c,d,f,b[2],9,-51403784),
f=W(f,e,c,d,b[7],14,1735328473),d=W(d,f,e,c,b[12],20,-1926607734),c=X(d^f^e,c,d,b[5],4,-378558),e=X(c^d^f,e,c,b[8],11,-2022574463),f=X(e^c^d,f,e,b[11],16,1839030562),d=X(f^e^c,d,f,b[14],23,-35309556),c=X(d^f^e,c,d,b[1],4,-1530992060),e=X(c^d^f,e,c,b[4],11,1272893353),f=X(e^c^d,f,e,b[7],16,-155497632),d=X(f^e^c,d,f,b[10],23,-1094730640),c=X(d^f^e,c,d,b[13],4,681279174),e=X(c^d^f,e,c,b[0],11,-358537222),f=X(e^c^d,f,e,b[3],16,-722521979),d=X(f^e^c,d,f,b[6],23,76029189),c=X(d^f^e,c,d,b[9],4,-640364487),
e=X(c^d^f,e,c,b[12],11,-421815835),f=X(e^c^d,f,e,b[15],16,530742520),d=X(f^e^c,d,f,b[2],23,-995338651),c=Y(c,d,f,e,b[0],6,-198630844),e=Y(e,c,d,f,b[7],10,1126891415),f=Y(f,e,c,d,b[14],15,-1416354905),d=Y(d,f,e,c,b[5],21,-57434055),c=Y(c,d,f,e,b[12],6,1700485571),e=Y(e,c,d,f,b[3],10,-1894986606),f=Y(f,e,c,d,b[10],15,-1051523),d=Y(d,f,e,c,b[1],21,-2054922799),c=Y(c,d,f,e,b[8],6,1873313359),e=Y(e,c,d,f,b[15],10,-30611744),f=Y(f,e,c,d,b[6],15,-1560198380),d=Y(d,f,e,c,b[13],21,1309151649),c=Y(c,d,f,e,
b[4],6,-145523070),e=Y(e,c,d,f,b[11],10,-1120210379),f=Y(f,e,c,d,b[2],15,718787259),d=Y(d,f,e,c,b[9],21,-343485551);a[0]=c+a[0]&4294967295;a[1]=d+a[1]&4294967295;a[2]=f+a[2]&4294967295;a[3]=e+a[3]&4294967295}function X(a,b,c,d,f,e){b=(b+a&4294967295)+(d+e&4294967295)&4294967295;return(b<<f|b>>>32-f)+c&4294967295}function V(a,b,c,d,f,e,h){return X(b&c|~b&d,a,b,f,e,h)}function W(a,b,c,d,f,e,h){return X(b&d|c&~d,a,b,f,e,h)}function Y(a,b,c,d,f,e,h){return X(c^(b|~d),a,b,f,e,h)}
function Na(a,b){var c=a.v.w8,d=b,f=[1732584193,-271733879,-1732584194,271733878],e;for(e=64;e<=b;e+=64){for(var h=c.subarray(e-64,e),n=[],w=void 0,w=0;64>w;w+=4)n[w>>2]=h[w]+(h[w+1]<<8)+(h[w+2]<<16)+(h[w+3]<<24);Ma(f,n)}c=c.subarray(e-64);b=b<e-64?0:b-(e-64);h=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<b;e++)h[e>>2]|=c[e]<<(e%4<<3);h[e>>2]|=128<<(e%4<<3);if(55<e)for(Ma(f,h),e=0;16>e;e++)h[e]=0;h[14]=8*d;Ma(f,h);return f}window.md51=Na;var Oa="0123456789abcdef".split("");
window.md5=function(a,b){for(var c=Na(a,b),d=0;d<c.length;d++){for(var f=c[d],e="",h=0;4>h;h++)e+=Oa[f>>8*h+4&15]+Oa[f>>8*h&15];c[d]=e}return c.join("")};window.newByteArr=function(a){var b=8-a%8;8>b&&(a+=b);b={};a=new ArrayBuffer(a);var c={};c.i8=new Int8Array(a);c.i16=new Int16Array(a);c.i32=new Int32Array(a);c.w8=new Uint8Array(a);c.w16=new Uint16Array(a);c.w32=new Uint32Array(a);c.f32=new Float32Array(a);c.f64=new Float64Array(a);b.b=a;b.v=c;b.off=0;return b};
function Pa(a){var b=v(Qa);return a===b}function Ra(a){return a instanceof Function&&2===a.length?function(){var b=a.apply(null,arguments);if(b instanceof m){if(b.j!==u){var c=b.j;b.j=u;return b.x=c()}return b.x}for(;b instanceof p;)b=b.j();return v(b)}:function(){var b=Array.prototype.slice.call(arguments);b.push(0);return v(x(fa(a,b)))}}function na(a,b,c){a=x(y(a,c));x(y(b,c));return a}function la(a,b,c){var d=x(y(a,c)),f=x(y(b,c));return new m(function(){return x(y(d,f))})}
function ja(a,b,c){x(y(b,c));return a}function ia(a,b,c){var d=x(y(b,c));return new m(function(){return x(y(a,d))})}function ka(a,b){return a}function ma(a,b,c){x(y(a,c));return 19<D?new p(function(){return y(b,c)}):(++D,y(b,c))}var Sa=new m(function(){var a=La(new J(4053623282,1685460941,!0)),b=La(new J(3693590983,2507416641,!0));return new k(a,b,new k(a,b,new m(function(){return F("base")}),new m(function(){return F("GHC.IO.Exception")}),new m(function(){return F("IOException")})),l,l)});
function Ta(a){return v(Sa)}var Ua=new m(function(){return F(": ")}),Va=new m(function(){return F(")")}),Wa=new m(function(){return F(" (")});function Z(a,b){var c=v(a);return 0==c.o?v(b):new g(1,c.g,new m(function(){return Z(c.i,b)}))}
var Xa=new m(function(){return F("interrupted")}),Ya=new m(function(){return F("system error")}),Za=new m(function(){return F("unsatisified constraints")}),$a=new m(function(){return F("user error")}),ab=new m(function(){return F("permission denied")}),bb=new m(function(){return F("illegal operation")}),cb=new m(function(){return F("end of file")}),db=new m(function(){return F("resource exhausted")}),eb=new m(function(){return F("resource busy")}),gb=new m(function(){return F("does not exist")}),
hb=new m(function(){return F("already exists")}),ib=new m(function(){return F("resource vanished")}),jb=new m(function(){return F("timeout")}),kb=new m(function(){return F("unsupported operation")}),lb=new m(function(){return F("hardware fault")}),mb=new m(function(){return F("inappropriate type")}),nb=new m(function(){return F("invalid argument")}),ob=new m(function(){return F("failed")}),pb=new m(function(){return F("protocol error")});
function qb(a,b){switch(v(a)){case 0:return Z(hb,b);case 1:return Z(gb,b);case 2:return Z(eb,b);case 3:return Z(db,b);case 4:return Z(cb,b);case 5:return Z(bb,b);case 6:return Z(ab,b);case 7:return Z($a,b);case 8:return Z(Za,b);case 9:return Z(Ya,b);case 10:return Z(pb,b);case 11:return Z(ob,b);case 12:return Z(nb,b);case 13:return Z(mb,b);case 14:return Z(lb,b);case 15:return Z(kb,b);case 16:return Z(jb,b);case 17:return Z(ib,b);default:return Z(Xa,b)}}
var rb=new m(function(){return F("}")}),sb=new m(function(){return F("{handle: ")});
function tb(a,b,c,d,f,e){var h=new m(function(){var a=new m(function(){return qb(b,new m(function(){var a=v(d);return a.o?Z(Wa,new m(function(){return Z(a,new m(function(){return Z(Va,e)},1))},1)):v(e)},1))}),f=v(c);return f.o?Z(f,new m(function(){return Z(Ua,a)},1)):v(a)});f=v(f);if(f.o)return Z(f.g,new m(function(){return Z(Ua,h)},1));a=v(a);if(a.o){var n=v(a.g);return Z(sb,new m(function(){return Z(n.g,new m(function(){return Z(rb,new m(function(){return Z(Ua,h)},1))},1))},1))}return v(h)}
function ub(a){a=v(a);return tb(a.g,a.i,a.G,a.d,a.j,l)}function vb(a,b){var c=v(a);return tb(c.g,c.i,c.G,c.d,c.j,b)}function wb(a,b){var c=v(a);return c.o?new g(1,91,new m(function(){return x(C(vb,c.g,new m(function(){function a(c){var e=v(c);return e.o?new g(1,44,new m(function(){return x(C(vb,e.g,new m(function(){return a(e.i)})))})):v(new g(1,93,b))}return a(c.i)})))})):ta("[]",b)}
var xb=new m(function(){return new k(Ta,new ba(function(a,b,c){a=v(b);return tb(a.g,a.i,a.G,a.d,a.j,c)},ub,function(a,b){return wb(a,b)}),function(a){return new g(0,xb,a)},function(a){a=v(a);var b=v(v(a.g).g);a=a.i;var b=x(y(b,G)),c=x(y(Ta,G));return b.g.w(c.g)?b.i.w(c.i)?new aa(a):l:l},ub)}),yb=new m(function(){return v(xb)});function zb(a){return v(v(a).G)}function Ab(a){return new ca(a)}function Bb(a,b){return sa(new m(function(){return x(C(zb,yb,new m(function(){return x(y(Ab,a))})))}))}
function Cb(a,b){return Bb(a,b)}function pa(a){return 19<D?new p(function(){return y(Cb,a)}):(++D,y(Cb,a))}function oa(a,b,c){var d=x(y(a,c));return 19<D?new p(function(){return C(b,d,c)}):(++D,C(b,d,c))}function qa(a){return v(a)}function Db(a){a=v(a);var b=v(a.g);return new g(0,v(a.i)+.18525845*b,b*b+-1.1336243)}var Qa=new m(function(){var a=x(y(function(a){return null},G));return v(a)});function Eb(a){return v(v(a).i)}
function ha(a,b){return 19<D?new p(function(){return C(Eb,a,function(a){a=v(b);a=document.getElementById(a);return 0==v(Pa(a))?new aa(a):l})}):(++D,C(Eb,a,function(a){a=v(b);a=document.getElementById(a);return 0==v(Pa(a))?new aa(a):l}))}function Fb(a,b,c){b.beginPath();x(C(a,b,c));b.fill();return 0}function Gb(a,b,c){b.save();var d=v(300),f=v(250);b.translate(d,f);x(C(a,b,c));b.restore()}
var wa=new m(function(){for(var a="",b=v(l);1==b.o;b=v(b.i))a+=String.fromCharCode(v(b.g));return a}),Hb=new g(1,")",l);
function Ib(a){var b=v(a);if(b.o)return a=va(new g(1,"rgba(",new g(1,new m(function(){return String(b.g)}),new g(1,",",new g(1,new m(function(){return String(b.i)}),new g(1,",",new g(1,new m(function(){return String(b.G)}),new g(1,",",new g(1,new m(function(){return String(b.d)}),Hb))))))))),v(a);a=va(new g(1,"rgb(",new g(1,new m(function(){return String(b.g)}),new g(1,",",new g(1,new m(function(){return String(b.i)}),new g(1,",",new g(1,new m(function(){return String(b.G)}),Hb)))))));return v(a)}
function Jb(a){var b=Kb,c=new m(function(){return Ib(b)});return function(b,f){var e=v(b),h=e.fillStyle.toString(),n=e.strokeStyle.toString(),w=v(c);e.fillStyle=w;e.strokeStyle=w;x(C(a,e,f));e.fillStyle=String(h);e.strokeStyle=String(n);return 0}}
function Lb(a,b,c){c=v(a);a=v(c.g);c=v(c.i);var d=a+1,f=c+1;a:{a=v(new g(1,new g(0,a,c),new g(1,new g(0,d,c),new g(1,new g(0,d,f),new g(1,new g(0,a,f),new g(1,new g(0,a,c),l))))));if(a.o&&(c=v(a.g),b=v(b),d=v(c.g),c=v(c.i),b.moveTo(d,c),a=v(a.i),a.o)){d=v(a.g);c=v(d.g);d=v(d.i);b.lineTo(c,d);b:for(a=a.i;;)if(a=v(a),a.o)d=v(a.g),c=v(d.g),d=v(d.i),b.lineTo(c,d),a=a.i;else break b;b=0;break a}b=0}return b}var Kb=new ba(0,0,255);
function Mb(a,b,c,d,f,e){for(;;){var h=function(e,h,z,I,R,fb){return(R=v(R))?(Gb(new m(function(){function a(c,d){return 19<D?new p(function(){return Lb(b,c,d)}):(++D,Lb(b,c,d))}var b=new m(function(){var a=v(I),b=v(a.g),a=v(a.i);return new g(0,200*b-0*a,0*b+200*a)});return Jb(function(b,c){return Fb(a,v(b),c)})},1),e,fb),a=e,b=h,c=z,d=new m(function(){return x(y(z,I))}),f=R-1|0,ea):I}(a,b,c,d,f,e);if(h!=ea)return h}}
function Nb(a,b,c,d,f){if(d=v(d)){a=v(a);var e=a.g;Gb(new m(function(){function a(c,d){return 19<D?new p(function(){return Lb(b,c,d)}):(++D,Lb(b,c,d))}var b=new m(function(){var a=v(c),b=v(a.g),a=v(a.i);return new g(0,200*b-0*a,0*b+200*a)});return Jb(function(b,c){return Fb(a,v(b),c)})},1),e,f);return Mb(e,a.i,b,new m(function(){return x(y(b,c))}),d-1|0,f)}return c}var Ob=new m(function(){return window.requestAnimationFrame});
function Pb(a,b,c,d,f,e){function h(c,d,e){c=Ra(function(c,f){var h=x(y(c,f));Pb(a,b,d,e,v(h),f);return Qa});v(Ob)(c)}d=f-d;var n=1E3*d/1E3,w=n&4294967295;n>=w||(w=w-1|0);c=Nb(a,b,c,w,e);h(e,c,f-(d-1E3*w/1E3))}function Qb(a,b){var c=new g(0,.1,.3),d=Ra(function(b,d){var h=new m(function(){var a=x(y(b,d));return v(a)}),n=Ra(function(b,d){var e=x(y(b,d));Pb(a,Db,c,v(h),v(e),d);return Qa});v(Ob)(n);return Qa});return 19<D?new p(function(){return v(Ob)(d)}):(++D,v(Ob)(d))}var Rb=new m(function(){return F("Pattern match failure in do expression at src/Main.hs:9:5-12")});
function Sb(a){var b=x(ga(a)),b=v(b);if(b.o){var c=v(b.g);if(c.getContext){var d=c.getContext("2d");return 19<D?new p(function(){return Qb(new g(0,d,c),a)}):(++D,Qb(new g(0,d,c),a))}}return Bb(Rb,a)}function Tb(a){return 19<D?new p(function(){return Sb(a)}):(++D,Sb(a))}window.onload=function(){x(fa(Tb,[0]))};