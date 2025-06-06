import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  ApplicationProvider,
  Button,
  IconRegistry,
  Layout,
  Text,
  Icon,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

// Arrow icon for the button
const ArrowIcon = (props: any) => (
  <Icon {...props} name="arrow-forward-outline" />
);

/**
 * Home Screen component
 * Main screen of the SmarTODO application
 */
export const HomeScreen = (): React.ReactElement => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/task-management-abstract-concept_335657-3039.jpg',
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.logoContainer}>
          <Text style={styles.logoTextGreen}>Smar</Text>
          <Text style={styles.logoTextWhite}>TODO</Text>
        </View>
        <Text style={styles.description}>
          Organize your tasks effortlessly with our smart, AI assisted task
          management app
        </Text>
        <Button
          style={styles.getStartedButton}
          accessoryRight={ArrowIcon}
          size="large">
          GET STARTED
        </Button>
      </Layout>
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2d3436',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  logoTextGreen: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00b894',
    letterSpacing: 1,
  },
  logoTextWhite: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#dfe6e9',
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  getStartedButton: {
    borderRadius: 30,
    width: '80%',
    backgroundColor: '#00b894',
    borderColor: '#00b894',
  },
});
