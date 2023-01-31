import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact, Home, Layout } from "./component/index";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
