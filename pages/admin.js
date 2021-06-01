import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const logout = async () => {
    try {
      const res = await axios.get('/api/logout');
      if (res.data.message === 'ok') {
        router.push('/');
        setIsLogin(false);
      }
    } catch (e) {
      throw new Error();
    }
  };

  const checkLogin = async () => {
    try {
      const res = await axios.get('/api/isLogin');
      setIsLogin(true);
      if (res.data.name !== 'yeongoo') {
        router.push('/login');
      }
    } catch (e) {
      throw new Error();
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      admin
      {isLogin && <Button onClick={logout}>logout</Button>}
    </div>
  );
}

export default Admin;
