import React, {useEffect, useState} from 'react';
import s from './InteractiveDemo.module.scss';

function InteractiveDemo() {
  

  
  return (
    <div style={{padding:"5vh 7vw 7vw"}} id={"demo"}>
      <div className={s.block}>
        <div className={s.left_panel}>
          <img src="images/ph-award.svg" width={120} height={37} loading={"lazy"} style={{opacity: "0.7", marginBottom:"16px"}} alt="TalkNotes - Turn your thoughts into clear notes, fast | Product Hunt"/>
          <h1 className={s.text_1}>Get Ahead in Your Work Today with Easy-to-Use <span style={{color: "rgb(79 70 229)"}}>AI Note-Taking</span>.</h1>
          <h2 className={s.text_2}>Impress your co-workers, boss and clients</h2>
          <div>
            <p className={s.text_3}>Save time and get more done by working smarter, not harder. Transform how you work with TalkNotes, the AI note taking assistant for staying productive, organized & not fall behind.</p>
            <p className={s.text_4}>Available on Web, iOS and Android.</p>
          </div>
          <div style={{width:"100%"}}>
            <p className={s.text_5}>Works in:</p>
            <div style={{position:"relative", maxWidth:"490px"}}>
              <div className={s.text_6_container}>
                <div className={s.text_6}>🇺🇸 English</div>
                <div className={s.text_6}>🇪🇸 Spanish</div>
                <div className={s.text_6}>🇫🇷 French</div>
                <div className={s.text_6}>🇩🇪 German</div>
                <div className={s.text_6}>🇳🇱 Dutch</div>
                <div className={s.text_6}>🇵🇹 Portuguese</div>
                <div className={s.text_6}>🇵🇱 Polish</div>
              </div>
              <div className={s.text_6_white}></div>
            </div>
            
            <button className={"pink_button"} style={{marginTop: "24px", maxWidth:"none"}}>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
              Start working with AI
            </button>
            <button className={`white_button ${s.try_button}`}>
               <i className="bi bi-mic-fill"></i> Try the free demo
            </button>
          </div>
          <span className={s.text_7}>
            Trusted by +10,000 happy users
            <span style={{color: "rgb(251 146 60)", marginLeft:"5px"}}>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </span>
          </span>
          <div className={s.text_8}>
            <a href="https://apps.apple.com/us/app/talknotes-voice-memo-to-text/id6468339589" rel="noopener noreferrer" target="_blank">
              <img src="/images/appstore-badge.svg" style={{height:"50px"}} alt="Download Talknotes on the App Store" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.talknotes.app" rel="noopener noreferrer" target="_blank">
              <img src="/images/playstore-badge.png" style={{height:"50px"}} alt="Download Talknotes on the App Store" /></a>
          </div>
        </div>
        
        <div className={s.right_panel}>
          
          <div className={s.demo_panel}>
            <h3 className={s.panel_header}>Interactive demo</h3>
            
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
                <div className={s.canvas}><div></div></div>
                <div className={s.time_limit}>Limit: 01:00</div>
                <div className={s.current_time}>00:00</div>
                <div style={{display:"flex", alignItems:"center", gap:"24px"}}>
                  <button className={`${s.player_button} ${s.disabled}`} disabled>
                  {/*<button className="player-button btn-3" disabled>*/}
                    <svg xmlns="http://www.w3.org/2000/svg"aria-hidden="true" role="img" className="icon" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538z"></path>
                    </svg></button>
                  <button className={`${s.player_button} ${s.micro_buton}`}>
                  {/*<button className="animate-pulse-beat player-button bg-main-gradient !p-5 !text-5xl !text-white">*/}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><g fill="currentColor"><path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0z"></path><path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6 6 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0z"></path></g></svg>
                  </button>
                  <button className={`${s.player_button} ${s.disabled}`} disabled>
                  {/*<button className="player-button btn-3" disabled>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.286a1.5 1.5 0 0 0 1.492-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25m2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75zM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6m3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711" clip-rule="evenodd"></path></svg>
                  </button>
                </div>
                
              </div>
            </div>
            
            <button className={`blue_button ${s.disabled}`} style={{gap:".5em", paddingInline:"32px", width:"fit-content", margin:"auto auto 6px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
              Continue
            </button>
            
            <p className={s.bottom_text}>
              <span className={s.animate_bounce}><i className="bi bi-arrow-up"></i></span>
               Try it out! Click the
              <span className={s.demo_panel_pulse} style={{color: "rgb(79 70 229)"}}><i className="bi bi-mic-fill"></i></span>
               to start recording
            </p>
          </div>
        </div>
      </div>
      <div className={s.images_block}>
        <img src="images/sp-medium.svg" alt="Medium logo" width={200}/>
        <img src="images/sp-ih.svg" alt="Indiehackers logo" width={200}/>
        <img src="images/sp-foundr.svg" alt="Foundr Logo" width={200}/>
        <img src="images/sp-scoopit.svg" alt="Scoopit Logo" width={200}/>
      </div>
    </div>
    
  );
}

export default InteractiveDemo;
