import React, {useState} from 'react';
import s from './FAQ.module.scss';

function FAQ() {
  const [openPanels, setOpenPanels] = useState<boolean[]>(Array(10).fill(false));

  const togglePanel = (index: number) => {
    setOpenPanels((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  
  const faqData = [
    {
      question: "Is there a mobile app?",
      answer: "Yes, Talknotes is available for both iOS and Android. You can download it from the App Store or Google Play Store.",
    },
    {
      question: "How accurate is the voice-to-text conversion?",
      answer: "Our state-of-the-art AI technology ensures a high accuracy rate. However, it may vary depending on the clarity of the speech and background noise. You can always edit the text if needed!",
    },
    {
      question: "Can I use TalkNotes in different languages?",
      answer: "Yes! TalkNotes supports 50+ languages: Afrikaans, Arabic, Armenian, Azerbaijani, Belarusian, Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Galician, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Marathi, Maori, Nepali, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, and Welsh.",
    },
    {
      question: "Can I upload my own audio files?",
      answer: "Yes! TalkNotes + gives you the ability to upload your own audio files up to 20 minutes long (or 2 hours with Pro). Perfect if you need to transcript a phone or zoom call.",
    },
    {
      question: "Can I edit the text once it's converted?",
      answer: "Absolutely! TalkNotes allows you to edit and organize both the content and the transcript. Tailor it to your needs & create content easily.",
    },
    {
      question: "Do I need an internet connection to use TalkNotes?",
      answer: "Yes, an internet connection is required to utilize the full range of features in TalkNotes.",
    },
    {
      question: "What about privacy?",
      answer: "Glad you asked! All audio files are deleted after they are transcribed, and we don't train the AI using your notes. Your notes are 100% yours.",
    },
    {
      question: "How can I contact support if I have questions or need help?",
      answer: "We're here to assist you! Feel free to reach out via live chat or email us at support@talknotes.io. Your satisfaction is our priority!",
    },
    {
      question: "How can I cancel my subscription?",
      answer: "You can cancel at any time. There is a link called Manage my subscription in the settings tab which lets you change plans or cancel your plan. You will not be charged anymore after cancelling and you will have access to paid features for the reminder of your subscription period.",
    },
    {
      question: "How long is the discount valid when I subscribe?",
      answer: "Discounts show how long they are valid for. We currently offer an introductory first-month discount on the monthly plan.",
    }
  ]
  
  return (
    <div className={s.block} id={"faq"}>
      <h2 className={s.block_header}>F.A.Q</h2>
      <div className={s.info_container}>
        {faqData.map((item, index) => (
          <div
            key={"faqData"+index}
            className={`${s.faq_element} ${openPanels[index] && s.open}`}
            onClick={() => togglePanel(index)}>
            <h3 className={s.faq_element_h3}>{item.question}</h3>
            <div className={s.indicator} style={{ rotate: openPanels[index] ? "180deg" : "0deg" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512">
                <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7L86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
            </div>
            <p className={s.faq_answer}>{item.answer}</p>
          </div>
        ))}
      </div>

      <button className={"pink_button"} style={{marginTop:"48px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
        Start working with TalkNotes
      </button>
    </div>
  );
}

export default FAQ;
