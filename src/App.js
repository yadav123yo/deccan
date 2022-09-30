import "./App.css";
import Footer from "./Component/Footer";

import Navbar from "./Component/Navbar";
import UpperMenu from "./Component/UpperMenu";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <UpperMenu />
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
