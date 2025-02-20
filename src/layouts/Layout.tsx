import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";

const Layout = () => {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);
  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-full mx-10 py-16 overflow-hidden">
        <Outlet />
      </main>

      <Modal />
      <Notification />
    </>
  );
};

export default Layout;
