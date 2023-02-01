import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Blog,
  Contact,
  Home,
  Layout,
  PageNotFound,
  Quotes,
  Services,
  WheelRepair,
  WindowTinting,
} from "./component/index";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services/quotes" element={<Quotes />} />
        <Route path="/services/window_tinting" element={<WindowTinting />} />
        <Route path="/services/wheel_repair" element={<WheelRepair />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
