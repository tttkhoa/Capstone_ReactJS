import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Suspense } from "react";
import renderRoutes from "./routes";
import Loader from "./Components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
      <Routes>
        {renderRoutes()};
      </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
