(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{307:function(t,e,n){"use strict";n.r(e);var r={props:{recette:Object},data:function(){return{portion_qty:this.recette.portion_qty,qty:this.recette.portion_qty,step:this.recette.portion_step}},methods:{changeQty(t){this.qty="add"==t?this.qty+this.step:this.qty-this.step},reset(){this.qty=this.recette.portion_qty}}},s=n(10),i=Object(s.a)(r,(function(){var t=this,e=t._self._c;return t.qty?e("div",[e("p",[e("em",[t._v("Ingrédients pour "+t._s(t.qty)+" "+t._s(this.recette.portion_type))])]),t._v(" "),e("ul",t._l(t.recette.ingredients,(function(n,r){return e("li",{key:r},[e("strong",[t._v(t._s(Math.round(n.qty*(t.qty/t.portion_qty)*100)/100))]),t._v(" "+t._s(n.unity)+"\n      "+t._s(n.name)+" "),e("em",[t._v(t._s(n.description))]),t._v(" ;\n    ")])})),0),t._v(" "),e("a",{on:{click:function(e){return t.changeQty("add")}}},[t._v("➕ "+t._s(this.recette.portion_step)+" "+t._s(this.recette.portion_type))]),e("br"),t._v(" "),t.qty>t.step?e("a",{on:{click:function(e){return t.changeQty("remove")}}},[t._v("➖ "+t._s(this.recette.portion_step)+" "+t._s(this.recette.portion_type)+" ")]):t._e(),e("br"),t._v(" "),e("em",[e("a",{on:{click:t.reset}},[t._v("🔙 "+t._s(this.recette.portion_qty)+" "+t._s(this.recette.portion_type))])]),e("br")]):t._e()}),[],!1,null,null,null);e.default=i.exports}}]);