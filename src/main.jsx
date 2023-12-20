import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)


/*
  TODO: Bootstrap Nav Yapisi olurstur +
  TODO: React Router Dom u kur +
  TODO: Ana sayfa, her api icin kategory olustur +
  TODO: .env yapisi olustur ve icine bilgi ekle +
  TODO: Container ve row icin component olustur. +
  TODO: CAT Apiden key al +
  TODO: CAT Api yapisi fetch ile kullan +
  TODO: isLoading, isError, error ve data yapisini kurgula +
  TODO: Cat API Custom hook yap +
  TODO: Cat API Kategory detay sayfasi yap +
  TODO: Axios ile ayni calismlari tekrarla +
  TODO: RTK Query ile ayni yapiyi kurgula
*/