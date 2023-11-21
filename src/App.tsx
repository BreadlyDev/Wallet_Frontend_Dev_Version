import './App.scss'
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile/Profile.tsx";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App;


