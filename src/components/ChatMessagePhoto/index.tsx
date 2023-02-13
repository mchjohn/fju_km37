import { HStack, Text, Avatar, Center, Image, Box, ZStack } from 'native-base';

import { avatar_default } from '@constants/img_url';

type ChatMessagePhotoProps = {
  avatar_uri?: string;
  uri1: string;
  uri2: string;
  color?: string;
  align?: 'flex-start' | 'flex-end';
  message: string;
  reversed?: boolean;
  borderRadiusLeft: number;
  borderRadiusRight: number;
};

export function ChatMessagePhoto({
  avatar_uri = avatar_default,
  uri1,
  uri2,
  color = 'primary.500',
  align = 'flex-start',
  message,
  reversed = true,
  borderRadiusLeft,
  borderRadiusRight,
}: ChatMessagePhotoProps) {
  return (
    <HStack
      space={2}
      alignItems="center"
      justifyContent={align}
      reversed={reversed}>
      <Box
        py={2}
        px={4}
        maxW={64}
        bg={color}
        borderRadius={8}
        borderTopLeftRadius={borderRadiusLeft}
        borderTopRightRadius={borderRadiusRight}>
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
        <Text mt={2} color="white" fontWeight="700">
          {message}
        </Text>
      </Box>
      <Avatar
        bg="primary.500"
        source={{
          uri: avatar_uri,
        }}
        size="sm">
        FJU
        <Avatar.Badge bg="green.500" />
      </Avatar>
    </HStack>
  );
}
