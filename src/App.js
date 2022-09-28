import "./App.css";
import Footer from "./Component/Footer";

import Navbar from "./Component/Navbar";
import SideMenu from "./Component/SideMenu";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <SideMenu />
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
