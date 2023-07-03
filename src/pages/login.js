import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { doLogin } from '../helper';
import "../styles/css/login.css"

export default function LoginPage({setToken}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const passwordHandler = ({target}) => setPassword(target.value);
  const emailHandler = ({target}) => setEmail(target.value);
  const data = {
    email,
    password
  }

  const loginHandler = async () => {
    const { token, id, error = null } = await doLogin(data);
 
    if (!error) {
      navigate("/projects", { state: { token, clientID: id}});
      setToken(token);
    } else {
      console.log(error);
    }
  }

  return (
    <Form
      name="login"
      labelCol={{span: 8,}}
      wrapperCol={{span: 16,}}
      style={{width: 490,}}
      initialValues={{remember: true,}}
      autoComplete="off"
      className='center'
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
    <Input
      prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder="Email"
      onChange={emailHandler}
      value={email}
    />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder="Password"
        onChange={passwordHandler}
        value={password}
      />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button
        type="primary" 
        className="login-form-button"
        onClick={loginHandler}
      >
        Log in
      </Button>
    </Form.Item>
  </Form>
  );
}
