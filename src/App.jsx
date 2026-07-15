import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import PDFTools from "./pages/PDFTools";
import ImageTools from "./pages/ImageTools";
import AITools from "./pages/AITools";
import StudentTools from "./pages/StudentTools";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/tools/pdf" element={<PDFTools />} />

          <Route path="/tools/image" element={<ImageTools />} />

          <Route path="/tools/ai" element={<AITools />} />

          <Route path="/tools/student" element={<StudentTools />} />

        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;