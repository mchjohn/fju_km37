import { ReactNode } from 'react';
import { PresenceTransition } from 'native-base';

type CardProps = {
  children: ReactNode;
};

export function Transition({ children }: CardProps) {
  return (
    <PresenceTransition
      visible={true}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 500,
        },
      }}
    >
      {children}
    </PresenceTransition>
  );
}
