import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const NoPage = () => {
  return (
    <Container textAlign="center">
      <Header as="h3">404 Error</Header>
      <p>Page not found.</p>
    </Container>
  );
}

export default NoPage;
