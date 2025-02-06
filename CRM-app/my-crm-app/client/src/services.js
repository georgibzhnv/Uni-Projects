import React, { useState } from 'react';

function ServiceList() {
    const [serviceCode, setServiceCode] = useState('');
    const [service, setService] = useState(null);
    const [error, setError] = useState('');

    const fetchService = (code) => {
        fetch(`http://localhost:5000/services/${code}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Услугата не е намерена');
                }
                return response.json();
            })
            .then(data => {
                setService(data);
                setError('');
            })
            .catch(err => {
                setError(err.message);
                setService(null);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchService(serviceCode);
    };

    return (
        <div>
            <h1>Търси за услуга</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={serviceCode}
                    onChange={e => setServiceCode(e.target.value)}
                    placeholder="Въведи код на услугата"
                />
                <button type="submit">Търси</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {service && (
                <div>
                    <h2>Детайли на услугата</h2>
                    <p><b>Код:</b> {service.code}</p>
                    <p><b>Описание:</b> {service.description}</p>
                    <p><b>Цена:</b> ${service.price.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}

export default ServiceList;
