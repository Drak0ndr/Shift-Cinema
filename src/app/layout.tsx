'use client'

import '@mantine/core/styles.css'
import './globals.css'

import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { ModalsProvider } from '@mantine/modals'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BottomNav } from '@/components/BottomNav/BottomNav'
import { ConfirmModal } from '@/components/ConfirmModal/ConfirmModal'
import { Navigation } from '@/components/Navigation/Navigation'
import { inter } from '@/constants/fonts'
import { theme } from '@/constants/theme'
import { AuthContextProvider } from '@/contexts/authContext/authContextProvider'

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   const isMobile = useMediaQuery('(width <= 500px)')

   return (
      <html lang="ru">
         <head>
            <ColorSchemeScript defaultColorScheme="light" />
         </head>
         <body className={inter.className}>
            <MantineProvider theme={theme} defaultColorScheme="light">
               <QueryClientProvider client={new QueryClient()}>
                  <AuthContextProvider>
                     <ModalsProvider modals={{ customConfirmModal: ConfirmModal }}>
                        {!isMobile && <Navigation />}
                        <Box component="main" className="container" mb={isMobile ? 65 : 10}>
                           {children}
                        </Box>
                        {isMobile && <BottomNav />}
                     </ModalsProvider>
                  </AuthContextProvider>
               </QueryClientProvider>
            </MantineProvider>
         </body>
      </html>
   )
}
