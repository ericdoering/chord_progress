import React from 'react';
import { useHistory } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export const sendButton = ({ to, children }: ButtonProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};
