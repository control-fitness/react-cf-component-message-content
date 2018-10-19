import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MessageContent = function MessageContent(props) {
  const { icon, title, message } = props;
  return (
    <Segment basic textAlign="center">
      <Image centered src={icon} />
      <Header as="h4" textAlign="center">
        {title}
        <Header.Subheader>
          {message}
        </Header.Subheader>
      </Header>
    </Segment>
  );
};

MessageContent.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageContent;
