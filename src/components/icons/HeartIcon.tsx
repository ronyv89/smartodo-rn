import React from 'react';
import { ImageProps } from 'react-native';
import { Icon } from '@ui-kitten/components';

/**
 * Heart Icon component using UI Kitten's Icon
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
export const HeartIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name='heart'/>
);
