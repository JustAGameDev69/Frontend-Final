import { DataProvider } from "./context/DataContext";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import { AccountProvider } from "./context/AccountContext";
import AdminPage from "./pages/AdminPage";
import UserCartPage from "./pages/UserCartPage";
import AccountPage from "./pages/AccountPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";

function App() {
  return (
    <>
      <AccountProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route
                path="collections"
                element={<Navigate replace to="pc" />}
              />
              <Route path="collections/:id" element={<CollectionsPage />} />
              <Route path="product/:type/:id" element={<ProductDetailPage />} />
              <Route path="user/cart" element={<UserCartPage />} />
              <Route path="admin" element={<AdminPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="tracking" element={<OrderTrackingPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AccountProvider>
    </>
  );
}

export default App;
