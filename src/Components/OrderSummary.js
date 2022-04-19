import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div>
        <p>Order is successfully processed...</p>
        <p>Thanks for your purchase!</p>
        <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  )
}

export default OrderSummary