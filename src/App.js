import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import UpdateProduct from './components/UpdateProduct';
import AddProduct from './components/AddProduct';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>This is Ecomm-dashboard</h1>
        <Routes>
          <Route path="/login" element = { <Login />} />
          <Route path="/register" element = { <Register />} />
          <Route path="/add" element = { <AddProduct />} />
          <Route path="/update" element = { <UpdateProduct />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
