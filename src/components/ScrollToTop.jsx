import React, { useState } from 'react';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add event listener for scrolling
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BackTop
      visibilityHeight={100}
      style={{
        right: '20px',
        bottom: '20px',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        cursor: 'pointer',
        position: 'fixed',
      }}
      onClick={scrollToTop}
      onKeyDown={scrollToTop}
      role="button"
      tabIndex={0}
    >
      <div
        className={`ant-back-top-inner ${visible ? 'show' : 'hide'}`}
        style={{
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          fontSize: '16px',
          color: '#000',
        }}
      >
        <UpOutlined />
      </div>
    </BackTop>
  );
};

export default ScrollToTop;
