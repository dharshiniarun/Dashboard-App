import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48967856', amount: '$305.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

function Orders() {
  return (
      <table class="table table-hover">
        <thead>
          <tr>
          <th scope='col'>Customer</th>
            <th scope='col'>Order No.</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
        {orders.map(order => (
            <tr key={order.orderNo}>
              <td><i class="bi bi-person-circle"></i>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Orders;
