import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container data-testid="container">
      <h1 data-testid="heading">About page</h1>
      <p data-testid="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat
        alias neque maxime nobis ad reprehenderit dolorum nemo porro, enim
        maiores quae blanditiis dolore ducimus fugit, non animi laudantium
        soluta, exercitationem aspernatur? Eligendi dolores quisquam quos
        doloribus explicabo harum facilis.
      </p>
    </Container>
  );
};

export default About;
