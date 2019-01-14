import React from 'react';
import Wrap from '../../../hoc/wrap';
import Button from '../../UI/Button/Button'

const orderSummary = (props) =>
{ const ingredientSummary = Object.keys(props.ingredients).map((igKey) =>
    {
        return <li key = {igKey}><span style={{textTransform: 'capitalize'}}>{igKey} : {props.ingredients[igKey]}</span></li>
    });
return <Wrap>
    <h3>Your Order</h3>
    <p>Following ingredients</p>
    <ul>
      {ingredientSummary}
    </ul>
    <p>
        Total price: {props.price.toFixed(2)}
    </p>
    <p>Continue to Checkout</p>
    <Button btntype = "Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
    <Button btntype = "Success" clicked = {props.purchaseContinue}>CONTINUE</Button>

</Wrap>
}
export default orderSummary;