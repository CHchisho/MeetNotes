import React, {useEffect, useState} from 'react';
import s from './UseCases.module.scss';
import Review from "../Review/Review";

function UseCases() {
  
    const stylesData = [
    {
      icon: "bi bi-lightbulb-fill",
      header: "Effortless Brainstorming",
      text: "Never forget an idea again! Capture your best thoughts while they're fresh, and let our app do the writing for you."
    },
    {
      icon: "bi bi-pencil-fill",
      header: "Easy Content Creation",
      text: "Say goodbye to writer's block! With TalkNotes, you can dictate your thoughts and watch them transform into engaging content in seconds."
    },
    {
      icon: "bi bi-file-text-fill",
      header: "Voice Journaling",
      text: "Discover a new way to journal! Express your thoughts, feelings, and memories effortlessly just by recording yourself rambling."
    },
    {
      icon: "bi bi-mic-fill",
      header: "Interview Transcription",
      text: "Conduct interviews like a pro! TalkNotes provides instant, accurate transcriptions so you can focus on the conversation."
    },
    {
      icon: "bi bi-chat-square-fill",
      header: "Meetings Reimagined",
      text: "Transform your meetings with TalkNotes! Record, transcribe, and never miss a crucial detail again."
    },
    {
      icon: "bi bi-backpack-fill",
      header: "Learn faster",
      text: "Supercharge your studies with TalkNotes! Convert lectures and study sessions into clear notes and flashcards."
    },
  ];

  
  return (
    <div className={s.block}>
      <div className={s.block_header}>
        <h2 className={s.header_grey}>Use cases</h2>
        <h2 className={s.header_black}>Here is how Talknotes can help you</h2>
      </div>
      
      
      <div className={s.styles_container}>
        {stylesData.map((item, index) => (
          <div key={"stylesData"+index} className={s.style}>
            <div className={s.style_header}><i className={item.icon}></i> {item.header}</div>
            <p className={s.style_text}>{item.text}</p>
          </div>
        ))}
      </div>
      

      <button className={"pink_button"} style={{marginTop: "40px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
        Start working with TalkNotes
      </button>
      <Review
        quote={"“The quality of the transcriptions is fantastic and require virtually no rework. Compared to incomparably more expensive tools, the results are dimensions better.”"}
        author={"- Thomas Mickeleit, from KommunikationNeuDenken"}
      />
      <Review
        quote={"“I've started using TalkNotes for my work and it has helped me save a lot of time. When I have a meeting, I just record it and let it transcribe everything and summarize it. When having an idea, or when I need to write a Document, I just press record quickly, select the style and let it do the rest. It's very accurate and I very rarely have to correct things and it's very simple to use, which is one thing I liked very little about other apps. In my opinion, it's a must have for any professional, entrepreneur or people wanting to work faster and get more done.”"}
        author={"- Jaastoi, review on Apple App Store"}
      />
    </div>
  );
}

export default UseCases;
