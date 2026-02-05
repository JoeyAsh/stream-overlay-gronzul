import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import CameraBorder from "./pages/CameraBorder.tsx";
import {StartScreen} from "./pages/StartScreen.tsx";

// Farben basierend auf deinem Logo


const App: React.FC = () => {
    return <BrowserRouter basename="/stream-overlay-gronzul">
        <Routes>
            <Route index element={<StartScreen/>}/>
            <Route path={'/camera-border'} element={<CameraBorder/>}/>
        </Routes>
    </BrowserRouter>
};

export default App;