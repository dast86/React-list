import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
