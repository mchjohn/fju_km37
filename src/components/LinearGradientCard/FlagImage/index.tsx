import { Image as ChakraImage } from 'native-base';

type FlagImageProps = {
  uri: string;
  alt: string;
};

export function FlagImage({ uri, alt }: FlagImageProps) {
  return (
    <ChakraImage
      source={{
        uri: uri,
      }}
      size="2xl"
      maxH="152px"
      maxW="152px"
      alt={alt}
      rounded={8}
    />
  );
}
