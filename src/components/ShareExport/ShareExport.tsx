import React, {useEffect, useState} from 'react';
import s from './ShareExport.module.scss';
import Review from "../Review/Review";

function ShareExport() {
  
  
  
  return (
    <div className={s.block}>
      <div className={s.block_header}>
        <h2 className={s.header_grey}>Share & Export</h2>
        <h2 className={s.header_black}>Turn your ramblings into actionable notes</h2>
      </div>
      
      <div className={s.elements}>
        <div className={s.element}>
          <img src="images/share-export-1.png" alt=""/>
          <p className={s.element_header}>Send it to 1000s of other apps</p>
          <p className={s.element_text}>Connect Talknotes to your favorite apps with Zapier or Webhooks! Perfect to automate publishing and workflows!</p>
        </div>
        <div className={s.element}>
          <img src="images/share-export-2.png" alt=""/>
          <p className={s.element_header}>Export in PDF, Text or Markdown</p>
          <p className={s.element_text}>Export your notes in PDF, Text or Markdown to use them in your favorite tools.</p>
        </div>
        <div className={s.element}>
          <img src="images/share-export-3.png" alt=""/>
          <p className={s.element_header}>Publish with just a link!</p>
          <p className={s.element_text}>Need to share a note quickly? Make it public and share with the world via a simple link!</p>
        </div>
      </div>
      

      <button className={"pink_button"} style={{marginTop: "40px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
        Start working with TalkNotes
      </button>
      <Review
        quote={"“Absolutely love Talknotes. I have wrist pain so being able to dictate my writing not only saves me time but relieves my pain! Win win. Highly recommend!”"}
        author={"- Mike Cardona, from Hidden Levers AI Newsletter"}
      />
      <Review
        quote={"“The quality of the transcriptions is fantastic and require virtually no rework. Compared to incomparably more expensive tools, the results are dimensions better.”"}
        author={"- Thomas Mickeleit, from KommunikationNeuDenken"}
      />
    </div>
  );
}

export default ShareExport;
