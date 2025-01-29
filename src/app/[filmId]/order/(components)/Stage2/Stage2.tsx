'use client'

import { Button, Flex, Input } from '@mantine/core'
import { FieldValues, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { useOrder } from '@/contexts/orderContext/useOrder'

export const Stage2 = () => {
   const { details, stage, setStage } = useOrder()
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm()

   const onSubmit = (data: FieldValues) => {
      details.person.firstname = data.firstname
      details.person.lastname = data.lastname
      details.person.phone = data.phone.split(' ').join('')
      setStage(stage + 1)
   }

   return (
      <Flex
         direction="column"
         gap={24}
         mt={24}
         w="100%"
         maw={368}
         component="form"
         onSubmit={handleSubmit(onSubmit)}
      >
         <Input.Wrapper
            label="Фамилия"
            withAsterisk
            error={`${errors.lastname?.type ? errors.lastname?.type : ''}`}
         >
            <Input placeholder="Фамилия" {...register('lastname', { required: true, maxLength: 60 })} />
         </Input.Wrapper>
         <Input.Wrapper
            label="Имя"
            withAsterisk
            error={`${errors.firstname?.type ? errors.firstname?.type : ''}`}
         >
            <Input placeholder="Имя" {...register('firstname', { required: true })} />
         </Input.Wrapper>
         <Input.Wrapper
            label="Номер телефона"
            withAsterisk
            error={`${errors.phone?.type ? errors.phone?.type : ''}`}
         >
            <Input
               placeholder="Телефон"
               type="tel"
               component={InputMask}
               mask="8 999 999 99 99"
               maskChar=""
               {...register('phone', { required: true, minLength: 15 })}
            />
         </Input.Wrapper>
         <Input.Wrapper label="Email">
            <Input placeholder="Email" type="email" {...register('email')} />
         </Input.Wrapper>
         <Input.Wrapper label="Адрес">
            <Input placeholder="Адрес" {...register('addres')} />
         </Input.Wrapper>
         <Flex mt={24} gap={24}>
            <Button variant="outline" size="md" radius={16} p="16px auto" style={{ flex: 1 }} h="auto">
               Назад
            </Button>
            <Button size="md" radius={16} h="auto" p="16px" style={{ flex: 1 }} type="submit">
               Продолжить
            </Button>
         </Flex>
      </Flex>
   )
}
