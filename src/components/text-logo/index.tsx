import React, { useContext } from 'react';
import { SiderContext } from 'antd/es/layout/Sider';

interface TextLogoProps extends React.HTMLAttributes<HTMLDivElement> {
}

const TextLogo: React.FC<TextLogoProps> = function(props) {
  const { siderCollapsed: collapsed } = useContext(SiderContext)

  return (
    <div className="font-sans text-2xl leading-8 text-white text-center h-16 py-4">
      {
        collapsed ? (
          <span><b>R</b>A</span>
        ) : (
          <span><b>R</b>eact Admin</span>
        )
      }
    </div>
  )
}


export default TextLogo