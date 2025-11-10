import Header from "../header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Header>
        <Outlet />
      </Header>
    </div>
  );
}

export default MainLayout;