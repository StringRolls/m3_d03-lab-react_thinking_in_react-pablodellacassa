// src/App.js
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

const products = [...data];

function App() {
  return (
    <div className="container">
      <FilterableProductTable productListDB={products} />
    </div>
  );
}

export default App;