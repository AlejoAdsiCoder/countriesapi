import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Countries from './components/Countries';
import { Country } from './components/Country';

import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header/Header';
// import SelectSearch from './components/selectSearch/SelectSearch';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Countries />} />   
      <Route path="/:name" element={<Country />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
