'use client'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthLayout } from '../../../components/AuthLayout';
import Link from 'next/link';
import { TextField } from '../../../components/Fields';
import { Button } from '../../../components/Button';
import { useRouter } from 'next/navigation';
import { GlobalContext } from '../../../context/globalContext';
import { ActionType } from '../../../types/DispatchActions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter()
  const { state, dispatch } = useContext(GlobalContext)
  

  const handleLogin = async () => {
    try {
      const response = await fetch('https://0dmjqc0xyd.execute-api.ap-northeast-2.amazonaws.com/dev/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        // credentials: 'include',
      });
      const data = await response.json();
      console.log('>>> login response body: ', data)
      console.log('>>> login response headers: ', response.headers)
      // const response = await axios.post('https://0dmjqc0xyd.execute-api.ap-northeast-2.amazonaws.com/dev/signin',
      //   { email, password },
      //   { withCredentials: true}
      // );
      // console.log('>>> login response: ', response.data)
      // // Handle successful login
      // console.log('>>> response.headers: ', response.headers)
      // const cookies = response.headers['Set-Cookie'];
      // if (!cookies) {
      //   // Handle login error
      //   return;
      // }

      const cookies = response.headers.get('Set-Cookie')

      const entities = cookies
        ? Object.fromEntries(cookies
            .split('; ')
            .map((x: string) => x.split('=')))
        : {}

      const token = entities['jwt']
      localStorage.setItem('jwt', token);

      // dispatch({ type: ActionType.SET_USER, payload: response.data });
      dispatch({ type: ActionType.SET_USER, payload: data});

      router.push(`/`)
      // axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <AuthLayout
      title="Sign in to account"
      subtitle={
        <>
          Don’t have an account?{' '}
          <Link href="/register" className="text-ainblue-800">
            Sign up
          </Link>{' '}
          for a free trial.
        </>
      }
    >
      <div className="space-y-4">
        <TextField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button color="cyan" className="py-3 mt-10 w-full" onClick={handleLogin}>
        Sign in to account
      </Button>
    </AuthLayout>
  );
}
