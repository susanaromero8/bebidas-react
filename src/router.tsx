import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";

const FavoritePage = lazy(() => import("./views/FavoritePage"));

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route
            path="/favoritos"
            element={
              <Suspense fallback="Cargando">
                <FavoritePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
