import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


import { Welcome } from '@storybook/react/demo';
import Button from '../components/button';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => (
  <Button title={text('title', 'Go to checkout')} />
));
