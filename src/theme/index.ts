import * as eva from '@eva-design/eva';

/**
 * Application theme configuration
 * Based on UI Kitten theming guidelines
 * https://akveo.github.io/react-native-ui-kitten/docs/design-system/custom-theme
 */

// Export the light theme as default
const defaultTheme = eva.light;

// Export all themes
const themes = {
  light: eva.light,
  dark: eva.dark,
};

export {defaultTheme, themes};
