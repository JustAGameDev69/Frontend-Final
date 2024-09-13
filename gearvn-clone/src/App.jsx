import { DataProvider } from "./context/dataContext";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="collections" element={<Navigate replace to="pc" />} />
            <Route path="collections/:id" element={<CollectionsPage />} />
            <Route path="product/:type/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
