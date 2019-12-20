import * as React from 'react';
import { storiesOf } from '@storybook/react';
import debug from 'debug';

const log = debug('story:app');

class AppDemo extends React.Component {
  constructor(props) {
    super(props);
  }
}

storiesOf('app', module).add('app', () => <AppDemo />);
