import React from 'react';
import {
  TransactionsWrap,
  HeadTransaction,
  DateTransactions,
  Controls,
  Menu,
  TransactionList,
  Name,
  Ubication,
  Quantity,
  TransactionItem,
  TransactionsRow,
} from './style';
const dataTransactions = [
  {
    date: 'August 12, 2019',
    total_quantity: '60tn CO2e offset',
    items: [
      {
        name: 'Middlebury College of Fine Arts',
        ubication: 'Middlebury, Vermont, USA',
        quantity: '10tn',
      },
      {
        name: 'Middlebury College of Fine Arts',
        ubication: 'Middlebury, Vermont, USA',
        quantity: '15tn',
      },
      {
        name: 'Middlebury College of Fine Arts',
        ubication: 'Middlebury, Vermont, USA',
        quantity: '20tn',
      },
    ],
  },
  {
    date: 'July 17th, 2019',
    total_quantity: '50tn CO2e offset',
    items: [
      {
        name: 'Middlebury College of Fine Arts',
        ubication: 'Middlebury, Vermont, USA',
        quantity: '10tn',
      },
      {
        name: 'Middlebury College of Fine Arts',
        ubication: 'Middlebury, Vermont, USA',
        quantity: '15tn',
      },
      {
        name: 'Middlebury College of Fine Arts',
        ubication: 'Middlebury, Vermont, USA',
        quantity: '20tn',
      },
    ],
  },
];
function Transactions({ customClass }) {
  return (
    <TransactionsWrap className={customClass && customClass}>
      {dataTransactions.map((transaccion, i) => (
        <TransactionsRow key={i}>
          <HeadTransaction>
            <DateTransactions>
              <span>{transaccion.date}</span>
              <p>{transaccion.total_quantity}</p>
            </DateTransactions>
            <Controls>
              <button className="btn border-green-small">
                <span>View certificate</span>
              </button>
              <Menu></Menu>
            </Controls>
          </HeadTransaction>

          <TransactionList>
            {transaccion.items.map((item, i) => (
              <TransactionItem key={i}>
                <Name>{item.name}</Name>
                <Ubication>{item.ubication}</Ubication>
                <Quantity>{item.quantity}</Quantity>
              </TransactionItem>
            ))}
          </TransactionList>
        </TransactionsRow>
      ))}
    </TransactionsWrap>
  );
}

export default Transactions;
