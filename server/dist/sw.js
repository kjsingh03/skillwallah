if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const l=e=>n(e,o),f={module:{uri:o},exports:d,require:l};i[o]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/img1-CHimP7MH.png",revision:null},{url:"assets/img2-DkqjSMzI.png",revision:null},{url:"assets/index-Bpdtcrhg.css",revision:null},{url:"assets/index-Ciygyhob.js",revision:null},{url:"assets/logo-nobg-BQYkKjGw.png",revision:null},{url:"assets/smallLogo-DlAftWFI.png",revision:null},{url:"favicon.ico",revision:"6f603435d036c7a1616016e5bad8a2c7"},{url:"index.html",revision:"759e099d810f62156db2de1a9120f7b6"},{url:"pwa-192x192.png",revision:"9ef2558dd07a69db40dfba20d5a39069"},{url:"pwa-512x512.png",revision:"a9a92d834fe6053d4bb7c7df12e5a5eb"},{url:"pwa-64x64.png",revision:"8c24564fe1dabf2cfed0f8b2736eff4b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"6f603435d036c7a1616016e5bad8a2c7"},{url:"pwa-64x64.png",revision:"8c24564fe1dabf2cfed0f8b2736eff4b"},{url:"pwa-192x192.png",revision:"9ef2558dd07a69db40dfba20d5a39069"},{url:"pwa-512x512.png",revision:"a9a92d834fe6053d4bb7c7df12e5a5eb"},{url:"manifest.webmanifest",revision:"88df378267cef23f7c53b0eda0e6a85f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
