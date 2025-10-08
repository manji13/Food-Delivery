import React, { useState, useEffect, useContext } from 'react'  // fixed: added useContext
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'

const MyOrders = () => {
    const { url, token, userId } = useContext(StoreContext); // added userId for backend
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorder", { userId }, { headers: { token } }); // fixed body
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order,index)=>{
                     return(
                        <div key={index} className="my-orders-orders">
                          <img src={assets.parcel_icon} alt=''/>
                          <p>{order.items.map((item,index)=>{
                                if(index===order.items.length-1)
                                {
                                    return item.name+" x "+item.quantity
                                }
                                else{
                                    return item.name+" x "+item.quantity+", "
                                }
                          })}</p>
                          <p>${order.amount}.00</p>
                          <p>Items: {order.items.length}</p>
                          <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                          <button>Track Order</button>
                        </div>
                     )
                })}
            </div>
        </div>
    )
}

export default MyOrders
