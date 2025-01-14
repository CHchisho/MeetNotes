import React, {useEffect, useState} from 'react';
import s from './HowItWorks.module.scss';
import Review from "../Review/Review";

function HowItWorks() {
  
  const [selectedPanel, setSelectedPanel] = useState<number>(1)
  
  return (
    <div className={s.block} id={"how-it-works"}>
      <div className={s.block_header}>
        <h2 className={s.header_grey}>How it works</h2>
        <h2 className={s.header_black}>Take Notes in Seconds, Stay Ahead for Hours</h2>
      </div>
      
      
      <div className={s.container}>
        <div className={s.left_panel}>
          <div className={`${s.panel} ${selectedPanel === 1 && s.opened}`} onClick={()=>setSelectedPanel(1)}>
            <div className={s.panel_header}>1. Record with One Button
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z"></path></svg>
            </div>
            <div className={s.panel_text}>Effortlessly capture your thoughts with a single tap. Start recording instantly and let TalkNotes run in the background, so you can stay focused on what matters without interruptions.</div>
          </div>
          <div className={`${s.panel} ${selectedPanel === 2 && s.opened}`} onClick={()=>setSelectedPanel(2)}>
            <div className={s.panel_header}>2. Select Your Style
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z"></path></svg>
            </div>
            <div className={s.panel_text}>Choose from ready-made styles for meeting notes, task lists, brainstorming sessions, and more. Customize or create your own style to perfectly suit your workflow.</div>
          </div>
          <div className={`${s.panel} ${selectedPanel === 3 && s.opened}`} onClick={()=>setSelectedPanel(3)}>
            <div className={s.panel_header}>3. Transcribe & Summarize with 99% Accuracy
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z"></path></svg>
            </div>
            <div className={s.panel_text}>Work smarter, not harder. Our AI-powered transcription ensures 99% accuracy, so you can trust that every word is captured correctly, leaving you free to focus on the big picture.</div>
          </div>
          <div className={`${s.panel} ${selectedPanel === 4 && s.opened}`} onClick={()=>setSelectedPanel(4)}>
            <div className={s.panel_header}>4. Edit, then Share & Export Notes Easily
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z"></path></svg>
            </div>
            <div className={s.panel_text}>Fine-tune your notes and make last-minute edits before sharing them as a URL, email, or message, or exporting to your preferred format. Your insights are always polished, accessible, and ready to use.</div>
          </div>
          <button className={"pink_button"} style={{marginTop: "24px", maxWidth:"100%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
            Start working with TalkNotes
          </button>
        </div>
        <div className={s.video_panel}>
          <video src={`videos/step-${selectedPanel}.mp4`} loop playsInline={true} autoPlay={true} muted />
        </div>
      </div>
      
      
      <Review
        quote={"“So simple, yet effective. I use Talknotes to write most of our blog posts. I would highly recommend to those looking to up their content game.”"}
        author={"- Elwyn Davies, from Pixelhaze Studio"}
      />
      <Review
        quote={"“This is really helpful for taking notes on the fly. The app is user friendly, easy to use, and does exactly as advertised. ”"}
        author={"- Iskandar Chacra, review from Product Hunt"}
      />
    </div>
  );
}

export default HowItWorks;
