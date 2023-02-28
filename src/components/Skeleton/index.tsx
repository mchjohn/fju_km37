import { ISkeletonProps, Skeleton as NBSkeleton } from 'native-base';

type SkeletonProps = ISkeletonProps;

export function Skeleton({ ...rest }: SkeletonProps) {
  return (
    <NBSkeleton
      mt={2}
      h="224px"
      rounded="lg"
      endColor="gray.400"
      startColor="gray.300"
      {...rest}
    />
  );
}
