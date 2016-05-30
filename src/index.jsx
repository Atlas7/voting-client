import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

// <Voting pair={pair} hasVoted="Trainspotting" winner="Trainspotting"/>,
// <Voting pair={pair} winner="Trainspotting" />,
// <Voting pair={pair} hasVoted="Trainspotting" />,
ReactDOM.render(
<Voting pair={pair} hasVoted="Trainspotting"/>,
  document.getElementById('app')
);
