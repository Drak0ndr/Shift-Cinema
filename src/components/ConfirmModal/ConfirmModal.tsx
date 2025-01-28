import { Button, Flex, Image, Modal, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { ContextModalProps } from '@mantine/modals'

interface ConfirmModalProps {
   title: string
   cancelText: string
   cancelOnClick: () => void
   confirmText: string
   confirmOnClick: () => void
}

export const ConfirmModal = ({ context, id, innerProps }: ContextModalProps<ConfirmModalProps>) => (
   <>
      <Flex direction="column" align="center" maw={400}>
         <Image src="/Question.jpg" w={56} />
         <Title order={3} mt={16}>
            {innerProps.title}
         </Title>
         <Button
            variant="outline"
            mt={40}
            w="100%"
            onClick={() => {
               innerProps.cancelOnClick && innerProps.cancelOnClick()
               context.closeModal(id)
            }}
         >
            {innerProps.cancelText}
         </Button>
         <Button
            mt={16}
            w="100%"
            onClick={() => {
               innerProps.confirmOnClick()
               context.closeModal(id)
            }}
         >
            {innerProps.confirmText}
         </Button>
      </Flex>
   </>
)
