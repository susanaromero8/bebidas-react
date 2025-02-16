import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-10 py-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
