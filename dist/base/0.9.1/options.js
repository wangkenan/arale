define("#base/0.9.1/options",[],function(a,b){function d(a,b){var c,e;for(c in b)e=b[c],typeof e=="object"&&(e=d(a[c]||{},e)),a[c]=e;return a}function e(a){return a.charAt(2).toLowerCase()+a.substring(3)}var c=/^on[A-Z]/;b.setOptions=function(a){if(this.hasOwnProperty("options"))return;var b=[a],f=this.constructor.prototype;while(f)f.options&&b.unshift(f.options),f=f.constructor.superclass;this.options={};for(var g=0,h=b.length;g<h;g++)this.options=d(this.options,b[g]);if(this.on){a=this.options;for(var i in a){var j=a[i];typeof j=="function"&&c.test(i)&&(this.on(e(i),j),delete a[i])}}return this}});