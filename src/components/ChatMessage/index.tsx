import { HStack, Text, Avatar, Center } from 'native-base';

import { avatar_default } from '@constants/img_url';

type ChatMessageProps = {
  uri?: string;
  color?: string;
  align?: 'flex-start' | 'flex-end';
  message: string;
  reversed?: boolean;
  borderRadiusLeft: number;
  borderRadiusRight: number;
};

export function ChatMessage({
  uri = avatar_default,
  color = 'primary.500',
  align = 'flex-start',
  message,
  reversed = true,
  borderRadiusLeft,
  borderRadiusRight,
}: ChatMessageProps) {
  return (
    <HStack
      space={2}
      alignItems="center"
      justifyContent={align}
      reversed={reversed}>
      <Center
        py={2}
        px={4}
        maxW={64}
        bg={color}
        borderRadius={8}
        borderTopLeftRadius={borderRadiusLeft}
        borderTopRightRadius={borderRadiusRight}>
        <Text color="white" fontWeight="700">
          {message}
        </Text>
      </Center>
      <Avatar
        bg="primary.500"
        source={{
          uri: uri,
        }}
        size="sm">
        FJU
        <Avatar.Badge bg="green.500" />
      </Avatar>
    </HStack>
  );
}
