import { Component } from 'react';
import Header from '../Header/Header';
import PeoplePage from '../PeoplePage/PeoplePage';
import Random from '../Random/Random';

class App extends Component {
  state = {
    showRandomplanet: true,
  };

  render() {
    return (
      <div>
        <Header />
        <Random />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
