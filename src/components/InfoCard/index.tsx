import {
  Box,
  Image,
  Center,
  Button,
  AspectRatio,
  useDisclose,
} from 'native-base';

import { Skeleton } from '../Skeleton';
import { ModalInfo } from '../ModalInfo';
import { Transition } from '../Transition';

type InfoCardProps = {
  url: string;
  title: string;
  isLoading: boolean;
  description: string;
};

export function InfoCard({
  url,
  title,
  isLoading,
  description,
}: InfoCardProps) {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Transition>
          <Button
            p={0}
            mt={2}
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
        </Transition>
      )}

      <ModalInfo
        title={title}
        isOpen={isOpen}
        description={description}
        onClose={onClose}
      />
    </>
  );
}
