import { Outlet } from "react-router-dom";
import Sidebar from "./features/sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  return (
    <>
      <ToastContainer
        position={window.innerWidth > 600 ? "top-center" : "bottom-center"}
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div id="page" className="ml-0 lg:ml-40 mt-20 lg:mt-0">
        <Outlet />
      </div>
    </>
  );
}

export default App;
