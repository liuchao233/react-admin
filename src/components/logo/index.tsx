import React from 'react';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {

}

const Logo: React.FC<LogoProps> = function(props) {
  return (
    <img src={require('@/assets/logo.svg').default} height="64" alt="logo" {...props} />
  )
}

export default Logo;
