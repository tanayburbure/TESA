import { useState } from 'react';

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 99999,
  };

  const menuStyle = {
    width: isHovered ? '50vw' : '64px',
    height: isHovered ? '50vh' : '64px',
    cursor: 'pointer',
    backgroundColor: '#4A9782',
    borderRadius: '8px',
    position: 'relative',
    transition: 'width 0.15s ease-in-out, height 0.15s ease-in-out',
    transformOrigin: 'top right',
  };

  const linesContainerStyle = {
    position: 'absolute',
    top: '32px',
    right: '32px',
    width: 0,
    height: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const baseLineStyle = {
    backgroundColor: '#374151',
    borderRadius: '9999px',
    position: 'absolute',
    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  };

  const getHorizontalLineStyle = (position, delay) => ({
    ...baseLineStyle,
    width: isHovered ? '2px' : '24px',
    height: '2px',
    opacity: isHovered ? 0 : 1,
    transform: `scale(${isHovered ? 0.5 : 1}) rotate(0deg) translateY(${
      position === 'top' ? -6 : position === 'bottom' ? 6 : 0
    }px)`,
    filter: `blur(${isHovered ? 3 : 0}px)`,
    transition: `opacity 0.4s ${delay}s, transform 0.4s ${delay}s, width 0.4s ${delay}s, height 0.4s ${delay}s, filter 0.4s ${delay}s`,
  });

  const getVerticalLineStyle = (position, delay) => ({
    ...baseLineStyle,
    width: '2px',
    height: isHovered ? '20px' : '2px',
    opacity: isHovered ? 1 : 0,
    transform: `scale(${isHovered ? 1 : 0.5}) rotate(0deg) translateX(${
      position === 'left' ? -6 : position === 'right' ? 6 : 0
    }px)`,
    filter: `blur(${isHovered ? 0 : 3}px)`,
    transition: `opacity 0.4s ${delay}s, transform 0.4s ${delay}s, width 0.4s ${delay}s, height 0.4s ${delay}s, filter 0.4s ${delay}s`,
  });

  return (
    <div style={containerStyle}>
      <div
        style={menuStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={linesContainerStyle}>
          {/* Horizontal Lines */}
          <div style={getHorizontalLineStyle('top', 0)} />
          <div style={getHorizontalLineStyle('middle', 0.05)} />
          <div style={getHorizontalLineStyle('bottom', 0.1)} />

          {/* Vertical Lines */}
          <div style={getVerticalLineStyle('left', 0.15)} />
          <div style={getVerticalLineStyle('center', 0.2)} />
          <div style={getVerticalLineStyle('right', 0.25)} />
        </div>
      </div>
    </div>
  );
}
