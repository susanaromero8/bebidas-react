import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritePage from "./views/FavoritePage";
import Layout from "./layouts/Layout";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
