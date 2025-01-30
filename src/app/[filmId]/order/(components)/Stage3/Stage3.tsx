'use client'

import { Box, Button, Card, Flex, Input } from '@mantine/core'
import { FieldValues, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { useOrder } from '@/contexts/order/useOrder'

export const Stage3 = () => {
   const { details, stage, setStage } = useOrder()
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm()

   const onSubmit = (data: FieldValues) => {
      details.debitCard.pan = data.pan
      details.debitCard.expireDate = data.expireDate
      details.debitCard.cvv = data.cvv

      setStage(stage + 1)
   }

   return (
      <Box component="form" maw={368} onSubmit={handleSubmit(onSubmit)}>
         <Card mt={24} bg="#F3F4F6" component="form" w="100%">
            <Input.Wrapper
               label="Номер"
               withAsterisk
               error={`${errors.pan?.type ? errors.pan?.type : ''}`}
            >
               <Input
                  placeholder="0000 0000"
                  component={InputMask}
                  mask="9999 9999"
                  maskChar=""
                  {...register('pan', { required: true, minLength: 9 })}
               />
            </Input.Wrapper>
            <Flex gap={24} mt={16}>
               <Input.Wrapper
                  label="Срок"
                  withAsterisk
                  error={`${errors.expireDate?.type ? errors.expireDate?.type : ''}`}
               >
                  <Input
                     placeholder="00/00"
                     component={InputMask}
                     mask="99/99"
                     maskChar=""
                     {...register('expireDate', { required: true, minLength: 5 })}
                  />
               </Input.Wrapper>
               <Input.Wrapper
                  label="CVV"
                  withAsterisk
                  error={`${errors.cvv?.type ? errors.cvv?.type : ''}`}
               >
                  <Input
                     placeholder="000"
                     component={InputMask}
                     mask="999"
                     maskChar=""
                     {...register('cvv', { required: true, minLength: 3 })}
                  />
               </Input.Wrapper>
            </Flex>
         </Card>
         <Flex mt={24} gap={24}>
            <Button variant="default" flex={1} onClick={() => setStage(stage - 1)}>
               Назад
            </Button>
            <Button flex={1} type="submit">
               Оплатить
            </Button>
         </Flex>
      </Box>
   )
}
