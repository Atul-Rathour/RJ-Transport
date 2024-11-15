import React, { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor2');
    const links = document.querySelectorAll('a');

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
      cursorInner.classList.add('cursorinnerhover');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
      cursorInner.classList.remove('cursorinnerhover');
    };

    const handleLinkHover = () => cursor.classList.add('hover');
    const handleLinkHoverOut = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    links.forEach(link => {
      link.addEventListener('mouseover', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseover', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default Cursor;
