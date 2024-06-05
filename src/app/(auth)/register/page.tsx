import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { type Metadata } from 'next'


export const metadata: Metadata = {
  title: '회원가입',
}

export default function Register() {
  return (
    <AuthLayout
      title="회원가입"
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
        <div className="grid grid-cols-2 gap-4">
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
            label="How did you hear about us?"
            name="referral_source"
          >
            <option>AltaVista search</option>
            <option>Super Bowl commercial</option>
            <option>Our route 34 city bus ad</option>
            <option>The “Never Use This” podcast</option>
          </SelectField>
          </div>

          <div className="grid grid-cols-2 mt-8 gap-2">
          <h2 className="text-base font-semibold leading-7 text-ainblue-800">정보 입력</h2>
          <TextField
            className="col-span-full"
            name="hospital"
            type="hospital"
            placeholder="병원명"
            required
          />

        </div>

        
      
        <div className="mt-6 space-y-6">
           <div className="relative flex gap-x-4">
             <div className="flex h-6 items-center text-sm font-semibold text-gray-700">
                <input
                    id="agree"
                    name="agree"
                    type="Checkbox"
                     required
                    className="h-4 w-4 mx-1 rounded  focus:ring-indigo-600 text-gray-700"
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
