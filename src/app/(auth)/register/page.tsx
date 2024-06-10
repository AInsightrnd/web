'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { AuthLayout } from '../../../components/AuthLayout';
import Link from 'next/link';
import { SelectField, TextField } from '../../../components/Fields';
import { Button } from '../../../components/Button';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const router = useRouter()

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://0dmjqc0xyd.execute-api.ap-northeast-2.amazonaws.com/dev/users', {
        email,
        password,
        firstname,
        lastname,
      });
      console.log(response.data);
      router.push(`/login`)
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <AuthLayout
      title="Sign up for an account"
      subtitle={
        <>
          Already registered?{' '}
          <Link href="/login" className="text-ainblue-800">
            Sign in
          </Link>{' '}
          to your account.
        </>
      }
    >
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        <TextField
          name="lastname"
          label="성 *"
          type="text"
          autoComplete="lastname"
          placeholder="성"
          required
          onChange={(e) => setLastname(e.target.value)}
        />
        <TextField
          name="firstname"
          type="text"
          label="이름 *"
          autoComplete="firstname"
          placeholder="이름"
          required
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          className="col-span-full"
          label="이메일 *"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="이메일 주소 입력"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="col-span-full"
          label="비밀번호 *"
          name="password"
          type="password"
          autoComplete="password"
          placeholder="비밀번호 입력"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <SelectField
          className="col-span-full"
          label="가입 경로"
          name="referral_source"
        >
          <option>SIDEX 시덱스</option>
          <option>오프라인 광고</option>
          <option>인터넷</option>
          <option>기타</option>
        </SelectField>
      </div>
      <Button
        color="cyan"
        className="mt-10 w-full"
        onClick={() => handleSubmit()}
      >
        가입하기
      </Button>
    </AuthLayout>
  );
}
