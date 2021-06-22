import Header from '../Header/Header';
import Random from '../Random/Random';
import ItemList from '../ItemList/ItemList';

const App = () => {
  return (
    <div>
      <Header />
      <Random />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
      </div>
    </div>
  );
};

export default App;
