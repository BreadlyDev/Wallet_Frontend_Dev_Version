import "./App.scss";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile.tsx";

import Login from "./pages/Login/Login.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";

import DemoBalance from "./pages/DemoBalance/DemoBalance.tsx";
import Trading from "./pages/Trading/Trading.tsx";
import Redirect from "./pages/Redirct.tsx";
import { observer } from "mobx-react-lite";
import Coin from "./pages/Coin/Coin.tsx";

function App() {

  return (
    <>
      {localStorage.getItem("token") ? (
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Redirect where="/" />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/trade"} element={<Trading />} />
            <Route path={"/demo-balance"} element={<DemoBalance />} />
            <Route path={"/trade/:id"} element={<Coin/>} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="*" element={<Redirect where="/login" />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
        </Routes>
      )}
    </>
  );

}

export default observer(App);
