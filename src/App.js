import React from 'react';
import styled from 'styled-components';
import Die from './Die'
import './App.css'

const DiceWrap = styled.div`
  padding: 20px;
`;

const prompts = [
  'Fire Breaks Out',
  'Lost Item Found',
  'Creature Attack',
  'Violent Weather',
  'Betrayal Revealed',
  'Rival Returns',
];

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <DiceWrap><Die sides={prompts} id="diceA" /></DiceWrap>
          <DiceWrap><Die sides={prompts} id="diceB" /></DiceWrap>
          <DiceWrap><Die sides={prompts} id="diceC" /></DiceWrap>
        </main>
      </div>
    );
  }
}

export default App;
