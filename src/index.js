import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CitiesPage from './components/CitiesPage';
import CitiesDetailsPage from './components/CitiesDetailsPage';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CitiesPage />} />
                <Route path="/detalhes" element={<CitiesDetailsPage />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
