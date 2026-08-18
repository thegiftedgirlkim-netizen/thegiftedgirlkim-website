import{m as n,s as t}from"./layout-D8VIfDvx.js";import{s as i}from"./support-hub-LCD0Cl3t.js";const c="Internal Publishing Tool",l="An owner-operated publishing tool from The Gifted Girl Kim LLC.",u="GGK Commercial Publisher is used to prepare, approve, and publish The Gifted Girl's own media and commercials to connected platforms. It is not a public app, subscription, or third-party YouTube publishing service.",p="YouTube connection and publishing",d="GGK Commercial Publisher can connect an authorized Google/YouTube account and upload owner-approved commercials to that YouTube channel using YouTube API Services.",h="https://www.youtube.com/@TheGiftedGirlKIM",m="YouTube",g="Google / YouTube authorization",b=["The operator connects YouTube through Google OAuth 2.0.","The currently authorized account is the owner's own YouTube account/channel.","Requested access is YouTube read access, used to identify the channel, and YouTube video upload access, used to upload an approved commercial.","Uploading requires an approved render and a separate operator confirmation. Current live YouTube uploads are private unless YouTube's API project restrictions later allow public or scheduled release."],y="Disconnect and revoke access",f=["The operator can disconnect YouTube inside GGK Commercial Publisher. Disconnecting revokes Google authorization, deletes the locally stored credential, and deletes Google/YouTube Authorized Data from local records.","You can also revoke GGK Commercial Publisher access from your Google Account permissions or Google security settings. After access is revoked, the tool cannot call YouTube APIs until the operator connects again.","Disconnecting does not delete videos already uploaded to YouTube, and it does not delete GGK's own local projects, renders, or publishing history."],v="Privacy and Terms",G="/ggk-commercial-publisher-privacy.html",T="GGK Commercial Publisher Privacy Policy",$="/ggk-commercial-publisher-terms.html",H="GGK Commercial Publisher Terms of Service",P="https://myaccount.google.com/permissions",Y="Google Account permissions",L="https://security.google.com/settings/security/permissions",w="Google security settings",o={eyebrow:c,lead:l,intro:u,youtubeHeading:p,youtubeLead:d,youtubeChannelUrl:h,youtubeLogoAlt:m,authorizationHeading:g,authorization:b,revokeHeading:y,revoke:f,legalHeading:v,privacyHref:G,privacyLabel:T,termsHref:$,termsLabel:H,googlePermissionsHref:P,googlePermissionsLabel:Y,googleSecurityHref:L,googleSecurityLabel:w};function e(r){return String(r??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[a])}function s(r=[]){return`<ul>${r.map(a=>`<li>${e(a)}</li>`).join("")}</ul>`}function k(){const r=document.querySelector("[data-ggk-publisher-home]");r&&(r.innerHTML=`
    <section class="page-hero page-hero--compact">
      <div class="container">
        <p class="eyebrow">${e(o.eyebrow)}</p>
        <h1 class="page-hero__title">GGK Commercial Publisher</h1>
        <p class="page-hero__lead">by ${e(t.company)}</p>
        <p class="page-hero__lead">${e(o.lead)}</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container prose support-privacy-prose">
        <p>${e(o.intro)}</p>

        <h2>${e(o.youtubeHeading)}</h2>
        <p>${e(o.youtubeLead)}</p>
        <div class="ggk-youtube-brand">
          <a href="${e(o.youtubeChannelUrl)}" rel="noopener noreferrer" aria-label="YouTube channel for The Gifted Girl Kim">
            <img src="/assets/brand/youtube-logo.svg" alt="${e(o.youtubeLogoAlt)}" width="88" height="61">
          </a>
          <p>GGK Commercial Publisher can connect to YouTube and upload owner-approved commercials to an authorized channel. YouTube is a trademark of Google LLC.</p>
        </div>

        <h2>${e(o.authorizationHeading)}</h2>
        ${s(o.authorization)}

        <h2>${e(o.revokeHeading)}</h2>
        ${s(o.revoke)}
        <p><a href="${e(o.googlePermissionsHref)}" rel="noopener noreferrer">${e(o.googlePermissionsLabel)}</a></p>
        <p><a href="${e(o.googleSecurityHref)}" rel="noopener noreferrer">${e(o.googleSecurityLabel)}</a></p>

        <h2>${e(o.legalHeading)}</h2>
        <p><a href="${e(o.privacyHref)}">${e(o.privacyLabel)}</a></p>
        <p><a href="${e(o.termsHref)}">${e(o.termsLabel)}</a></p>

        <div class="hero__actions support-privacy-actions">
          <a href="${e(o.privacyHref)}" class="btn btn-primary">Privacy Policy</a>
          <a href="${e(o.termsHref)}" class="btn btn-secondary">Terms of Service</a>
          <a href="mailto:${e(i())}" class="btn btn-secondary">Email ${e(t.company)}</a>
        </div>
      </div>
    </section>
  `)}n();k();
