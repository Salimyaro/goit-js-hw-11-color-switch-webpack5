(self.webpackChunk=self.webpackChunk||[]).push([[179],{288:()=>{"use strict";const t={start:document.querySelector('[data-action="start"]'),stop:document.querySelector('[data-action="stop"]'),body:document.querySelector("body")},e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];var n=null,o=!1;function a(){t.body.style.backgroundColor=e[r(0,e.length-1)]}function c(){t.start.disabled=!!o}var r=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},u=function(){o=!0,c(),a(),n=setInterval((function(){a()}),1e3)},s=function(){o=!1,c(),clearInterval(n)};t.start.addEventListener("click",u),t.stop.addEventListener("click",s)}},0,[[288,666]]]);
//# sourceMappingURL=main.efd9928b2670b6c9a626.js.map