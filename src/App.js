import "./App.css";
import Layout from "./components/layout/Layout";
import vector from "./Assets/Vector.svg";
import AllRoutes from "./components/AllRoutes";

function App() {
  return (
    <Layout>
      <div className="main">
        <AllRoutes />
      </div>
    </Layout>
  );
}

export default App;
