import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // Using a custom grid layout to structure the sidebar and main content area
  return (
    <div className="Custom-Grid">
      {/* Sidebar component for navigation */}
      <div className="Side-Bar">
        <Sidebar />
      </div>
      {/* Outlet for rendering nested routes */}
      <div className="Outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
