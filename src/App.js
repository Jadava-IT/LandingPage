import './App.css';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import NonITCourse from './Pages/NonIt';
// import GetQuotationPage from './Pages/GetQuotationPage';
import HomeComponent from './components/HomeComponent';
import { createBrowserRouter } from 'react-router-dom';
import IT from './Pages/IT';
import ServicePage from './Pages/ServicePage';

function App() {
  return (
  <>  
    <HomeComponent/>
  </>
  );
}




export const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/contact",
    element:<ContactUs  />
  },
  {
    path:"/about",
    element:< AboutUs/>
  },
  {
    path:"/course",
    element:< NonITCourse/>
  },
  {
    path:"/IT",
    element:< IT/>
  },
  {
    path:"/service",
    element:< ServicePage/>
  },

])
