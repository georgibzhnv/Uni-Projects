const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


let invoices = [ { id: '1', number: 'INV001', status: 'Платена', dueDate: '2023-03-15', issues: "-" },
{ id: '2', number: 'INV002', status: 'В очакване', dueDate: '2023-04-10', issues: 'Липсващи документи'},
{ id: '3', number: 'INV003', status: 'Оспорена', dueDate: '2023-04-22', issues: 'Оспорвани такси' },
{ id: '4', number: 'INV004', status: 'Платена', dueDate: '2023-05-01', issues: "-" },
{ id: '5', number: 'INV005', status: 'В очакване', dueDate: '2023-05-15', issues: 'Очаква одобрение' },
{ id: '6', number: 'INV006', status: 'Платена', dueDate: '2023-06-01', issues: "-" },
{ id: '7', number: 'INV007', status: 'В очакване', dueDate: '2023-06-15', issues: 'Получено частично плащане' },
{ id: '8', number: 'INV008', status: 'Оспорена', dueDate: '2023-07-10', issues: 'Такси оспорвани от клиента' },
{ id: '9', number: 'INV009', status: 'В очакване', dueDate: '2023-07-22', issues: 'Липсващи данни за плащане' },
{ id: '10', number: 'INV010', status: 'Платена', dueDate: '2023-08-05', issues: "-" },
{ id: '11', number: 'INV011', status: 'Платена', dueDate: '2023-08-20', issues: "-" },
{ id: '12', number: 'INV012', status: 'Оспорена', dueDate: '2023-09-01', issues: 'Неправилно таксуване' },
{ id: '13', number: 'INV013', status: 'В очакване', dueDate: '2023-09-15', issues: 'Очакват се документи' }];

let services = [ { code: 'AC01', description: 'Монтаж на битов климатик', price: 150.00 },
{ code: 'AC02', description: 'Рутинна подръжка на климатик', price: 75.00 },
{ code: 'AC03', description: 'Авариен ремонт на климатик', price: 200.00 },
{ code: 'AC04', description: 'Смяна на устройство', price: 300.00 },
{ code: 'AC05', description: 'Годишен договор за поддръжка', price: 120.00 },
{ code: 'AC06', description: 'Ремонт на течове', price: 85.00 },
{ code: 'AC07', description: 'Зареждане с охлаждаща течност', price: 70.00 },
{ code: 'AC08', description: 'Ъпгрейд на системата', price: 220.00 },
{ code: 'AC09', description: 'Смяна на филтър', price: 50.00 },
{ code: 'AC10', description: 'Почистване на канали', price: 90.00 },
{ code: 'AC11', description: 'Ремонт на компресор', price: 250.00 },
{ code: 'AC12', description: 'Инсталация на термостат', price: 130.00 },
{ code: 'AC13', description: 'Диагностика на проблеми с шума', price: 100.00 }];

app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});

app.get('/invoices', (req, res) => {
    res.status(200).json(invoices);
});

app.get('/services/:code', (req, res) => {
    const { code } = req.params;
    const service = services.find(s => s.code === code);
    if (service) {
        res.status(200).send(service);
    } else {
        res.status(404).send('Услугата не е намерена.');
    }
});
