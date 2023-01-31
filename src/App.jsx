import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Layout } from "./component/index";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
