import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Title, Search, About, PokeCard, PokeDetail } from './components';
import { linkConstants } from './_constants';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokedex: this.props.pokedex
    }
  }
  onUpdate(searchText) {
    let newPokedex = this.props.pokedex.filter(p => p.indexOf(searchText) != -1)
    this.setState({ pokedex: newPokedex })
    console.log(searchText);
  }
  render() {
    return (
      <div>
        <Title text="PokePedia" />
        <Search filter={this.onUpdate.bind(this)} />
        <Router>
          <Route exact path={linkConstants.HOME} component={App} />
          <Route exact path={linkConstants.ABOUT} component={About} />
          <Route exact path={linkConstants.POKE_DETAIL} component={PokeDetail} />
        </Router>

        <section className="PokeList">
          {this.state.pokedex.map(p => <PokeCard name={p} />)}
        </section>
      </div>
    );
  }
}

export default App;
