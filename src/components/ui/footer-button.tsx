import React from 'react';

interface FooterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function FooterButton({ children, ...props }: FooterButtonProps) {
  return (
    <button
      style={{
        background: 'transparent',
        position: 'relative',
        padding: '5px 15px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '17px',
        fontWeight: 600,
        textDecoration: 'none',
        cursor: 'pointer',
        border: '1px solid rgb(40, 144, 241)',
        borderRadius: '25px',
        outline: 'none',
        overflow: 'hidden',
        color: 'rgb(40, 144, 241)',
        transition: 'color 0.3s 0.1s ease-out',
        textAlign: 'center',
      }}
      {...props}
    >
      <span style={{ margin: '10px' }}>{children}</span>
      <style jsx>{`
        button::before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          content: '';
          border-radius: 50%;
          display: block;
          width: 20em;
          height: 20em;
          left: -5em;
          text-align: center;
          transition: box-shadow 0.5s ease-out;
          z-index: -1;
        }
        button:hover {
          color: #fff;
          border: 1px solid rgb(40, 144, 241);
        }
        button:hover::before {
          box-shadow: inset 0 0 0 10em rgb(40, 144, 241);
        }
      `}</style>
    </button>
  );
} 