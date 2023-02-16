import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { theme } from '@styles/theme';

type LinearGradientCardProps = {
  children: ReactNode;
  colors?: (string | number)[];
};

const defaultColors = [theme.colors.flag.benjamin, theme.colors.flag.juda];

export function LinearGradientCard({
  children,
  colors = defaultColors,
}: LinearGradientCardProps) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colors}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});
