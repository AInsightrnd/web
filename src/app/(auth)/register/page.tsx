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
        <div className="grid grid-cols-2 gap-6">
        <TextField
            name="last_name"
            type="text"
            autoComplete="family-name"
            placeholder="성"
            required
          />
          <TextField
            name="first_name"
            type="text"
            autoComplete="given-name"
            placeholder="이름"
            required
          />
    
          <TextField
            className="col-span-full"
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="이메일 주소 입력"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="비밀번호 입력"
            required
          />
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            name="referral_source"
          >
            <option>AltaVista search</option>
            <option>Super Bowl commercial</option>
            <option>Our route 34 city bus ad</option>
            <option>The “Never Use This” podcast</option>
          </SelectField>
        </div>
      
        <div className="mt-6 space-y-6">
           <div className="relative flex gap-x-4">
             <div className="flex h-6 items-center text-sm font-semibold text-gray-700">
                <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    className="h-4 w-4 mx-1 rounded border-ainblue-900 text-indigo-600 focus:ring-indigo-600 text-gray-700"
                    />     
                    I accept the <a className="mx-1 text-ainblue-900 hover:underline dark:text-primary-500" href="#"> Terms and Conditions</a>
                      </div>
                      </div>
                      </div>


        <Button type="submit" color="cyan" className="mt-8 w-full">
          가입하기
        </Button>
      </form>
    </AuthLayout>
  )
}
