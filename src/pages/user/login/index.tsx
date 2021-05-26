import React from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Button } from 'antd';
import Logo from '@/components/logo';

const UserLogin: React.FC = function() {
  const history = useHistory();

  function login() {
    history.push('/');
  }

  return (
    <>
      <h1 className="text-center text-3xl mb-8">
        <Logo className="inline-block h-24 mb-3" />
        <div>User Login</div>
      </h1>
      <Form size="large" autoComplete="off" onFinish={login}>
        <Form.Item 
          name="account"
          rules={[
            { required: true, message: 'please enter account' }
          ]}
        >
          <Input placeholder="Account" />
        </Form.Item>
        <Form.Item 
          name="password"
          rules={[
            { required: true, message: 'please enter password' }
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UserLogin;
