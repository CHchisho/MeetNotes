import React, {useState} from 'react';
import s from './Header.module.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className={s.header}>
      <div className={s.first_row}>
        <a href="/" style={{height:"42px"}}>
          <img style={{padding:"4px"}} width="150" alt="TalkNotes Logo" src={"images/logo-color.svg"}/>
        </a>
        <div className={s.nav_links}>
          <a href="/#demo">Try it</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#use-cases">Use cases</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
        </div>
        <div className={s.nav_buttons}>
          <button className={"white_button"}>
            Login
          </button>
          <button className={"blue_button"} style={{gap:".5em"}}>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
            Get Talknotes +
          </button>
          
        </div>
        <button className={s.menu_button} onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
          {isMenuOpen ? "Close" : "Menu"}
          
        </button>
      </div>
      
      <div className={`${s.drop_menu} ${isMenuOpen && s.visible}`}>
        
        <a onClick={()=>setIsMenuOpen(false)} href="/#demo">Try it</a>
        <a onClick={()=>setIsMenuOpen(false)} href="/#how-it-works">How it works</a>
        <a onClick={()=>setIsMenuOpen(false)} href="/#use-cases">Use cases</a>
        <a onClick={()=>setIsMenuOpen(false)} href="/#pricing">Pricing</a>
        <a onClick={()=>setIsMenuOpen(false)} href="/#faq">FAQ</a>
        <button className={"blue_button bg_gradient_to_r"} style={{gap:".5em", marginTop: "20px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" className="icon" style={{verticalAlign: "-0.125em;"}} width="1em" height="1em" viewBox="0 0 448 512" data-v-e8d572f6=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
          Get Talknotes +
        </button>
        
        <button className={"white_button"}>
          <svg data-v-e8d572f6="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon" width="1em" height="1em" viewBox="0 0 320 512" style={{verticalAlign: "-0.125em"}}><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256L73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
