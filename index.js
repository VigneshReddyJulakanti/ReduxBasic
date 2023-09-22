const redux=require("redux");
const createStore=redux.createStore;
const bindActionCreators =redux.bindActionCreators;
const combineReducers=redux.combineReducers;
const Cake_Order="Cake_Order";
const Cake_Restock="Cake_Restock"
const Cream_Order="Cream_Order"
function orderCake(){
    return{
        type:Cake_Order,
        quantity:1
    }
}

function RestockCake(qty=2){
    return {
        type:Cake_Restock,
        quantity:qty
    }
}

function order_Cream(){
    return{
        type:Cream_Order,
        quantity:1
    }
}


const data={
    noOfCakes:10
}

const CreamState={
    noOfCreams:10
}

function reducer(state=data,action){
    switch(action.type){
        case Cake_Order:
            return {
                ...state,
                noOfCakes:state.noOfCakes-1
            }
        case Cake_Restock:
            return{
                ...state,
                noOfCakes:state.noOfCakes+action.quantity
            }
            default:
                return state
    }
}

function Creamreducer(state=CreamState,action){
    switch(action.type){
        case Cream_Order:
            return {
                ...state,
                noOfCreams:state.noOfCreams-1
            }
        default:
            return state;
    }
}


const rootReducer=combineReducers({Creamreducer,reducer});
const store=createStore(rootReducer);

console.log("i",store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log("Update State",store.getState())
})

const actions=bindActionCreators({orderCake,RestockCake,order_Cream},store.dispatch);
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.RestockCake(3)
actions.order_Cream();

unsubscribe()