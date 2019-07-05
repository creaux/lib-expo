import { configure } from '@storybook/react';
import { loadStories } from '../storybook/storyLoader';

configure(loadStories, module);