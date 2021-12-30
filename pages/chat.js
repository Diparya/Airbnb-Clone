import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.directLine = new DirectLine({ token: '0Hz2RNl1AK8.6F-qXtIWY2R2Dc-qgbCeum28OJyc7vOCJciToGYhrx4' });
  }OR

  render() {
    return (
      <ReactWebChat directLine={ this.directLine } userID='b6d1a717-3f03-4905-b078-94b138b284a2' />

    );
  }
}