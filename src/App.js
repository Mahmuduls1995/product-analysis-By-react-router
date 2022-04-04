import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import CustomerReview from './Components/CustomerReview/CustomerReview';
import Dashboards from './Components/Dashboards/Dashboards';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<CustomerReview></CustomerReview>}></Route>
        <Route path="/dashboards" element={<Dashboards></Dashboards>}></Route>
      </Routes>
    </div>
  );
}

export default App;
