import { Modal, Text } from 'native-base';

type ModalInfoProps = {
  title: string;
  isOpen: boolean;
  description: string;
  onClose: () => void;
};

export function ModalInfo({
  title,
  isOpen,
  description,
  onClose,
}: ModalInfoProps) {
  return (
    <Modal
      size="full"
      isOpen={isOpen}
      onClose={onClose}
      animationPreset="slide"
    >
      <Modal.Content h="80%" bottom={0} mt="auto">
        <Modal.CloseButton _icon={{ color: 'white' }} />
        <Modal.Header _text={{ color: 'white' }} bg="secondary.500">
          {title}
        </Modal.Header>
        <Modal.Body bg="primary.800" h="530px">
          <Text color="white">{description?.replace(/[/]/g, '\n\n')}</Text>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
