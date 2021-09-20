import { Component } from 'react';
import Error from '../Error/Error';
import ItemList from '../ItemList/ItemList';
import Person from '../Person/Person';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 5,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <Person personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
