if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const u=e=>n(e,r),a={module:{uri:r},exports:o,require:u};s[r]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-BWs8VVrb.png",revision:null},{url:"assets/2-ksNWQIF-.png",revision:null},{url:"assets/3-hb8FIipH.png",revision:null},{url:"assets/4-Dkrhra3a.png",revision:null},{url:"assets/5-B8YzeWqe.png",revision:null},{url:"assets/7-C0wgOX0h.png",revision:null},{url:"assets/img1-CHimP7MH.png",revision:null},{url:"assets/img2-DkqjSMzI.png",revision:null},{url:"assets/index-DutvQy1U.css",revision:null},{url:"assets/index-Qd4trIUE.js",revision:null},{url:"assets/SkillwallahLogo--RErYy67.png",revision:null},{url:"assets/SkillwallahLogo-white-BktiUGKv.png",revision:null},{url:"assets/smallLogo-DlAftWFI.png",revision:null},{url:"index.html",revision:"617865e86919ef918a53a85a5743af76"},{url:"pwa-192x192.png",revision:"9ef2558dd07a69db40dfba20d5a39069"},{url:"pwa-512x512.png",revision:"a9a92d834fe6053d4bb7c7df12e5a5eb"},{url:"pwa-64x64.png",revision:"8c24564fe1dabf2cfed0f8b2736eff4b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-64x64.png",revision:"8c24564fe1dabf2cfed0f8b2736eff4b"},{url:"pwa-192x192.png",revision:"9ef2558dd07a69db40dfba20d5a39069"},{url:"pwa-512x512.png",revision:"a9a92d834fe6053d4bb7c7df12e5a5eb"},{url:"manifest.webmanifest",revision:"88df378267cef23f7c53b0eda0e6a85f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
