import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useContext } from "react";
import { ProductsContext } from "../context/ProductState";

function Table() {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    console.log("productostos", products);
  }, []);

  const defaultMaterialTheme = createTheme();

  const columns = [
    {
      title: "Title",
      field: "title",
    },
    {
      title: "Price",
      field: "price",
    },
    {
      title: "Category",
      field: "category",
    },
  ];

  return (
    <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          title="Products Details"
          data={products}
          columns={columns}
        />
      </ThemeProvider>
    </>
  );
}

export default Table;
