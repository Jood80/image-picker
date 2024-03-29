module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
