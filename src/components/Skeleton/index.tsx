import { Skeleton as NBSkeleton } from 'native-base';

export function Skeleton() {
  return (
    <NBSkeleton
      mt={2}
      h="224px"
      rounded="lg"
      endColor="gray.400"
      startColor="gray.300"
    />
  );
}
