YUI.add("state",function(B){var A=B.Lang;B.State=function(){this.data={};};B.State.prototype={add:function(C,D){B.each(D,function(F,E){if(!this.data[E]){this.data[E]={};}this.data[E][C]=F;},this);},remove:function(D,F){var E=this.data,C=function(G){if(E[G]&&(D in E[G])){delete E[G][D];}};if(A.isString(F)){C(F);}else{B.each(F||E,function(H,G){if(A.isString(G)){C(G);}else{C(H);}},this);}},get:function(C,D){var F=this.data;if(D){return F[D]&&F[D][C];}else{var E={};B.each(F,function(H,G){if(C in F[G]){E[G]=H[C];}},this);return E;}},list:function(C,F){var E={},D=this.data,G=!A.isUndefined(F);B.each(this,function(I,H){if(C&&H!==C){return ;}else{if(G&&I!==F){return ;}}E[H]=I;},this);return E;}};},"3.0.0");YUI.add("attribute",function(A){var G=A.Object,H=".",D="Change",I="get",C="set",F="value",J="readonly",B="validator";function E(N,P,K,L,Q,O){N=N+D;this.publish(N,{queuable:false});var M={type:N,prevVal:P,newVal:K,attrName:L,subAttrName:Q};if(O){A.mix(M,O);}this.fire(M);}A.Attribute=function(){this._conf=this._conf||new A.State();};A.Attribute.prototype={addAtt:function(K,L){this._conf.add(K,L);},remove:function(K){this._conf.remove(K);},get:function(M){var L=this._conf,O,K,N,P;if(M.indexOf(H)!==-1){O=M.split(H);M=O.shift();}K=L.get(M,I);N=L.get(M,F);P=(K)?K.call(this,N):N;return(O)?this._getSubValue(O,P):P;},set:function(L,O,K){var S=this._conf,Q,V,T,P,M,N,U,R;if(L.indexOf(H)!==-1){Q=L;V=L.split(H);L=V.shift();}if(S.get(L,J)){return this;}if(!S.get(L)){}N=this.get(L);if(V){O=this._setSubValue(V,A.clone(N),O);if(O===undefined){return this;}}T=S.get(L,C);if(T){M=T.call(this,O);if(M!==undefined){O=M;}}P=S.get(L,B);if(!P||P.call(this,O)){S.add(L,{value:O});if(V){E.call(this,Q,N,O,L,Q,K);}E.call(this,L,N,O,L,Q,K);}return this;},_getSubValue:function(M,N){var L=M.length,K;if(L>0){for(K=0;N!==undefined&&K<L;++K){N=N[M[K]];}}return N;},_setSubValue:function(N,P,M){var L=N.length-1,K,O;if(L>=0){O=P;for(K=0;O!==undefined&&K<L;++K){O=O[N[K]];}if(O!==undefined){O[N[K]]=M;}else{P=undefined;}}return P;},setAtts:function(L){for(var K in L){if(G.owns(L,K)){this.set(K,L[K]);}}},getAtts:function(L){var K={};if(L){K=A.clone(L);}else{A.each(this._conf.get(F),function(N,M){K[M]=N;});}return K;},_initAtts:function(K,N){if(K){var M,O,L,P=A.merge(K);L=this._splitAttrValues(N);for(M in P){if(G.owns(P,M)){O=P[M];this.addAtt(M,O);this._initAttValue(M,O,L);}}}},_splitAttrValues:function(N){var P={},O={},Q,K,M;for(var L in N){if(G.owns(N,L)){if(L.indexOf(H)!==-1){Q=L.split(H);K=Q.shift();M=O[K]=O[K]||[];M[M.length]={path:Q,value:N[L]};}else{P[L]=N[L];}}}return[P,O];},_initAttValue:function(P,N,S){var R=("value" in N),K=N.value,M,L,T,Q,O;if(S){if(G.owns(S[0],P)){R=true;K=S[0][P];}if(G.owns(S[1],P)){O=S[1][P];R=true;for(M=0,L=O.length;M<L;++M){T=O[M].path;Q=O[M].value;K=this._setSubValue(T,K,Q);}}}if(R){this.set(P,K);}}};A.augment(A.Attribute,A.EventTarget,null,null,{emitFacade:true});},"3.0.0",{requires:["state"]});