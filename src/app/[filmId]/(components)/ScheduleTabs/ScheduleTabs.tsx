'use client'

import { Box, BoxProps, Button, Flex, SegmentedControl, Text } from '@mantine/core'
import { useEffect, useState } from 'react'

import styles from './ScheduleTabs.module.css'
import { getDate } from '@/utils/getDate'
import { WEEK_DAYS } from '@/constants/weekDays'
import { MONTHS } from '@/constants/months'
import { formatSeances } from '@/utils/formatSeances'
import { HALLS } from '@/constants/halls'
import { useOrder } from '@/contexts/orderContext/useOrder'

interface Props {
   data: getFilmScheduleResponse['schedules']
}
export const ScheduleTabs = ({ data, ...props }: Props & BoxProps) => {
   const [tabValue, setTabValue] = useState(data[0].date)
   const [activeBtn, setActiveBtn] = useState({ hall: '', time: '' })
   const { setSeance } = useOrder()

   useEffect(() => {
      setActiveBtn({ hall: '', time: '' })
   }, [tabValue])

   useEffect(() => {
      setSeance(tabValue, activeBtn.time)
   }, [activeBtn])

   return (
      <Box>
         <Box className={styles.container} {...props}>
            <SegmentedControl
               className={styles.tabs}
               radius="16px"
               value={tabValue}
               onChange={setTabValue}
               data={data.map((item) => {
                  const date = getDate(item.date)
                  return {
                     label: `${WEEK_DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]}`,
                     value: item.date
                  }
               })}
            />
         </Box>
         <Flex direction="column" gap={24} mt={24}>
            {data.map((item) => {
               if (item.date == tabValue) {
                  const seances = formatSeances(item.seances)
                  return Object.keys(seances).map((hall) => (
                     <Box key={hall}>
                        <Text size="xs" c="#344051">
                           {HALLS[hall]}
                        </Text>
                        <Flex gap={8} mt={16} wrap="wrap">
                           {seances[hall].map((time) => (
                              <Button
                                 key={time}
                                 variant="outline"
                                 color="#141C24"
                                 className={`${styles.btn} ${activeBtn.hall == hall && activeBtn.time == time ? styles.active : ''}`}
                                 onClick={() =>
                                    activeBtn.hall == hall && activeBtn.time == time
                                       ? setActiveBtn({ hall: '0', time: '0' })
                                       : setActiveBtn({ hall: hall, time: time })
                                 }
                              >
                                 {time}
                              </Button>
                           ))}
                        </Flex>
                     </Box>
                  ))
               }
            })}
         </Flex>
      </Box>
   )
}
