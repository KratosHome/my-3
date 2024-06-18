import { auth } from '@/server/auth/auth'
import { createUsers } from '@/server/users/userController'
import { redirect } from 'next/navigation'
import React from 'react'
import ForgotPassword from '@/components/sections/auth/ForgotPassword/ForgotPassword'
import AnimatedPage from '@/components/animation/AnimatedPage/AnimatedPage'

export default async function Page({ params: { locale } }: any) {
  const session = await auth()

  if (session?.user) {
    await createUsers(session)
    redirect(`/${locale}/profile`)
  }
  return (
    <AnimatedPage>
      <ForgotPassword />
    </AnimatedPage>
  )
}
