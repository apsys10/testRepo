import React , {Component} from 'react';
import Wrap from '../../hoc/wrap';
import Burger from '../../../src/Components/Burger/Burger';
import BuildControls from '../../../src/Components/Burger/BuildControls/BuildControls';
import Modal from '../../../src/Components/UI/Modal/Modal';
import OrderSummary from '../../../src/Components/Burger/OrderSummary/OrderSummary';



const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
state = {
    ingredients: {

        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0

    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
}
addIngredienthandler = (type) =>
{
const oldCount = this.state.ingredients[type];
const updatedCount = oldCount + 1;
const updatedIngredients= {
    ...this.state.ingredients
};

updatedIngredients[type] = updatedCount;
const priceAddition = INGREDIENT_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice + priceAddition;

this.setState({totalPrice: newPrice , ingredients: updatedIngredients})

this.updatePurchaseState(updatedIngredients);
}
updatePurchaseState(ingredients)
{
   
    const sum = Object.keys(ingredients).map(igKey =>
        {return ingredients[igKey]}) ///getting numbers
        .reduce((sum, el) =>
        {
           return   sum + el;
        },0);


        this.setState({purchaseable: sum > 0})
}
purchaseCancelHandler = () =>
{
    this.setState({purchasing: false})
}
purchaseContinueHandler = () =>
{
    alert("You continue")
}

purchaseHandler = () =>
{
    this.setState({purchasing: true})
}

removeIngredienthandler = (type) =>
{
    const oldCount = this.state.ingredients[type];

    if(oldCount<=0)
    {
        return;
    }
const updatedCount = oldCount - 1;
const updatedIngredients= {
    ...this.state.ingredients
};

updatedIngredients[type] = updatedCount;
const priceDeduction = INGREDIENT_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice - priceDeduction;

this.setState({totalPrice: newPrice , ingredients: updatedIngredients})
this.updatePurchaseState(updatedIngredients);
}


    render()
    {  const disabledInfo = {
        ...this.state.ingredients
    }
        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        
        return (
       <Wrap>
           <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}> <OrderSummary ingredients = {this.state.ingredients} 
           purchaseCancelled = {this.purchaseCancelHandler} 
           purchaseContinue = {this.purchaseContinueHandler}
           price = {this.state.totalPrice}/></Modal>
     <Burger ingredients = {this.state.ingredients} />
           <BuildControls
           ingredientAdded = {this.addIngredienthandler} ingredientRemoved = {this.removeIngredienthandler}
           disabled = {disabledInfo}
           price = {this.state.totalPrice} 
           purchaseable= {this.state.purchaseable}
           ordered = {this.purchaseHandler}/>
       </Wrap>

    )
    
    
    }
}
   export default BurgerBuilder;