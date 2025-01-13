import React, {useEffect, useState} from 'react';
import s from './Styles.module.scss';

function Styles() {
  
  
  const stylesData = [
    {
      icon: "bi bi-file-text-fill",
      header: "Blog post",
      text: "Transform voice notes into a structured blog post, with clear headings and paragraphs."
    },
    {
      icon: "bi bi-camera-video-fill",
      header: "Video Script",
      text: "Organize voice notes into a script for videos, ensuring clarity and flow."
    },
    {
      icon: "bi bi-envelope-fill",
      header: "Newsletter",
      text: "Turn voice notes into a newsletter, with a friendly and engaging tone."
    },
    {
      icon: "bi bi-envelope-fill",
      header: "LinkedIn Post",
      text: "Turn voice notes into a LinkedIn post, using emojis and a friendly tone."
    },
    {
      icon: "bi bi-book-fill",
      header: "Journal",
      text: "Turn voice notes into a journal entry, adding today's date and maintaining the tone of voice."
    },
    {
      icon: "bi bi-file-earmark-text-fill",
      header: "Note",
      text: "Simplify and clarify ideas, keeping only the important points with simple sentences."
    },
    {
      icon: "bi bi-check-lg",
      header: "Task List",
      text: "Convert voice notes into a task list, using \"-\" for tasks without numbers."
    },
    {
      icon: "bi bi-twitter",
      header: "Tweet",
      text: "Create a short tweet from voice notes, keeping it casual and friendly."
    },
    {
      icon: "bi bi-list-ul",
      header: "Podcast Planner",
      text: "Organize the main ideas from your voice notes and organize them into multiple podcast outlines."
    },
    {
      icon: "bi bi-mic-fill",
      header: "Podcast Script",
      text: "Create detailed scripts for podcast episodes from voice notes, forming a coherent narrative."
    },
    {
      icon: "bi bi-menu-button-wide-fill",
      header: "Blog post planner",
      text: "Organize the main ideas in your voice note into multiple blog post outlines."
    },
  ];
  
  
  return (
    <div className={s.block}>
      <div className={s.block_header}>
        <h2 className={s.header_grey}>Styles</h2>
        <h2 className={s.header_black}>+100 premade styles to pick from</h2>
        <p className={s.header_text}>Boost your productivity with styles for every need. From task lists and meeting notes to full transcripts, TalkNotes helps you turn ideas into action!</p>
      </div>
      
      <div className={s.styles_container}>
        {stylesData.map((item, index) => (
          <div key={"stylesData"+index} className={s.style}>
            <div className={s.style_header}><i className={item.icon}></i> {item.header}</div>
            <p className={s.style_text}>{item.text}</p>
          </div>
        ))}
        <div className={s.style}>
          <div className={s.style_header}>And more...</div>
          <p className={s.style_text}>We add new styles frequently, and you can even create your own!</p>
        </div>
      </div>
      
      <div className={s.bottom_info}>
        <div style={{flex: "1 1 0%", maxWidth: "600px"}}>
          <h3>...or create your own!</h3>
          <p>Can't find the perfect style or need something very specific? Give your own instructions for the AI to follow in just a few clicks. Your creativity is the only limit!</p>
        </div>
        <div className={s.video}>
          <video src="videos/custom-style.mp4" loop playsInline={true} autoPlay={true} muted ></video>
        </div>
      </div>
      

      <button className={"blue_button"} style={{gap:".5em", margin:"auto", fontSize: "18px", backgroundImage: "linear-gradient(324deg, #a000ff, #ff006f)", width:"100%", maxWidth:"300px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
        Start working with TalkNotes
      </button>
    </div>
  );
}

export default Styles;
