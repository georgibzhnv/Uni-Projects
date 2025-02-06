import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">

        <center>   <h2>Счетоводство</h2> </center>
            <div className="d-flex justify-content-between">
                <Link to="/invoices" className="btn btn-primary flex-grow-1 me-2">Фактури</Link>
                <Link to="/services" className="btn btn-primary flex-grow-1 ms-2">Услуги</Link>
            </div>
            <div class="container p-5 my-5 bg-dark text-white">
                 <h2>Последно добавени фактури:</h2>
                <p>id: '13', Номер на фактурата: 'INV013', Статус: 'В очакване', Краен срок: '2023-09-15', Проблеми: 'Очакват се документи'</p>
                <p>id: '12', Номер на фактурата: 'INV012', Статус: 'Оспорена', Краен срок: '2023-09-01', Проблеми: 'Неправилно таксуване'</p>
                <p>id: '11', Номер на фактурата: 'INV011', Статус: 'Платена', Краен срок: '2023-08-20', Проблеми: '-'</p>
                <p>id: '10', Номер на фактурата: 'INV010', Статус:  'Платена', Краен срок: '2023-08-05', Проблеми: '-'</p>
                <p>id: '9', Номер на фактурата: 'INV09', Статус: 'В очакване', Краен срок: '2023-07-22', Проблеми: 'Липсващи данни за плащане'</p>
            </div>
        </div>
    );
}

export default Home;
