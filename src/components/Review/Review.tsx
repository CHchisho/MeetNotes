import React, {useState} from 'react';
import s from './Review.module.scss';

interface ReviewProps {
  quote: string; // Основной текст отзыва
  author: string; // Автор отзыва
}

function Review({ quote, author }: ReviewProps) {
  
  return (
    <div className={s.block}>
      <div className={s.avatar}><img src="images/avatar.png" alt="User avatar" width={60}/></div>
      <div className={s.text}>
        <div className={s.black}>{quote}</div>
        <div className={s.grey}>{author}</div>
      </div>
    </div>
  );
}

export default Review;
