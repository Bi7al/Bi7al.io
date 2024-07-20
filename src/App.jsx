import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import "./App.css"
function App() {

  return (

    <>
      <div className="Custom-Grid">
        <div className="Side-Bar">
          <Sidebar />
        </div>
        <div className="Outlet">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default App