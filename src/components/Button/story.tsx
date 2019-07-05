import React from 'react';
import { Text } from 'react-native-web';

import { storiesOf } from '../../../storybook/storiesOf';
import { action } from '@storybook/addon-actions';

import { Button } from './index';

storiesOf('Button', module)
    .add('with text', () => (
        <Button onPress={action('clicked-text')}>
            <Text>Hello Button</Text>
        </Button>
    ))
    .add('with some emoji', () => (
        <Button onPress={action('clicked-emoji')}>
            <Text>😀 😎 👍 💯</Text>
        </Button>
    ));
