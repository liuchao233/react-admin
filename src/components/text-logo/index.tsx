import React from 'react';

interface TextLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  
}

const TextLogo: React.FC<TextLogoProps> = function(props) {
  return (
    <div className="font-sans text-xl leading-none text-white text-center h-16 py-5">
      <b>R</b>eact Admin
    </div>
  )
}

export default TextLogo