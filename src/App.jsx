import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { alphabet, initial } from './state';

function App() {
  const [text, setText] = useState('');
  const [matchedLetters, setMatchedLetters] = useState(initial);
  const [numMatched, setNumMatched] = useState(0);
  const [inputLength, setInputLength] = useState(0);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) textAreaRef.current.focus();
  }, []);

  const handleInput = (event) => {
    let matches = [];
    setText(event.target.value.toLowerCase());
    const toParse = event.target.value.replace(/[^a-z]/g, '').toLowerCase();
    [...toParse].forEach((letter) => {
      if (!matches.includes(letter)) matches.push(letter);
      matches.sort();
    });
    const res = alphabet.map((letter) => {
      return matches.includes(letter)
        ? { letter, typed: true }
        : { letter, typed: false };
    });
    console.log(toParse.length);
    setInputLength(toParse.length);
    setMatchedLetters(res);
  };

  useEffect(() => {
    const count = matchedLetters.filter((l) => l.typed == true).length;
    setNumMatched(count);
  }, [matchedLetters]);

  return (
    <Container>
      <Header />
      <MainContent>
        <Input
          ref={textAreaRef}
          type="text"
          value={text}
          onChange={handleInput}
        />
        <Letters>
          {matchedLetters.map((l) => (
            <P typed={l.typed} key={l.letter}>
              {l.letter}
            </P>
          ))}
        </Letters>
        <Matched matched={numMatched}>
          <p>{numMatched}/26</p>
        </Matched>
        <div style={{ height: '20px', textAlign: 'center' }}>
          {numMatched == 26 && (
            <p>You found a pangram in {inputLength} letters!</p>
          )}
        </div>
      </MainContent>
      <Footer>
        <a href="https://twitter.com/jhrtn" target="_blank" rel="noreferrer">
          <p>show me your pangrams @jhrtn</p>
        </a>
      </Footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: min(64px, 8vw);
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Letters = styled.div`
  text-align: center;
  display: flex;
  align-self: center;
  margin-top: 64px;
  max-width: 100%;
  flex-wrap: wrap;
`;

const Matched = styled.div`
  align-self: center;
  margin: 32px;
  color: ${(props) =>
    props.matched > 0 ? `rgba(0,0,0,${props.matched / 26})` : 'transparent'};
`;

const Input = styled.textarea`
  padding: 0.5em;
  color: black;
  background: transparent;
  border: none;
  border-bottom: black 1px solid;
  width: 100%;
  outline: none;
  font-size: min(10vw, 3rem);
  font-family: 'Cabinet Grotesk';
  height: 400px;
  resize: none;
`;

const P = styled.span`
  color: ${(props) => (props.typed ? '#000' : '#A8A8A8')};
  letter-spacing: 1rem;
  font-size: 2rem;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  margin: 32px;
  color: #a8a8a8;

  p {
    font-size: 14px;
  }
  a {
    transition: color 0.4s linear;
    color: #a8a8a8;
    :hover {
      color: #000;
    }
  }
`;
