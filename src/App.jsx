import { useEffect, useState } from 'react';
import styled from 'styled-components';

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function App() {
  const [text, setText] = useState('');
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [numMatched, setNumMatched] = useState(0);

  const handleInput = (event) => {
    let matches = [];
    setText(event.target.value.toLowerCase());
    let toParse = event.target.value.replace(/\s+/g, '').toLowerCase();
    [...toParse].forEach((letter) => {
      if (!matches.includes(letter)) matches.push(letter);
      matches.sort();
      console.log(matches);
    });
    const res = alphabet.map((letter) => {
      return matches.includes(letter)
        ? { letter, typed: true }
        : { letter, typed: false };
    });
    setMatchedLetters(res);
  };

  useEffect(() => {
    const count = matchedLetters.filter((l) => l.typed == true).length;
    setNumMatched(count);
  }, [matchedLetters]);

  return (
    <Container>
      {/* <h1>pangrammr</h1> */}
      <Input type="text" value={text} onChange={handleInput} />
      <Letters>
        {matchedLetters.map((l) => (
          <P typed={l.typed} key={l.letter}>
            {l.letter}
          </P>
        ))}
      </Letters>
      <div>
        <p>{numMatched}/26</p>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Letters = styled.div`
  display: flex;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: transparent;
  border: none;
  border-bottom: black 1px solid;

  outline: none;
  min-width: 400px;
  width: 100vw;
  font-size: 4rem;
  font-family: 'Cabinet Grotesk';
`;

let P = styled.p`
  color: ${(props) => (props.typed ? '#000' : '#A8A8A8')};
  letter-spacing: 1rem;
  font-size: 2rem;
`;
