import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import CustomerReview from './Components/CustomerReview/CustomerReview';
import Dashboards from './Components/Dashboards/Dashboards';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blogs/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<CustomerReview></CustomerReview>}></Route>
        <Route path="/dashboards" element={<Dashboards></Dashboards>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
