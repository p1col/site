import{d as A,e as d,b as R,j as I,i as L,c as g,a as f,w as b,k as w,g as r,t as Y,F,f as B,o as _,n as N,l as X}from"./index-Sbz-kYOK.js";const Q={class:"mine-config"},T=f("label",{for:"row",class:"mine-config__label"},"行：",-1),H=f("label",{for:"col",class:"mine-config__label"},"列：",-1),J=f("label",{for:"count",class:"mine-config__label"},"雷数量：",-1),K=["max"],W={class:"game-status"},Z={class:"mine-map"},ee=["onClick","onContextmenu"],te=A({__name:"MineSweeper",setup(ne){let c=d(!1),s=d({x:16,y:16,mines:40}),j=R(()=>s.value.x*s.value.y),m=new Set,t=d([]),x=d(s.value.mines),h=d(s.value.x*s.value.y),y=R(()=>!c.value&&h.value===s.value.mines);const O=e=>Math.floor(Math.random()*e),$=e=>e-1<0?e:e-1,q=(e,n)=>e+1===n?e:e+1;function M(e){if(e<=0)return;const n=O(s.value.x),i=O(s.value.y);m.has("".concat(n,"-").concat(i))?M(e):(m.add("".concat(n,"-").concat(i)),M(e-1))}function S(e,n,i){if(e===0&&n===0)return 0;let a=$(e),l=$(n),u=q(n,s.value.y),o=0;for(;a<=e;){let v=l;for(;a<e&&v<=u||v<n;)!i&&t.value[a][v].isMine&&o++,i&&!t.value[a][v].isMine&&t.value[a][v].mines++,v++;a++}return o}function U(){for(let e=0;e<s.value.x;e++)for(let n=0;n<s.value.y;n++){const i=m.has("".concat(e,"-").concat(n));t.value[e]||(t.value[e]=[]),t.value[e][n]={x:e,y:n,isMine:i,isFlag:!1,isOpen:!1,mines:S(e,n,i)}}}function k(){t.value&&(t.value.length=0,t.value=new Array(s.value.x)),m.size>0&&m.clear(),x.value=s.value.mines,h.value=s.value.x*s.value.y,M(s.value.mines),U(),c.value=!1}function z(){t.value.forEach(e=>e.forEach(n=>n.isOpen=!0))}I(()=>y.value,e=>{if(e&&x.value>0)for(const n of m){const[i,a]=n.split("-");t.value[+i][+a].isFlag=!0}});let p=[];const C=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]],V=(e,n)=>e>=0&&e<s.value.x&&n>=0&&n<s.value.y;function D(e,n){for(p.push({x:e,y:n});p.length>0;){const{x:i,y:a}=p[0];if(t.value[i][a].isOpen=!0,h.value--,t.value[i][a].isVisit=!0,p.shift(),t.value[i][a].mines===0)for(const l of C){let u=i+l[0],o=a+l[1];(V(u,o)?!(t.value[u][o].isOpen||t.value[u][o].isVisit||t.value[u][o].isFlag):!1)&&(t.value[u][o].isVisit=!0,p.push({x:u,y:o}))}}}function E(e){e.isFlag||e.isOpen&&e.mines===0||c.value||y.value||(e.isOpen?G(e):(e.isOpen=!0,e.isMine?(c.value=!0,e.isExplode=!0,z()):e.mines===0?D(e.x,e.y):h.value--))}function G(e){const n=[];let i=0;for(const a of C){let l=e.x+a[0],u=e.y+a[1];V(l,u)&&(t.value[l][u].isFlag?i++:t.value[l][u].isOpen||n.push({x:l,y:u}))}if(i===e.mines)for(;n.length>0;){const{x:a,y:l}=n.shift()||{};E(t.value[a][l])}}function P(e){if(!(c.value||y.value))return e.isFlag=!e.isFlag,x.value+=e.isFlag?-1:1,!1}return L(()=>{k()}),(e,n)=>(_(),g(F,null,[f("div",Q,[T,b(f("input",{id:"row",class:"mine-config__input",type:"number","onUpdate:modelValue":n[0]||(n[0]=i=>r(s).x=i)},null,512),[[w,r(s).x]]),H,b(f("input",{id:"col",class:"mine-config__input",type:"number","onUpdate:modelValue":n[1]||(n[1]=i=>r(s).y=i)},null,512),[[w,r(s).y]]),J,b(f("input",{id:"count",type:"number",class:"mine-config__input","onUpdate:modelValue":n[2]||(n[2]=i=>r(s).mines=i),max:r(j)},null,8,K),[[w,r(s).mines]]),f("button",{class:"mine-config__btn",onClick:k},"Play")]),f("div",W,Y(r(y)?"ψ(｀∇´)ψ 通关！":"ψ(._. )> 剩余标记数：".concat(r(x))),1),f("div",Z,[(_(!0),g(F,null,B(r(t),(i,a)=>(_(),g("div",{class:"mine-row",key:"row-".concat(a)},[(_(!0),g(F,null,B(i,(l,u)=>(_(),g("div",{class:N(["mine-cell",["color-".concat(l.mines),{"is-mine":l.isMine,"mine-cell--flag":l.isFlag,"mine-cell--open":l.isOpen,"mine-cell--explode":l.isExplode}]]),key:"cell-".concat(a,"-").concat(u),onClick:X(o=>E(l),["left"]),onContextmenu:X(o=>P(l),["prevent"])},Y(l.mines||""),43,ee))),128))]))),128))])],64))}});export{te as default};
