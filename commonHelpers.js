(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function i(r){const o="43770343-d10c460472ef62dd19f425fcf",n="https://pixabay.com/api/",c=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${n}?${c}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{console.log(e)}).catch(e=>console.log(e))}const u=document.querySelector(".form-search-img"),a=document.querySelector(".search-input");document.querySelector(".search-btn");document.querySelector(".section-results");function l(r){r.preventDefault(),i(a.value),r.target.reset()}u.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers.js.map