import './App.scss'
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile/Profile.tsx";
import DemoBalance from "./pages/DemoBalance/DemoBalance.tsx";
import Trading from "./pages/Trading/Trading.tsx";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/trading"} element={<Trading/>}/>
                    <Route path={"/demo-balance"} element={<DemoBalance/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App;


