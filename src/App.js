import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Suspense } from "react";
import renderRoutes from "./routes";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
      <Routes>
        {renderRoutes()};
      </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
