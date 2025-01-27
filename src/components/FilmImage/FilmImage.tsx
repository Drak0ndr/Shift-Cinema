import { Box, Flex, Image, Text } from '@mantine/core'

import styles from './FilmImage.module.css'
export const FilmImage = ({...props}) => (
   <Box pos="relative" {...props}>
      <Image src="/Картинка.png"/>
      <Flex direction="column" className={styles.film_info}>
         <Text size="sm" ta="center" fw={500}>
            Фантастика
         </Text>
         <Text size="sm" ta="center">
            США, 2023
         </Text>
      </Flex>
   </Box>
)
