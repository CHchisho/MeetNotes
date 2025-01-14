import React, {useEffect, useState} from 'react';
import s from './Pricing.module.scss';
import Review from "../Review/Review";

function Pricing() {
  

  
  return (
    <div>
      <div className={s.block} id={"pricing"}>
        
        <div className={s.block_header}>
          <h2 className={s.header_grey}>Pricing</h2>
          <h2 className={s.header_black}>Start saving time and stay ahead of others with AI</h2>
          <p className={s.header_text}>Get TalkNotes: <span>ALL FEATURES</span></p>
        </div>
        
        <div className={s.container}>
          <div className={`${s.panel} ${s.left_panel}`}>
            <p className={s.panel_header}>Monthly</p>
            <p className={s.panel_month}>First month for only $9.99</p>
            <div className={s.panel_price}>
              <p>$19.97</p>
              <span>/month</span>
            </div>
            <div className={s.benefits}>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>iOS and Android app</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Unlimited notes</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>2h recording</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Upload files</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Custom styles</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Export to text, mail, URL etc</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Store and organize your notes</div>
            </div>
            <button className={"pink_button"} style={{marginTop: "24px", maxWidth:"none"}}>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
              Get monthly
            </button>
            <p className={s.secure}><i className="bi bi-lock-fill"></i>Secure payment</p>
          </div>
          
          <div className={`${s.panel} ${s.right_panel}`}>
            <div className={s.best_value}>Best value</div>
            <p className={s.panel_header}>Yearly</p>
            <p className={s.panel_month}>$16/month billed annually</p>
            <div className={s.panel_price}>
              <p>$197.00</p>
              <span>/year</span>
            </div>
            <div className={s.benefits}>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>iOS and Android app</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Unlimited notes</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>2h recording</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Upload files</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Custom styles</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Export to text, mail, URL etc</div>
              <div className={s.benefit}><i className="bi bi-check-lg"></i>Store and organize your notes</div>
            </div>
            <button className={"pink_button"} style={{marginTop: "24px", maxWidth:"none"}}>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
              Get Yearly
            </button>
            <p className={s.secure}><i className="bi bi-lock-fill"></i>Secure payment</p>
          </div>
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
        
        <div className={s.images_block} style={{marginTop:"0px"}}>
          <img src="images/sp-medium.svg" alt="Medium logo" width={200}/>
          <img src="images/sp-ih.svg" alt="Indiehackers logo" width={200}/>
          <img src="images/sp-foundr.svg" alt="Foundr Logo" width={200}/>
          <img src="images/sp-scoopit.svg" alt="Scoopit Logo" width={200}/>
        </div>
        <Review
          quote={"“a perfect tool to work in different ways, if its notes, brainstorming, translation - I love it!”"}
          author={"- Tanja Res, reviewed on Trustpilot"}
        />
        <Review
          quote={"“Been using it for the last 2 months. Super easy. Saves me 5 hours every week minimum.”"}
          author={"- Dan Kulkov, Entrepreneur"}
        />
      </div>
    </div>
  );
}

export default Pricing;
