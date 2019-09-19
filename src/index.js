import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Header.css';
import './styles/cic_portal.css'
import Header from "./components/Header"
import AssetsPageBody from './components/AssetsPageBody';
import SearchAndFilterBar from "./components/SearchAndFilterBar"

const App = () => {
    return (
        <div>
            <Header />
            <SearchAndFilterBar />
            <AssetsPageBody />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
