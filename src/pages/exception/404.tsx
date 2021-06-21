import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import BasePage from '@/templates/base-page';

const Exception404: React.FC = function() {
  const [countDown, setCountDown] = useState(5);
  const history = useHistory();

  useEffect(function() {
    const handler = setTimeout(function() {
      let next = countDown - 1;
      if (next >= 0) {
        setCountDown(next);
      } else {
        history.replace('/')
      }
    }, 1000)
    return function() {
      clearTimeout(handler);
    }
  }, [countDown])

  return (
    <BasePage>
      <Row gutter={20} style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img 
            src={require('@/assets/pages/exception/404.png').default} 
            alt="404" 
            className="h-80"
          />
        </Col>     
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="py-4">
            <div className="text-3xl font-bold mb-3" style={{ color: '#1890ff' }}>抱歉!</div>
            <div className="text-xl font-bold mb-3">当前页面不存在...</div>
            <div className="text-sm text-gray-600 mb-3">请检查您输入的网址是否正确，或点击下面的按钮返回首页。</div>
            <Link to="/">
              <Button type="primary" shape="round" size="large">{countDown}s 返回首页</Button>
            </Link>
          </div>
        </Col>    
      </Row>
    </BasePage>
  )
}

export default Exception404;