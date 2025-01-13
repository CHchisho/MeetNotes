import React, {useEffect, useState} from 'react';
import s from './WhyChoose.module.scss';
import Review from "../Review/Review";

function WhyChoose() {
  
    const stylesData = [
    {
      icon: "bi bi-clock-fill",
      header: "Save Time",
      text: "Focus on what matters. Let AI handle the busywork of organizing your notes so you can reclaim your time and dedicate it to high-impact tasks."
    },
    {
      icon: "bi bi-list-check",
      header: "Get More Done",
      text: "Boost your productivity. Capture thoughts quickly, stay on top of your workload, and move through tasks with greater efficiency."
    },
    {
      icon: "bi bi-stars",
      header: "Work Smart, Not Hard",
      text: "Leverage AI for effortless organization. TalkNotes makes it easy to stay productive and efficient without the hassle of manual note-taking."
    },
    {
      icon: "bi bi-rocket-takeoff-fill",
      header: "Get Ahead Instead of Left Behind",
      text: "Stay competitive in an AI-driven world. Using AI isn't optional — it's essential. Keep pace with modern tools to maintain your edge."
    },
    {
      icon: "bi bi-bar-chart-fill",
      header: "Stay Organized",
      text: "Turn chaos into clarity. With customizable templates and automatic structuring, TalkNotes ensures that every thought and idea is right where you need it."
    },
    {
      icon: "bi bi-clipboard-check-fill",
      header: "Never Miss a Thing",
      text: "Capture every idea, every detail. TalkNotes helps you avoid information overload by keeping all your thoughts organized and accessible whenever you need them."
    },
  ];

  
  return (
    <div className={s.block}>
      <div className={s.block_header}>
        <h2 className={s.header_grey}>Why Choose TalkNotes?</h2>
        <h2 className={s.header_black}>Work with AI by Your Side, Every Step of the Way</h2>
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
        quote={"“This app has great practical use. Whether you're brainstorming ideas for a book, processing your YouTube video, podcast, or TikTok outloud, this captured all of it and puts it into whatever format you want. SUPER clean and easy to use. The developer has been a great innovator & we're grateful for this service.”"}
        author={"- Rosales, review on Apple App Store"}
      />
    </div>
  );
}

export default WhyChoose;
