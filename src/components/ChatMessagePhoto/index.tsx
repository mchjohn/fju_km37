import { HStack, Text, Center, Image, ZStack } from 'native-base';

type ChatMessagePhotoProps = {
  uri1: string;
  uri2: string;
};

export function ChatMessagePhoto({ uri1, uri2 }: ChatMessagePhotoProps) {
  return (
    <HStack space={2}>
      <Image
        source={{
          uri: uri1,
        }}
        alt="Jovens louvando a Deus"
        size="lg"
        rounded={8}
      />
      <Center w={24}>
        <ZStack alignItems="center" justifyContent="center">
          <Image
            source={{
              uri: uri2,
            }}
            alt="Jovens louvando a Deus"
            size="lg"
            rounded={8}
          />
          <Center bg="gray.800" opacity={0.7} size="24" rounded="lg" />
          <Text color="white" fontSize="2xl" fontWeight="700">
            +10
          </Text>
        </ZStack>
      </Center>
    </HStack>
  );
}
