import React, { useState, useEffect } from 'react';

function InvoiceList() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/invoices')
            .then(response => response.json())
            .then(data => setInvoices(data))
            .catch(error => console.error('Failed to fetch invoices:', error));
    }, []);

    return (
        <div>
         <div class="row">
            <div class="col-sm-2 bg-dark text-white ">
                <p>Номер на фактура</p>
        </div>
            <div class="col-sm-2 bg-dark text-white">
                <p>Краен срок</p>
            </div>

            <div class="col-sm-2 bg-dark text-white">
                <p>Проблеми</p>
            </div>

            <div class="col-sm-2 bg-dark text-white">
                <p>Статус</p>
            </div>

        </div>

            {invoices.length > 0 ? invoices.map(invoice => (
                <div class="row">
                    <div class="col-sm-2" key ={invoice.id}>{invoice.number}</div>

                    <div class="col-sm-2">{invoice.dueDate}</div>

                    <div class="col-sm-2">{invoice.issues}</div>

                    <div class="col-sm-2">{invoice.status}</div>
                </div>
            )) : <p>No invoices available.</p>}
        </div>
    );
}

export default InvoiceList;
