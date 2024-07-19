import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <Grid container style={{ minHeight: "100vh", height: "100%", width: "100%" }}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <div style={{ height: "100%", width: "100%", background: "#F6E6CB" }}>
          <Outlet />
        </div>
      </Grid>
    </Grid>

  )
}

export default App
