'use client'

import { Box, Button, Flex, SegmentedControl, Text } from '@mantine/core'
import { useState } from 'react'

import styles from './SheldueTabs.module.css'
export const SheldueTabs = ({ ...props }) => {
   const [tabValue, setTabValue] = useState('react')
   const [activeBtn, setActiveBtn] = useState(0)
   return (
      <Box>
         <Box className={styles.container} {...props}>
            <SegmentedControl
               className={styles.tabs}
               radius="16px"
               value={tabValue}
               onChange={setTabValue}
               data={[
                  { label: 'React', value: 'react' },
                  { label: 'Angular', value: 'ng' },
                  { label: 'Vue', value: 'vue' },
                  { label: 'Svelte', value: 'svelte' },
                  { label: 'Svelte1', value: 'svelte1' },
                  { label: 'Svelte2', value: 'svelte2' },
                  { label: 'Svelte3', value: 'svelte3' },
                  { label: 'Svelte4', value: 'svelte4' }
               ]}
            />
         </Box>
         <Box mt={24}>
            <Text size="xs" c="#344051">
               Красный зал
            </Text>
            <Flex gap={8} mt={16} wrap="wrap">
               <Button
                  variant="outline"
                  color="#141C24"
                  className={`${styles.btn} ${activeBtn == 1 ? styles.active : ''}`}
                  onClick={() => (activeBtn == 1 ? setActiveBtn(0) : setActiveBtn(1))}
               >
                  11:40
               </Button>
               <Button
                  variant="outline"
                  color="#141C24"
                  className={`${styles.btn} ${activeBtn == 2 ? styles.active : ''}`}
                  onClick={() => (activeBtn == 2 ? setActiveBtn(0) : setActiveBtn(2))}
               >
                  12:40
               </Button>
               <Button
                  variant="outline"
                  color="#141C24"
                  className={`${styles.btn} ${activeBtn == 2 ? styles.active : ''}`}
                  onClick={() => (activeBtn == 2 ? setActiveBtn(0) : setActiveBtn(2))}
               >
                  12:40
               </Button>
               <Button
                  variant="outline"
                  color="#141C24"
                  className={`${styles.btn} ${activeBtn == 2 ? styles.active : ''}`}
                  onClick={() => (activeBtn == 2 ? setActiveBtn(0) : setActiveBtn(2))}
               >
                  12:40
               </Button>
               <Button
                  variant="outline"
                  color="#141C24"
                  className={`${styles.btn} ${activeBtn == 2 ? styles.active : ''}`}
                  onClick={() => (activeBtn == 2 ? setActiveBtn(0) : setActiveBtn(2))}
               >
                  12:40
               </Button>
            </Flex>
         </Box>
      </Box>
   )
}
