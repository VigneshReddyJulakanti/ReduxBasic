const store=require("./app/store")
const { fetchusers } = require("./features/users/userSlice")
const cakeActions=require("./features/cake/cakeSlice").cakeActions
const iceCreamActions=require("./features/iceCream/iceCreamSlice").iceCreamActions
console.log("Initial State",store.getState())

const unsubscribe=store.subscribe(()=>{
    // console.log("updated State",store.getState()) //we commented this because we added logger
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(10))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(10))
// unsubscribe()

store.dispatch(fetchusers())
