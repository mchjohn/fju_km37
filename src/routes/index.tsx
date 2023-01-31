import { NavigationContainer } from '@react-navigation/native';

import { PublicNavigation } from './public.routes';
import { PrivateNavigation } from './private.routes';

export function Navigation() {
  const auth = false;

  return (
    <NavigationContainer>
      {auth ? <PrivateNavigation /> : <PublicNavigation />}
    </NavigationContainer>
  );
}
