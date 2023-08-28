import "./App.css";
import Table from "./components/Table";
import { ProductsProvider } from "./context/ProductState";

function App() {
  return (
    <>
      <ProductsProvider>
        <Table></Table>
      </ProductsProvider>
    </>
  );
}

export default App;
