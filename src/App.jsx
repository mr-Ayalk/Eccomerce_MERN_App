import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createContext, useState } from "react";
import ProductZoom from "./components/ProductZoom/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetailsComponent/ProductDetailsComponent";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Drawer } from "@mui/material";
import CartPanel from "./components/CartPanel/CartPanel";
import CartPage from "./Pages/CartPage/CartPage";
import Verify from "./Pages/Verify/Verify";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
// import Drawer from "@mui/materia/Drawer";
const MyContext = createContext();
function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [maxWidth, setMaxWidth] = useState("md");
  const [fullWidth, setFullWidth] = useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };
  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };
  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    openAlertBox,
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/ProductListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/ProductDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route path={"/forgot-password"} exact={true} element={<ForgotPassword/>} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster />
      <Dialog
        open={openProductDetailsModel}
        onClose={handleCloseProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]"
              onClick={handleCloseProductDetailsModel}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { MyContext };
