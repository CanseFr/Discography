import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "./pages/home";
import {TopBar} from "./components/top-bar";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TopBar/>} >
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
