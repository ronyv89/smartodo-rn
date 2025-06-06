/**
 * SmarTODO App
 * A React Native application with UI Kitten components
 */

import React from 'react';
import {IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {AppNavigator} from './navigation/AppNavigator';
// Use eva light theme directly until we set up custom theming

/**
 * Main application component
 */
export const App = (): React.ReactElement => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

export default App;
