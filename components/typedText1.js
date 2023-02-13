import React from 'react';
import Typed from 'typed.js';
import styles from './typedText1.module.css';

const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Привіт, моє Кохання',
        `Це web-линтинка щоб сказати тобі`, 
        `наскільки сильно я тебе люблю`,
        `не тільки цього дня, а кожного дня`, 
        `з момену коли вперше побачив тебе`,
        `Ти неймовірна людинка!`,
         `найкрасивіша, найпрекрасніша і умніша`,
        `З тобою в мене є більше одного життя`, 
        `і я хочу бути тобою`, 
        `кожну секунду, хвилину, годину, вічність...`,
        `Мій поцілуночок для тебе 😘`,
        `Люблю тебе більше за життя`,
        `До зустрічі, моя Юлька! 🤗`
      ],
      typeSpeed: 100,
      backSpeed: 30
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  );
}

export default TypedReactHooksDemo;
