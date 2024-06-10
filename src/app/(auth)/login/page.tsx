'use client'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthLayout } from '../../../components/AuthLayout';
import Link from 'next/link';
import { TextField } from '../../../components/Fields';
import { Button } from '../../../components/Button';
import { useRouter } from 'next/navigation';
import { UserContext } from '../../../reducers/userContext';
import { Alerts } from '../../../components/Alerts';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter()
  const { setUser } = useContext(UserContext);
  

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://0dmjqc0xyd.execute-api.ap-northeast-2.amazonaws.com/dev/signin', { email, password });
      console.log('>>> login response: ', response.data)
      // Handle successful login
      const cookies = response.headers['Set-Cookie'];
      if (!cookies) {
        // Handle login error
        return;
      }

      const entities = cookies
        ? Object.fromEntries(cookies
            .split('; ')
            .map((x: string) => x.split('=')))
        : {}

      const token = entities['jwt']
      localStorage.setItem('jwt', token);
      setUser(response.data);

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
