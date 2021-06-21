const redux = require('redux')
const reduxLogger = require('redux-logger');

const createStore = redux.createStore
const combineReducers = redux.combineReducers;
const applyMiddelware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


// Action Names
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// BUY_CAKE Action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Buy a nice cake"
    };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "Buy a delicious icecream"
    }
}


const initialCakeState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCreams: 20
};

// ! Reducers  
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddelware(logger));
console.log('Initial State');
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();