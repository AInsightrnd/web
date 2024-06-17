'use client'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthLayout } from '../../../components/AuthLayout';
import Link from 'next/link';
import { TextField } from '../../../components/Fields';
import { Button } from '../../../components/Button';
import { useRouter } from 'next/navigation';
import { ActionType } from '../../../types/DispatchActions';
import { User } from '../../../types/User';
import { GlobalContext } from '@/context/GlobalContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()
  const { state, dispatch } = useContext(GlobalContext)
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://0dmjqc0xyd.execute-api.ap-northeast-2.amazonaws.com/dev/signin',
        { email, password },
        { withCredentials: true}
      );

      console.log('>>> login response: ', response.data)
      dispatch({
        type: ActionType.SET_USER,
        payload: {
          id: response.data.data.id,
          email: response.data.data.email,
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
          signedin: true,
          token: response.data.data.token
        }
      });

      if (response.status === 200) {
        router.push('/')
      }
    } catch (error) {
      // Handle login error
      console.error('exception: ', (error as Error).message)
    }
  };

  return (
    <>
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
    </>
  );
}
