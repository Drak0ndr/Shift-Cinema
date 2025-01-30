import { Flex, Title } from '@mantine/core'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ProfileForm } from './(components)/ProfileForm/ProfileForm'

export const metadata: Metadata = {
   title: 'Профиль - ШИФТ CINEMA'
}

const Profile = async () => {
   const cookieStore = await cookies()
   const token = cookieStore.get('authToken')?.value
   
   if (!token) redirect('/auth')

   return (
      <Flex direction="column" gap={24} mt={48}>
         <Title order={2}>Профиль</Title>
         <ProfileForm />
      </Flex>
   )
}

export default Profile
