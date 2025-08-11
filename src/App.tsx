import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "./theme";
import { MenuProvider } from "./context/MenuProvider";

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <AppStyled>
          <ToastContainer className="toaster" toastClassName="body-toast" />
          <Routes>
            <Route path={"/"} element={<LoginPage />} />
            <Route path={"*"} element={<ErrorPage />} />
            <Route path={`/order/:username`} element={<OrderPage />} />
          </Routes>
        </AppStyled>
      </BrowserRouter>
    </MenuProvider>
  );
}

const AppStyled = styled.div`
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
