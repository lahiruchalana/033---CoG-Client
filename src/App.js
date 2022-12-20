import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import UserRegistration from "./views/user/UserRegistration";
import UserLogin from "./views/auth/UserLogin";
import UserHome from "./views/user/Home";
import UserCart from "./views/user/Cart";
import AdminHome from "./views/admin/Home";
import VendorHome from "./views/vendor/Home";
import AdminDashboard from "./views/admin/AdminDashboard"
import ItemPage from "./components/item_page/ItemPage";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <div>
            <Routes>
              <Route path='/user_registration' element={<UserRegistration />} />
              <Route path='/login' element={<UserLogin />} />
              <Route path='/user_home' element={<UserHome />} />
              <Route path='/user_cart' element={<UserCart />} />
              <Route path='/admin_home' element={<AdminHome />} />
              <Route path='/vendor_home' element={<VendorHome />} />
              
              <Route path='/items' element={<ItemPage />} />

              <Route path='/admin_dashboard' element={<AdminDashboard />} />
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
