import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const UserOrder = () => {
    const  [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/orders?${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        }
        
    },[user])

    return (
        <div>
            <h2>my order: {orders.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Picture</th>
        <th>Price</th>
        <th>Quentity</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map(order => 
            <tr className='font-sans'>
                <th>1</th>
                <td>{order.name}</td>
                <td className='w-20 h-20'> <img src={order.img} alt="" /> </td>
                <td>$ {order.price}</td>
                <td>{order.quentites}</td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserOrder;