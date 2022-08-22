import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Breakfast from './Components/Home/menu/Breakfast/Breakfast';
import Lunch from './Components/Home/menu/Lunch/Lunch';
import Dinner from './Components/Home/menu/Dinner/Dinner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Breakfast></Breakfast>}></Route>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>

        {/* nested-route */}
        <Route path="/home" element={<Home></Home>}>
          {/* index-route : index was work to share the parent route path (in here home was parent route) and we will show which route we will set in element...thats it.. */}
          <Route index element={<Breakfast></Breakfast>}></Route>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>

        <Route path="/services/:serviceId" element={<Services></Services>}>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
