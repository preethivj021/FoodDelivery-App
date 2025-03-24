import React, {useContext} from 'react'
import './Payment.css'
import { StoreContext } from '../../context/StoreContext';

const Payment = () => {
    const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='payment'>
        <p>
            Total Amount
        </p>
        <h2>{getTotalCartAmount()}</h2>
        <p>Pay Via</p>
        <div className='payment-images'>

        </div>
    </div>
  )
}
export default Payment;