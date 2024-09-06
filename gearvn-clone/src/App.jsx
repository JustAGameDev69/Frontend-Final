import { DataProvider } from "./context/dataContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
