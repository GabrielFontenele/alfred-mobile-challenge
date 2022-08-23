const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const uiColors = {
  blue200: '#e0fbfc',
  blue300: '#98c1d9',
  blue600: '#3d5a80',
  blue700: '#293241',
  red: '#ee6c4d'
}

export default {
  light: {
    ...uiColors,
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    ...uiColors,
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
