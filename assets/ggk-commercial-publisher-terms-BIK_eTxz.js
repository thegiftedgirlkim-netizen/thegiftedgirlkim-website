import{m as s,s as c}from"./layout-D8VIfDvx.js";import{s as n}from"./support-hub-LCD0Cl3t.js";const l="August 16, 2026",p="August 16, 2026",u="These Terms of Service apply only to GGK Commercial Publisher, an internal publishing tool operated by The Gifted Girl Kim LLC. They do not replace the website Terms for other apps, and they do not describe a public consumer service.",d=[{heading:"Who These Terms Cover",blocks:[{type:"p",text:"GGK Commercial Publisher is owned, developed, and operated by The Gifted Girl Kim LLC. It is an owner-operated tool used to prepare, approve, and publish The Gifted Girl's own media and commercials."},{type:"p",text:"It is not offered as a third-party YouTube publishing service. It does not provide public user accounts, creator onboarding, or subscriptions."}]},{heading:"What the Tool Currently Does",blocks:[{type:"p",text:"The operator can connect an authorized Google/YouTube account, approve a specific rendered commercial, and confirm a YouTube upload of that exact approved file. A private YouTube upload has been tested. Public or scheduled YouTube release is not treated as available unless YouTube's API project restrictions allow it."},{type:"p",text:"The tool also keeps local mock publishing and approval history for GGK's own commercials. Those local features do not require YouTube."}]},{heading:"YouTube API Services and YouTube Terms",blocks:[{type:"p",text:"GGK Commercial Publisher uses YouTube API Services, including Google OAuth 2.0 and YouTube Data API v3. By using GGK Commercial Publisher to connect a Google/YouTube account or upload to YouTube, the operator agrees to be bound by the YouTube Terms of Service."},{type:"a",text:"YouTube Terms of Service",href:"https://www.youtube.com/t/terms"},{type:"a",text:"YouTube API Services Terms of Service",href:"https://developers.google.com/youtube/terms/api-services-terms-of-service"},{type:"a",text:"YouTube API Services Developer Policies",href:"https://developers.google.com/youtube/terms/developer-policies"},{type:"p",text:"The operator is responsible for the commercial content uploaded through the tool and for complying with YouTube Community Guidelines and applicable law."}]},{heading:"Authorization, Disconnect, and Privacy",blocks:[{type:"p",text:"YouTube access is granted through Google OAuth. The operator may disconnect YouTube in GGK Commercial Publisher or revoke access in Google Account permissions. Disconnecting revokes Google authorization, deletes the local credential, and deletes Google/YouTube Authorized Data from local records as described in the Privacy Policy."},{type:"a",text:"GGK Commercial Publisher Privacy Policy",href:"/ggk-commercial-publisher-privacy.html"},{type:"a",text:"Google Privacy Policy",href:"https://www.google.com/policies/privacy"}]},{heading:"No Warranty",blocks:[{type:"p",text:"GGK Commercial Publisher is provided as-is for internal use, without warranties of any kind, to the fullest extent permitted by law. YouTube availability, quota, privacy restrictions, and API project verification are controlled by Google/YouTube."}]},{heading:"Limitation of Liability",blocks:[{type:"p",text:"To the fullest extent permitted by law, The Gifted Girl Kim LLC is not liable for indirect, incidental, or consequential damages arising from use of GGK Commercial Publisher or from YouTube or Google API changes, outages, or policy enforcement."}]},{heading:"Changes",blocks:[{type:"p",text:"We may update these terms as GGK Commercial Publisher changes. The effective date and last-updated date at the top will change when an update is posted."}]},{heading:"Contact",blocks:[{type:"p",text:"Questions about these terms? Email thegiftedgirlkim@gmail.com."}]}],i={effectiveDate:l,lastUpdated:p,intro:u,sections:d};function o(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[e])}function h(t=[]){return t.map(e=>e.type==="ul"?`<ul>${(e.items||[]).map(a=>`<li>${o(a)}</li>`).join("")}</ul>`:e.type==="a"&&e.href?`<p><a href="${o(e.href)}" rel="noopener noreferrer">${o(e.text)}</a></p>`:`<p>${o(e.text)}</p>`).join(`
`)}function m(){const t=document.querySelector("[data-ggk-publisher-terms]");if(!t)return;const e=(i.sections||[]).map(r=>`
        <h2>${o(r.heading)}</h2>
        ${h(r.blocks)}
  `).join(`
`);t.innerHTML=`
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">Terms of Service</p>
        <h1 class="page-hero__title">GGK Commercial Publisher</h1>
        <p class="page-hero__lead">Effective date: ${o(i.effectiveDate)}</p>
        ${`<p class="page-hero__lead">Last updated: ${o(i.lastUpdated)}</p>`}
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        <p>${o(i.intro)}</p>
        ${e}

        <div class="hero__actions support-privacy-actions">
          <a href="/ggk-commercial-publisher.html" class="btn btn-primary">GGK Commercial Publisher</a>
          <a href="/ggk-commercial-publisher-privacy.html" class="btn btn-secondary">Privacy Policy</a>
          <a href="mailto:${o(n())}" class="btn btn-secondary">Email ${o(c.company)}</a>
        </div>
      </div>
    </section>
  `}s();m();
