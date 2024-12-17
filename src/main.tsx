import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "./pages/home";
import "./index.css";
import {theme} from "./common/theme";
import {ThemeProvider} from "@mui/material";
import {DiscographyPage} from "./pages/discography";
import {SamplePackPage} from "./pages/sample-pack";
import {AboutPage} from "./pages/about";
import {ServicePage} from "./pages/service";
import {MainLayout} from "./components/layout/main-layout.tsx";
import {NotFoundPage} from "./pages/not-found";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="disco" element={<DiscographyPage/>}/>
                    <Route path="sample" element={<SamplePackPage/>}/>
                    <Route path="service" element={<ServicePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
)
