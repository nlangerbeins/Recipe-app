import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import ProductPage from './ProductPage';
import MainPage from './MainPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/CurrentRecipe/:id' element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
