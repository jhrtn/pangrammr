import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <H1>
        pangram<span style={{ color: '#A8A8A8' }}>mr</span>
      </H1>
      <Tooltip>
        A pangram is a sentence using every letter of a given alphabet (
        <i>in this case, Latin</i>) at least once.
      </Tooltip>
    </>
  );
};

export default Header;

const H1 = styled.h1`
  font-size: min(10vw, 4rem);
  font-weight: 500;
`;

const Tooltip = styled.p`
  margin-left: 32px;
  color: #a8a8a8;
`;
