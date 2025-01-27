import { Rating, Text } from '@mantine/core'
import styles from './FilmRating.module.css'
export const FilmRating = () => (
   <>
      <Rating size="md" defaultValue={3.7} fractions={10} readOnly mt={16} className={styles.rating} />
      <Text size="sm" c="#637083" mt={2}>
         Kinopoisk - 8.4
      </Text>
   </>
)
