
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Logout from './component/Logout/Logout';
import Project from './component/Project/Project';
import Review from './component/Review/Review';
import Service from './component/Service/Service';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">

        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}/>
          <Route path='/shop' element={<Shop></Shop>}/>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/project' element={<Project></Project>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/log-in' element={<Login></Login>}></Route>
          <Route path='/log-out' element={<Logout></Logout>}></Route>

          
        </Routes>

    </div>
  );
}

export default App;
