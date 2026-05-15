import { useEffect, useState, useRef } from 'react';

/** Cycles through strings with a typing / deleting animation. */
export function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pause = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseRef = useRef(null);

  useEffect(() => {
    if (!words?.length) return;

    const currentWord = words[wordIndex % words.length];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.substring(0, displayText.length + 1);
          setDisplayText(next);
          if (next === currentWord) {
            pauseRef.current = setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          const next = currentWord.substring(0, displayText.length - 1);
          setDisplayText(next);
          if (next === '') {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      clearTimeout(timer);
      if (pauseRef.current) clearTimeout(pauseRef.current);
    };
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayText;
}
