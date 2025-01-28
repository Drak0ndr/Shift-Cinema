import { Box, Button, SimpleGrid, Text, Title } from '@mantine/core'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import { FilmImage } from '@/components/FilmImage/FilmImage'
import { FilmRating } from '@/components/FilmRating/FilmRating'
import { getToday } from '@/api/requests/getToday'
import { URL } from '@/constants/url'

export const metadata: Metadata = {
   title: 'ШИФТ CINEMA',
}

const Home = async () => {
   const getTodayResponse = await getToday()

   return (
      <Box mt={48}>
         <Title order={2}>Афиша</Title>
         <SimpleGrid spacing={32} mt={16} className={styles.grid}>
            {getTodayResponse.data.films.map((item) => (
               <Box key={item.id}>
                  <FilmImage
                     img={`${URL}/${item.img}`}
                     genre={item.genres[0]}
                     country={item.country.name}
                     releaseDate={item.releaseDate}
                  />
                  <Box mt={16}>
                     <Title order={3}>{item.name}</Title>
                     <Text size="sm" c="#637083">
                        Фильм
                     </Text>
                     <FilmRating rating={Number(item.userRatings.kinopoisk)} />
                     <Button
                        size="md"
                        radius={16}
                        p="16px 32px"
                        w="100%"
                        h="auto"
                        mt={16}
                        component={Link}
                        href={`/${item.id}`}
                     >
                        Подробнее
                     </Button>
                  </Box>
               </Box>
            ))}
         </SimpleGrid>
      </Box>
   )
}

export default Home
