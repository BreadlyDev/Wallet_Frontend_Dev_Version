import "./App.scss";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile.tsx";

import Login from "./pages/Login/Login.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";

import Swap from "./pages/Swap/Swap.tsx";
import Redirect from "./pages/Redirct.tsx";
import { observer } from "mobx-react-lite";
import Coin from "./pages/Coin/Coin.tsx";
import { useContext, useEffect } from "react";
import { Context } from "./main.tsx";

function App() {
  const store = useContext(Context).stores;
  useEffect(() => {
    const btc_socket = new WebSocket(
      `wss://wallet-rndr.onrender.com/ws/coin/price/?currency=BTCUSDT`
    );
    const eth_socket = new WebSocket(
      `wss://wallet-rndr.onrender.com/ws/coin/price/?currency=ETHUSDT`
    );

    const doge_socket = new WebSocket(
      `wss://wallet-rndr.onrender.com/ws/coin/price/?currency=DOGEUSDT`
    );

    const sol_socket = new WebSocket(
      `wss://wallet-rndr.onrender.com/ws/coin/price/?currency=SOLUSDT`
    );

    const steem_socket = new WebSocket(
      `wss://wallet-rndr.onrender.com/ws/coin/price/?currency=STEEMUSDT`
    );

    const icx_socket = new WebSocket(
      `wss://wallet-rndr.onrender.com/ws/coin/price/?currency=ICXUSDT`
    );

    const handleSocketMessage = (event: MessageEvent) => {
      try {
        const res = JSON.parse(event.data);

        const pure_value = JSON.parse(res.replace(new RegExp("'", "g"), '"'));
        store.coinStore.setPrice(pure_value.symbol.slice(0, -4), pure_value.price);
        
        const symbol = pure_value.symbol.slice(0, -4);
        const price =Number(Number(pure_value.price).toFixed(2));
        // console.log(price, symbol);
        store.coinStore.setPrice(symbol, price);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    btc_socket.addEventListener("message", handleSocketMessage);
    eth_socket.addEventListener("message", handleSocketMessage);
    doge_socket.addEventListener("message", handleSocketMessage);
    sol_socket.addEventListener("message", handleSocketMessage);
    steem_socket.addEventListener("message", handleSocketMessage);
    icx_socket.addEventListener("message", handleSocketMessage);

    // return () => {
    //   socket.removeEventListener("message", handleSocketMessage);
    //   socket.close();
    // };
  }, []);
  return (
    <>
      {store.authStore.isAuthed || localStorage.getItem("token") ? (
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Redirect where="/" />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/swap"} element={<Swap />} />
            <Route path={"/swap/:id"} element={<Coin />} />
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
