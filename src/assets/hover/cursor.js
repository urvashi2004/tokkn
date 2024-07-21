import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import styles from './cursor.css';

const ease = 0.7;

const Cursor = () => {
  const [pointer, setPointer] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const updatePointer = (event) => {
    setPointer({ x: event.clientX, y: event.clientY });
  };

  const createLine = (leader) => {
    const line = document.createElementNS('https://www.w3.org/TR/SVG2/', 'line');

    const get = gsap.getProperty(line);
    const set = gsap.quickSetter(line, 'attr');

    const modifier = (prop) => {
      const n2 = `${prop}2`;

      return () => {
        const posN = get(prop);
        const leaderN = leader(prop);
        const n = posN + (leaderN - posN) * ease;

        set({ [n2]: leaderN - n });

        return n;
      };
    };

    gsap.set(line, pointer);

    gsap.to(line, {
      x: '+=1',
      y: '+=1',
      repeat: -1,
      ease: 'linear',
      modifiers: {
        x: modifier('x'),
        y: modifier('y'),
      },
    });

    return line;
  };

  const createTrail = (selector, trailLength = 10) => {
    const root = document.querySelector(selector);

    let leader = (prop) => (prop === 'x' ? pointer.x : pointer.y);

    for (let i = 0; i < trailLength; i++) {
      const line = createLine(leader);
      root.appendChild(line);
      leader = gsap.getProperty(line);
    }
  };

  useEffect(() => {
    window.addEventListener('pointerdown', updatePointer);
    window.addEventListener('pointermove', updatePointer);

    createTrail('#line-1', 30);
    createTrail('#line-2', 20);
    createTrail('#line-3', 10);

    return () => {
      window.removeEventListener('pointerdown', updatePointer);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  return (
    <svg className={styles.cursor}>
      <circle cx={pointer.x} cy={pointer.y} r={10} fill="red" />
    </svg>
  );
};

export default Cursor;