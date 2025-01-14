import React from 'react';
import s from './Footer.module.scss';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_column}>
        <a href="/">
          <img width="150" height="36" alt="TalkNotes Logo unicolor" loading="lazy" src={"images/logo-white.svg"}/>
        </a>
        <p>Turn your thoughts into actionable notes.</p>
        <p>© 2024 - talknotes.io All rights reserved.</p>
        <div className={s.soc_links}>
          <a href="https://www.facebook.com/TalkNotesApp" rel="noopener noreferrer" target="_blank" aria-label="Facebook page" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 320 512" >
            <path fill="currentColor" d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8z"></path></svg>
          </a>
          <a href="https://twitter.com/TalkNotesApp" rel="noopener noreferrer" target="_blank" aria-label="Twitter account" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" >
            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253"></path></svg>
          </a>
          <a href="https://www.youtube.com/@TalkNotesApp" rel="noopener noreferrer" target="_blank" aria-label="Youtube Channel" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 576 512" >
            <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"></path></svg>
          </a>
          <a href="https://www.tiktok.com/@TalkNotesApp" rel="noopener noreferrer" target="_blank" aria-label="Tiktok Account" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512" >
            <path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"></path></svg>
          </a>
        </div>
      </div>
      
      <div className={s.footer_column}>
        <p className={s.footer_title}>Use cases</p>
        <a>Brainstorming</a>
        <p className={s.footer_title}>Links</p>
        <a>Reviews</a>
        <a>Pricing</a>
        <a>Download</a>
        <a>Affiliate Program</a>
        <a>F.A.Q</a>
        <a>Blog</a>
      </div>
      <div className={s.footer_column}>
        <p className={s.footer_title}>Learn</p>
        <a>How to transcribe voice memos</a>
        <a>Brainstorming AI</a>
        <p className={s.footer_title}>Free tools</p>
        <a>Voice memo transcription</a>
        <a>MP3 to text converter</a>
      </div>
      <div className={s.footer_column}>
        <p className={s.footer_title}>Contacts</p>
        <p>support@talknotes.io</p>
        <p style={{opacity:"0.3",fontSize:"12px", color: "rgb(156 163 175)"}}>Kansakoulukuja 3,<br />FI-00100, HELSINKI, FINLAND,<br />+1 737 320 3335</p>
        <p className={s.footer_title}>Legal</p>
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
        <a>Facebook Disclaimer</a>
      </div>
      
    </div>
  );
}

export default Footer;
