import { Component } from 'react';
import List from 'components/List/List';
import { getDogs } from 'services/dogApi';
import { Button } from '@mui/material';

class DogsList extends Component {
  state = { dogs: [] };

  getDogsImages = () => {
    const {
      startRequest,
      endRequestError,
      endRequestSuccess,
      loaderOff,
    } = this.props.methods;
    startRequest();
    getDogs()
      .then((dogs) => {
        endRequestSuccess();
        this.setState({ dogs });
      })
      .catch((err) =>
        endRequestError({
          component: 'dogs',
          text: err.message,
        })
      )
      .finally(loaderOff);
  };

  render() {
    const { dogs } = this.state;
    return dogs.length ? (
      <List items={dogs} title='Dogs' />
    ) : (
      <Button
        variant='contained'
        onClick={this.getDogsImages}>
        Fetch Dogs
      </Button>
    );
  }
}

export default DogsList;
