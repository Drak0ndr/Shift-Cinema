import { Box, Flex } from '@mantine/core'

import styles from './StarRaiting.module.css'
export const StarRaiting = ({ raiting }: { raiting: number }) => (
   <Flex gap={4}>
      {[1, 2, 3, 4, 5].map((item) => {
         const bg =
            raiting + 1 > item
               ? `linear-gradient(to right, #FFB219 ${raiting > item ? '100%' : (raiting % 1) * 100 + '%'}, #CED2DA ${raiting > item ? '100%' : (raiting % 1) * 100 + '%'} 100%)`
               : '#CED2DA'
         return <Box className={styles.star} bg={bg} key={item} />
      })}
   </Flex>
)
