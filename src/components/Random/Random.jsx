import React from 'react';
import SwapiService from '../../services/swapi-services'
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';

import './Random.css';

class Random extends React.Component {

  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor() {
    super();
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 2500)
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false })
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  }

  updatePlanet= () => {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded)
    .catch(this.onError);
  }  

render() {
  
const { planet, loading, error } = this.state;

const hasData = !(loading || error);

const errorMessage = error ? <Error/> : null;
const spinner = loading ? <Spinner/> : null;
const content = hasData ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

};

export default Random;

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (

    <React.Fragment>
            <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}