import { Outlet } from "react-router-dom";
import Header from "./Pages/Share/Header/Header";
import Footer from "./Pages/Share/Footer/Footer";

function App() {
  return (
    <div className="bg-[#191919] text-white max-w-[1600px] mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
