import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceList from './services';
import InvoiceList from './invoices';
import Home from './Home'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/invoices" element={<InvoiceList />} />
                <Route path="/services" element={<ServiceList />} />
            </Routes>
        </Router>
    );
}
export default App;
