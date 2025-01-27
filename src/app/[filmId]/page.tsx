import { FilmImage } from '@/components/FilmImage/FilmImage'
import { FilmRating } from '@/components/FilmRating/FilmRating'
import { Box, Button, Flex, SimpleGrid, Spoiler, Text, Title } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import styles from './page.module.css'
import { SheldueTabs } from './(components)/ScheduleTabs/SheldueTabs'
import Link from 'next/link'
const Film = ({ params }: { params: { filmId: string } }) => {
   return (
      <>
         <Flex gap={16} mt={24} component={Link} href="/" w="fit-content">
            <IconChevronLeft color="#97A1AF" />
            <Text fw={500} c="#637083">
               Назад
            </Text>
         </Flex>
         <SimpleGrid mt={24} className={styles.grid}>
            <Flex direction="column">
               <FilmImage className={styles.film_img} />
            </Flex>

            <Box>
               <Title order={1}>Уикенд с батей (16+) </Title>
               <Text size="sm" c="#637083">
                  Фильм
               </Text>
               <FilmRating />
               <Spoiler showLabel="раскрыть" hideLabel="скрыть" mt={16}>
                  Себастьян планирует провести уикенд со своей очаровательной невестой Элли и ее семьей в
                  их роскошном фамильном поместье, где есть собственное поле для гольфа, шикарная яхта и
                  даже ручной павлин.
               </Spoiler>
            </Box>
         </SimpleGrid>
         <Title order={2} mt={48}>
            Расписание
         </Title>
         <SheldueTabs mt={26} />
         <Button
            mt={24}
            size="md"
            component={Link}
            href={`/${params.filmId}/order`}
            className={styles.btn}
         >
            Продолжить
         </Button>
      </>
   )
}

export default Film
