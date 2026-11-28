import{m as p,g as r}from"./layout-D8BAdoJ3.js";p();const u=r(),e=document.querySelector("[data-contact-form]"),o=new URLSearchParams(window.location.search).get("topic"),n=e==null?void 0:e.querySelector('[name="topic"]');o&&n&&[...n.options].find(t=>t.value===o)&&(n.value=o);e==null||e.addEventListener("submit",c=>{c.preventDefault();const t=new FormData(e),s=t.get("name"),i=t.get("email"),a=t.get("topic"),m=t.get("message"),l=encodeURIComponent(`Website Contact: ${a}`),d=encodeURIComponent(`Name: ${s}
Email: ${i}
Topic: ${a}

${m}`);window.location.href=`mailto:${u.email}?subject=${l}&body=${d}`});
