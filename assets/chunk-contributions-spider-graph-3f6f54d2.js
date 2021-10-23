System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(t){"use strict";var e;return{setters:[function(){},function(t){e=t.J}],execute:function(){function i(t,e){return t.length<e.length?-1:t.length>e.length?1:t.localeCompare(e)}function n(t,e){const i=t.getBoundingClientRect();return(e.getBoundingClientRect().width-i.width)/2}t("initializeOverviewGraphContainer",(async function(t){await e;const r=t.getAttribute("data-percentages"),o={percentages:JSON.parse(r)};!function(t,e){const r=t.querySelector(".js-activity-overview-graph");if(!r)return;const o=r.querySelector(".js-highlight-blob"),s=10,c=250,g=Math.floor(t.clientWidth),l=Math.max(g,c),u=l,h=r.querySelector(".js-highlight-label-top"),a=r.querySelector(".js-highlight-label-bottom"),d=r.querySelector(".js-highlight-label-right"),b=r.querySelector(".js-highlight-label-left"),S=r.querySelector(".js-highlight-percent-top"),p=r.querySelector(".js-highlight-percent-bottom"),y=r.querySelector(".js-highlight-percent-right"),A=r.querySelector(".js-highlight-percent-left"),x=r.querySelector(".js-highlight-x-axis"),f=r.querySelector(".js-highlight-y-axis"),j=r.querySelector(".js-highlight-top-ellipse"),m=r.querySelector(".js-highlight-right-ellipse"),q=r.querySelector(".js-highlight-bottom-ellipse"),C=r.querySelector(".js-highlight-left-ellipse"),L=t.querySelector(".js-activity-overview-graph-spinner"),M=r.querySelector("g");M.removeAttribute("transform"),r.classList.remove("d-none"),r.classList.add("d-block"),L.classList.remove("d-block"),L.classList.add("d-none"),h.innerHTML="",d.innerHTML="",a.innerHTML="",b.innerHTML="",S.innerHTML="&nbsp;",y.innerHTML="&nbsp;",p.innerHTML="&nbsp;",A.innerHTML="&nbsp;";const v=Object.keys(e.percentages).sort(i),[T,w]=v.slice(0,2).sort(),[H,B]=v.slice(2,4).sort(),R=e.percentages[H],$=e.percentages[w],k=e.percentages[B],N=e.percentages[T];let O=null;const z=(t,i)=>{const n=e.percentages[t];if(n>0)return O=i,n+"%"},J=z(H,S);J&&(S.textContent=J);const G=z(w,y);G&&(y.textContent=G);const W=z(B,p);W&&(p.textContent=W);const D=z(T,A);D&&(A.textContent=D);const E=l/2,F=l/2;h.appendChild(document.createTextNode(H)),h.setAttribute("dx",E.toString()),a.appendChild(document.createTextNode(B)),a.setAttribute("dx",F.toString()),S.setAttribute("dx",E.toString()),p.setAttribute("dx",F.toString());const I=h.getBoundingClientRect().height;let K=0;O&&(K=O.getBoundingClientRect().height);let P=u/2+I/4,Q=u/2+I/4;N>0&&(P=P+K/2+s/4);$>0&&(Q=Q+K/2+s/4);b.appendChild(document.createTextNode(T)),b.setAttribute("dy",P.toString()),d.appendChild(document.createTextNode(w)),d.setAttribute("dy",Q.toString());const U=P-I,V=Q-I;A.setAttribute("dy",U.toString()),y.setAttribute("dy",V.toString());let X=R/100,Y=k/100,Z=N/100,_=$/100;const tt=0,et=1,it=Math.max(X,Y,Z,_),nt=t=>(et-tt)*t/it+tt;X=nt(X),Y=nt(Y),Z=nt(Z),_=nt(_);const rt=function(t){let e=0;for(const i of t){const t=i.getBoundingClientRect();t.width>e&&(e=t.width)}return e}([b,d,h,a])+s,ot=4,st=Math.max(rt,I),ct=l/2,gt=u/2,lt=ct,ut=st,ht=ct,at=u-st,dt=st,bt=gt,St=l-st,pt=gt,yt=ct-dt,At=gt-ut;let xt=ut+(1-X)*At,ft=Math.max(at-(1-Y)*At,gt),jt=dt+(1-Z)*yt,mt=St-(1-_)*yt;x.setAttribute("x1",dt.toString()),x.setAttribute("y1",gt.toString()),x.setAttribute("x2",St.toString()),x.setAttribute("y2",gt.toString()),f.setAttribute("x1",ct.toString()),f.setAttribute("y1",ut.toString()),f.setAttribute("x2",ct.toString()),f.setAttribute("y2",at.toString()),xt+ot<gt&&(xt+=ot);ft-ot>gt&&(ft-=ot);jt+ot<ct&&(jt+=ot);mt-ot>ct&&(mt-=ot);const qt=ut-s,Ct=St+s;let Lt=at+s+.8*s;k>0&&(Lt+=K);const Mt=dt-(s+.2*s);h.setAttribute("dy",qt.toString()),d.setAttribute("dx",Ct.toString()),a.setAttribute("dy",Lt.toString()),b.setAttribute("dx",Mt.toString());const vt=Mt-n(A,b),Tt=Ct+n(y,d);A.setAttribute("dx",vt.toString()),y.setAttribute("dx",Tt.toString());const wt=qt-I,Ht=Lt-I;S.setAttribute("dy",wt.toString()),p.setAttribute("dy",Ht.toString());const Bt=2;0===R?j.classList.add("d-none"):(j.setAttribute("cx",lt.toString()),j.setAttribute("cy",(xt-Bt).toString()));0===$?m.classList.add("d-none"):(m.setAttribute("cx",(mt+Bt).toString()),m.setAttribute("cy",pt.toString()));0===k?q.classList.add("d-none"):(q.setAttribute("cx",ht.toString()),q.setAttribute("cy",(ft+Bt).toString()));0===N?C.classList.add("d-none"):(C.setAttribute("cx",(jt-Bt).toString()),C.setAttribute("cy",bt.toString()));const Rt=M.getBoundingClientRect(),$t=r.getBoundingClientRect(),kt=0-(Rt.top-$t.top),Nt=0-(Rt.left-$t.left);M.setAttribute("transform",`translate(${Nt}, ${kt})`);const Ot=Math.ceil(Rt.width),zt=Math.ceil(Rt.height);r.setAttribute("width",Ot.toString()),r.setAttribute("height",zt.toString());const Jt=[[mt,pt],[ht,ft],[jt,bt]].map((t=>`L${t[0]},${t[1]}`)).join(" "),Gt=`M${lt},${xt} ${Jt} z`;R+$+k+N!==0&&o.setAttribute("d",Gt)}(t,o)}))}}}));
//# sourceMappingURL=chunk-contributions-spider-graph-93db0e82.js.map