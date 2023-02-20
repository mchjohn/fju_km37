import {
  Box,
  Image,
  Center,
  Button,
  AspectRatio,
  useDisclose,
} from 'native-base';

import { ModalInfo } from '../ModalInfo';

type InfoCardProps = {
  url: string;
  title: string;
  description: string;
};

export function InfoCard({ url, title, description }: InfoCardProps) {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <Button
        p={0}
        mt={4}
        onPress={onOpen}
        variant="unstyled"
        alignItems="center"
      >
        <Box
          w="100%"
          rounded="lg"
          overflow="hidden"
          borderWidth="1"
          borderColor="gray.100"
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: url,
                }}
                resizeMode="stretch"
                alt="Tema do encontro"
              />
            </AspectRatio>
            <Center
              px="3"
              py="1.5"
              bg="secondary.500"
              bottom="0"
              position="absolute"
              roundedTopRight={4}
              _text={{
                fontSize: 'xs',
                color: 'gray.50',
                fontWeight: '700',
              }}
            >
              {title}
            </Center>
          </Box>
        </Box>
      </Button>

      <ModalInfo
        title={title}
        isOpen={isOpen}
        description={description}
        onClose={onClose}
      />
    </>
  );
}
