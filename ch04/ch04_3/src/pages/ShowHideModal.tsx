import {useCallback} from 'react'
import {useToggle} from '../hooks'
import {Title, Subtitle} from '../components'
import {Modal, ModalContent, ModalAction, Button} from '../theme/daisyui'
import * as D from '../data'

export default function ShowHideModal() {
  const [open, toggleOpen] = useToggle(false)
  const onAccept = useCallback(() => {
    toggleOpen()
  }, [toggleOpen])

  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>
          open modal
        </Button>
      </div>
      <Modal open={open}>
        <ModalContent
          onCloseIconClicked={toggleOpen}
          closeIconClassName="btn-primary btn-outline">
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="w-24 normal-case btn-primary btn-sm" onClick={onAccept}>
              Accept
            </Button>
            <Button className="w-24 normal-case btn-sm" onClick={toggleOpen}>
              Close
            </Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  )
}
