import React, {useState} from 'react';
import s from './PreFooterBanner.module.scss';

function PreFooterBanner() {
  
  return (
    <div className={s.block}>
      <div className={s.panel}>
        <div className={s.header}>Get Ahead with AI-Powered, Actionable Note Taking</div>
        <div>Turn your ideas into organized, actionable insights—no manual work required. Capture your thoughts and let TalkNotes transform them into the formats you need to stay productive and on top of your work.</div>
        
        <button className={"blue_button"} style={{gap:".5em", backgroundColor:"rgb(219 39 119)"}}>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
          Get Talknotes +
        </button>
      </div>
      <div className={s.image_div}>
        <img width={400} loading={"lazy"} src="images/banner-thumbnail.jpg" alt="Create transcripts, blog posts, video scripts & more."/>
      </div>
    </div>
  );
}

export default PreFooterBanner;
