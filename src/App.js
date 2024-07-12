import * as React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/English/Navbar/Navbar";
import LoadingSpinner from "./components/English/LoadingSpinner/LoadingSpinner";
import Footer from "./components/Footer/Footer";

const LazyHome = React.lazy(() => import("./components/English/Home/Home"));
const LazyMessage = React.lazy(() => import("./components/English/Message/Message"));
const LazyProjects = React.lazy(() => import("./components/English/Projects/Projects"));
const LazyContact = React.lazy(() => import("./components/English/Contact/Contact"));
const LazyWork = React.lazy(() => import("./components/English/Work/Work"));
const LazyAbout = React.lazy(() => import("./components/English/About/About"));

export default function App() {
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/laszlo-nemeth-portfolio" element={ <React.Suspense fallback={<><LoadingSpinner /></>}><LazyHome /></React.Suspense>} />
                <Route path="/laszlo-nemeth-portfolio/projects" element={ <React.Suspense fallback={<><LoadingSpinner /></>}><LazyProjects /></React.Suspense>} />
                <Route path="/laszlo-nemeth-portfolio/work" element={ <React.Suspense fallback={<><LoadingSpinner /></>}><LazyWork /></React.Suspense>} />
                <Route path="/laszlo-nemeth-portfolio/about" element={ <React.Suspense fallback={<><LoadingSpinner /></>}><LazyAbout /></React.Suspense>} />
                <Route path="/laszlo-nemeth-portfolio/contact" element={ <React.Suspense fallback={<><LoadingSpinner /></>}><LazyContact /></React.Suspense>} />
                <Route path="/laszlo-nemeth-portfolio/message" element={<React.Suspense fallback={<><LoadingSpinner /></>}><LazyMessage /></React.Suspense>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}