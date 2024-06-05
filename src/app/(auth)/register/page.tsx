import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
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
      <form>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          <TextField
            name="last_name"
            label="성 *"
            type="text"
            autoComplete="family-name"
            placeholder="성"
            required
          />
          <TextField
            name="first_name"
            type="text"
            label="이름 *"
            autoComplete="given-name"
            placeholder="이름"
            required
          />
          <TextField
            className="col-span-full"
            label="이메일 *"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="이메일 주소 입력"
            required
          />
          <TextField
            className="col-span-full"
            label="비밀번호 *"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="비밀번호 입력"
            required
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
        <Button type="submit" color="cyan" className="mt-10 w-full">
        가입하기
        </Button>
      </form>
    </AuthLayout>
  )
}
