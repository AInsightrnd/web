'use client'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
// import { type Metadata } from 'next'
import { ChangeEvent, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { createUser } from '../../apis/users'

export type EditFormItemType = {
  label: string
  key: string
  value: string | number | readonly string[] | boolean | undefined
  type: HTMLInputTypeAttribute
}

// export const metadata: Metadata = {
//   title: 'Sign Up',
// }

export default function Register() {
  const [editedItems, setEditedItems] = useState<EditFormItemType[]>([
    {key: 'email', label: '이메일 *', type: 'email', value: ''},
    {key: 'password', label: '비밀번호 *', type: 'password', value: ''},
    {key: 'lastname', label: '성 *', type: 'text', value: ''},
    {key: 'firstname', label: '이름 *', type: 'text', value: ''},
  ])

  const router = useRouter()

  function handleTextInputChange (event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const { name, value } = event.target
    const changedItems = editedItems.reduce((a: EditFormItemType[], c: EditFormItemType) => {
      if (c.key === name) {
        return [...a, {...c, value: value}]
      }
      return [...a, c]
    },[])
    setEditedItems(changedItems)
  }

  const handleSignup = async () => {
    const objPayload = editedItems.reduce((payload: any, item: EditFormItemType) => {
      payload[item.key] = item.value
      return payload
    }, {})
    console.log('signup: ', objPayload)
    const response = await createUser(objPayload)

    if (response.status === 201) {
      console.log('User created successfully')
      router.push(`/login`)
    } else {
      console.log('User creation failed')
    }
    
  }

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
            name="lastname"
            label="성 *"
            type="text"
            autoComplete="lastname"
            placeholder="성"
            required
            onChange={(e) => handleTextInputChange(e)}
          />
          <TextField
            name="firstname"
            type="text"
            label="이름 *"
            autoComplete="firstname"
            placeholder="이름"
            required
            onChange={(e) => handleTextInputChange(e)}
          />
          <TextField
            className="col-span-full"
            label="이메일 *"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="이메일 주소 입력"
            required
            onChange={(e) => handleTextInputChange(e)}
          />
          <TextField
            className="col-span-full"
            label="비밀번호 *"
            name="password"
            type="password"
            autoComplete="password"
            placeholder="비밀번호 입력"
            required
            onChange={(e) => handleTextInputChange(e)}
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
          type="submit"
          color="cyan"
          className="mt-10 w-full"
          onClick={() => handleSignup()}
        >
          가입하기
        </Button>
      </form>
    </AuthLayout>
  )
}
