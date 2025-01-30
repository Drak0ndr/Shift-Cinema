import '@mantine/core/styles.css'
import './globals.css'

import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'

import { getSession } from '@/api/requests/getSession'
import { BottomNav } from '@/components/BottomNav/BottomNav'
import { ConfirmModal } from '@/components/ConfirmModal/ConfirmModal'
import { Navigation } from '@/components/Navigation/Navigation'
import { inter } from '@/constants/fonts'
import { theme } from '@/constants/theme'
import { AuthContextProvider } from '@/contexts/auth/AuthContextProvider'
import { QueryProvider } from '@/contexts/query/QueryProvider'

export default async function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   const getSessionResponce = await getSession({ config: { validateStatus: (status) => status < 600 } })

   return (
      <html lang="ru">
         <head>
            <ColorSchemeScript defaultColorScheme="light" />
         </head>
         <body className={inter.className}>
            <MantineProvider theme={theme} defaultColorScheme="light">
               <QueryProvider>
                  <AuthContextProvider defaultUser={getSessionResponce.data.user}>
                     <ModalsProvider modals={{ customConfirmModal: ConfirmModal }}>
                        <Navigation />
                        <Box component="main" className="container">
                           {children}
                        </Box>
                        <BottomNav />
                     </ModalsProvider>
                  </AuthContextProvider>
               </QueryProvider>
            </MantineProvider>
         </body>
      </html>
   )
}
