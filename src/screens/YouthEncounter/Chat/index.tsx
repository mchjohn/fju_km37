import { VStack } from 'native-base';

import { avatar_fju, chat_photo } from '@constants/img_url';

import { ChatMessage } from '@components/ChatMessage';
import { ChatMessagePhoto } from '@components/ChatMessagePhoto';

export function Chat() {
  return (
    <VStack space={2} mb={8}>
      <ChatMessage
        reversed={false}
        borderRadiusLeft={8}
        borderRadiusRight={0}
        align="flex-end"
        color="gray.500"
        message="O que é o encontro jovem?"
      />

      <ChatMessage
        borderRadiusLeft={0}
        borderRadiusRight={8}
        uri={avatar_fju}
        message="Uma reunião diferenciada voltada para jovens."
      />

      <ChatMessage
        reversed={false}
        borderRadiusLeft={8}
        borderRadiusRight={0}
        align="flex-end"
        color="gray.500"
        message="Quem pode participar?"
      />

      <ChatMessage
        borderRadiusLeft={0}
        borderRadiusRight={8}
        uri={avatar_fju}
        message="Jovens com 15 anos ou mais. Se tu curte cantar, dançar pular, jogar bola, vôlei... Aqui fazemos tudo isso na presença do Senhor."
      />

      <ChatMessage
        reversed={false}
        borderRadiusLeft={8}
        borderRadiusRight={0}
        align="flex-end"
        color="gray.500"
        message="Show! Onde é? E que horas começa?"
      />

      <ChatMessage
        borderRadiusLeft={0}
        borderRadiusRight={8}
        uri={avatar_fju}
        message="Então, o encontro acontece em todas as Igrejas Universal sempre aos domingos às 16 horas."
      />

      <ChatMessage
        borderRadiusLeft={0}
        borderRadiusRight={8}
        uri={avatar_fju}
        message="Mas te convido pra vir aqui na Universal do KM37. Pode chamar geral que vocês vão sair daqui transformados."
      />

      <ChatMessage
        reversed={false}
        borderRadiusLeft={8}
        borderRadiusRight={0}
        align="flex-end"
        color="gray.500"
        message="Já é, combinado, vou mesmo!!"
      />

      <ChatMessage
        borderRadiusLeft={0}
        borderRadiusRight={8}
        uri={avatar_fju}
        message="Vou te mandar umas fotos dos encontros pra tu ver como fica muito top."
      />

      <ChatMessage
        borderRadiusLeft={0}
        borderRadiusRight={8}
        uri={avatar_fju}
        message="Se liga só nas fotos que top!"
      >
        <ChatMessagePhoto uri1={chat_photo} uri2={chat_photo} />
      </ChatMessage>
    </VStack>
  );
}
