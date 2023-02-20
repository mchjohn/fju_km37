module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@contexts': './src/contexts',
          '@services': './src/services',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@components': './src/components',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
