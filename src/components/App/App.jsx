import { Component } from 'react';
import Header from '../Header/Header';
import Random from '../Random/Random';
import ItemList from '../ItemList/ItemList';
import Person from '../Person/Person';

class App extends Component {
  state = {
    showRandomplanet: true,
    selectedPerson: 5,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Random />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <Person personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
