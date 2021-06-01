import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

function Login() {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });

  const onChange = e => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const router = useRouter();
  const login = async () => {
    try {
      const res = await axios.post('/api/login', { ...input });
      console.log(res.data);
      if (res.data.message === 'ok') {
        router.push('/admin');
      }
    } catch (e) {
      throw new Error();
    }
  };
  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form>
        <Form.Field inline>
          <input
            onChange={onChange}
            value={input.id}
            name="id"
            type="text"
            placeholder="ID"
          />
        </Form.Field>
        <Form.Field inline>
          <input
            onChange={onChange}
            value={input.password}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
