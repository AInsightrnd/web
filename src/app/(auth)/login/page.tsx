import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '로그인',
}

export default function Login() {
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
      <form>
        <div className="space-y-4">
          <TextField
            label="이메일"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="이메일"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호"
            required
          />
        </div>
        <Button type="submit" color="cyan" className="py-3 mt-10 w-full">
          로그인
        </Button>
      </form>
    </AuthLayout>
  )
}
