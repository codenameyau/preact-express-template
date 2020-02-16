import styled from 'styled-components';
import { h } from 'preact';

const StyledHome = styled.div`
  padding: 50px 20px;
  min-height: 100%;
  width: 100%;
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      <p>
        <a href="/api"> Click here to visit the API</a>
      </p>
    </StyledHome>
  );
};

export default Home;
