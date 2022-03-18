import React from 'react';
import styled from 'styled-components';

type HomePageProps = {};

const Container = styled.div`
  background-color: tomato;
`;

const HomePage: React.FC<HomePageProps> = () => {
  return <Container>Home</Container>;
};

export default HomePage;
