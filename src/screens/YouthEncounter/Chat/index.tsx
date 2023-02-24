import { VStack } from 'native-base';

import { avatar_fju } from '@constants/img_url';

import { ChatMessage } from '@components/ChatMessage';
import { PhotoGallery } from '@components/PhotoGallery';

type ChatProps = {
  photos: { uri: string }[];
  isLoading: boolean;
};

export function Chat({ photos, isLoading }: ChatProps) {
  return (
    <VStack space={2} mb={8}>
      <ChatMessage
        align="flex-end"
        color="gray.500"
        reversed={false}
        borderRadiusLeft={8}
        borderRadiusRight={0}
        message="O que é o encontro jovem?"
      />

      <ChatMessage
        uri={avatar_fju}
        borderRadiusLeft={0}
        borderRadiusRight={8}
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
        message="Jovens com 15 anos ou mais. Se tu curte esporte, cantar, dançar, pular... Aqui fazemos tudo isso na presença de Deus."
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
        message="Vou te mandar umas fotos dos encontros pra tu ver como que fica muito top."
      />

      <ChatMessage
        borderRadiusLeft={0}
        borderRadiusRight={8}
        uri={avatar_fju}
        message="Se liga só nas fotos que top!"
      >
        <PhotoGallery photos={photos} isLoading={isLoading} />
      </ChatMessage>
    </VStack>
  );
}
