import './App.scss'
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
   <>
       <Layout>
           <Routes>
               <Route index element={<Home />} />
           </Routes>
       </Layout>
   </>
  )
}

export default App;


