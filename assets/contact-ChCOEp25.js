import{m as d,g as l}from"./layout-D8VIfDvx.js";d();const g=l(),e=document.querySelector("[data-contact-form]");e==null||e.addEventListener("submit",n=>{n.preventDefault();const t=new FormData(e),a=t.get("name"),c=t.get("email"),o=t.get("topic"),s=t.get("message"),m=encodeURIComponent(`Website Contact: ${o}`),i=encodeURIComponent(`Name: ${a}
Email: ${c}
Topic: ${o}

${s}`);window.location.href=`mailto:${g.email}?subject=${m}&body=${i}`});
