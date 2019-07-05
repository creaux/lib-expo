
//
// Load stories for reactjs
// This is @storybook/react configuration file

import { configure } from '@storybook/react';
import { loadStories } from './storyLoader';

configure(loadStories, module);