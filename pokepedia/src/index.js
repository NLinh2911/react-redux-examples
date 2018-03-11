import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const pokedex = [ 'pichu', 'bulbasaur', 'kingdra', 'horsea', 'pikachu', 'ivysaur', 'mew', 'charmeleon']
ReactDOM.render(<App pokedex={pokedex} />, document.getElementById('root'));
