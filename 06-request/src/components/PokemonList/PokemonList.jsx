import { Component } from 'react';
import List from 'components/List/List';
import { getPokemons } from 'services/pokeApi';

class PokemonList extends Component {
  state = { pokemons: [] };
  myPokemons = new PokemonApi();

  async componentDidMount() {
    const {
      startRequest,
      endRequestError,
      endRequestSuccess,
      loaderOff,
    } = this.props.methods;

    try {
      startRequest();
      await myPokemons.getPokemons();
      this.setState({ pokemons: myPokemons.pokemons });
      endRequestSuccess();
    } catch (error) {
      endRequestError({
        component: 'pokemons',
        text: error.message,
      });
    }
    loaderOff();

    // const {
    //   startRequest,
    //   endRequestError,
    //   endRequestSuccess,
    //   loaderOff,
    // } = this.props.methods;
    // try {
    //   console.log('pokemons request');
    //   startRequest();
    //   const pokemons = await getPokemons();
    //   this.setState({ pokemons });
    //   endRequestSuccess();
    // } catch (error) {
    //   endRequestError({
    //     component: 'pokemons',
    //     text: error.message,
    //   });
    // }
    // loaderOff();
  }

  render() {
    const { pokemons } = this.state;
    return <List items={pokemons} title='Pokemons' />;
  }
}

export default PokemonList;
