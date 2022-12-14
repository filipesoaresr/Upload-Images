import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    // TODO MODAL WITH IMAGE AND EXTERNAL LINK
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent maxHeight="600px" maxWidth="900px">
        <ModalBody padding={0} bgColor="pGray.800">
          <Image src={imgUrl} maxH="600px" w="100%" objectFit="contain" />
        </ModalBody>
        <ModalFooter
          bg="gray.800"
          justifyContent="flex-start"
          borderBottomLeftRadius="6px"
          borderBottomRightRadius="6px"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
