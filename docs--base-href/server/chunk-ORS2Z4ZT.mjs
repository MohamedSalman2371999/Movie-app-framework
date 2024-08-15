import './polyfills.server.mjs';
import{A as w,B as S,C as k,D as E,G as F,M as I,a as v,b as d,c as m,d as u,e as l,f as b,g as C,h,i as x,j as n,k as o,l as a,m as s,n as M,o as y,p as O,q as c,x as P,z as _}from"./chunk-KU72EDUK.mjs";var D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-nav-bar"]],standalone:!0,features:[c],decls:21,vars:0,consts:[[1,"navbar","navbar-expand-lg","sticky-top"],[1,"container"],[1,"AspanContainer","pt-2"],[1,"pt-2"],["src","./assets/images/cinema_1952174.png","alt","Logo","width","50","height","50",1,"d-inline-block","align-text-top"],[1,"d-inline-block","align-text-top","pt-2","ps-2","text-white","fw-bold"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],["aria-current","page",1,"nav-link","active","text-white","fw-bold"],[1,"fa-brands","fa-facebook-square"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-linkedin"]],template:function(i,f){i&1&&(n(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),a(4,"img",4),o(),n(5,"span",5),s(6,"IMove"),o()(),n(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),a(11,"i",10),o()(),n(12,"li",8)(13,"a",9),a(14,"i",11),o()(),n(15,"li",8)(16,"a",9),a(17,"i",12),o()(),n(18,"li",8)(19,"a",9),a(20,"i",13),o()()()()()())},styles:[".navbar[_ngcontent-%COMP%]{background-color:#2c3e50!important;color:#fff}i[_ngcontent-%COMP%]{font-size:18px;cursor:pointer}@media (max-width: 768px){.AspanContainer[_ngcontent-%COMP%]{margin:auto}}"]});let e=t;return e})();var H=(()=>{let t=class t{constructor(){this._HttpClient=d(_)}getMovie(){return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function R(e,t){if(e&1&&(n(0,"div",2)(1,"div",3),a(2,"img",4),n(3,"div",5)(4,"div",6)(5,"h2"),s(6),o(),n(7,"p"),s(8),o(),n(9,"p"),s(10),o()()()()()),e&2){let p=t.$implicit;l(2),b("src","https://image.tmdb.org/t/p/w500"+p.poster_path,u)("alt",p.title),l(4),O("",p.title," ",p.name,""),l(2),M(p.overview.split(" ",10).join(" ")),l(2),y("Rate : ",p.vote_average,"")}}var j=(()=>{let t=class t{constructor(){this.moviesService=d(H),this.movieList=[]}ngOnInit(){this.moviesService.getMovie().subscribe({next:r=>{this.movieList=r.results,console.log(this.movieList)},error:r=>{console.log(r)}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-home"]],standalone:!0,features:[c],decls:4,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-3"],[1,"bg","py-3"],[3,"src","alt"],[1,"overlay"],[1,"textContainer","bg-dark"]],template:function(i,f){i&1&&(n(0,"div",0)(1,"div",1),h(2,R,11,6,"div",2,C),o()()),i&2&&(l(2),x(f.movieList))},styles:['*[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box;margin:0;padding:0}.bg[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]{transition:.3s all;border-radius:3px}.bg[_ngcontent-%COMP%]{float:left;max-width:100%;position:relative;margin:.5%}.bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;margin-bottom:-4px}.bg[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;width:100%;color:#fff;opacity:0}.bg[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:700;margin-top:50%;font-family:"Droid Serif",serif}.bg[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Julius Sans One,sans-serif}.bg[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.bg[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-filter:blur(2px);filter:blur(2px)}.textContainer[_ngcontent-%COMP%]{width:95%;border-radius:8px;background-color:#212529a6!important;margin:auto}']});let e=t;return e})();var A=(()=>{let t=class t{constructor(){this.title="movieapp"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[c],decls:3,vars:0,consts:[[1,"divConatiner","bg-dark"]],template:function(i,f){i&1&&(n(0,"div",0),a(1,"app-nav-bar")(2,"app-home"),o())},dependencies:[D,j]});let e=t;return e})();var L=[];var T={providers:[I(L),E(),w(S())]};var B={providers:[F()]},z=P(T,B);var N=()=>k(A,z),ft=N;export{ft as a};
