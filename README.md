# React-Redux-Course
Code I wrote following a tutorial for learning Redux and React.

### Course Notes


- state becomes only one for the entire application
- it is immutable, it comes from the top down
- you don't change it, it's recreated

![Redux Workflow Diagram](https://i.ibb.co/CtgGYnF/Screenshot-6.png)

- View = your react components
- Store = your state, sends your state down to your components
- dispatch = send off to a destination with a purpose
- Reducers = pure functions that specify how the application state should change in respond to the actions. The reducers respond with that new state.


Extension for Code snippets:
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

- rcc
- rfc

npm i redux react-redux redux-thunk 

- redux-thunk = middleware for redux which allows us to directly access the dispatch method so that we can make asynchronous calls from our actions

Starting with Redux

1. We need to bring in the provider in the main App file - the provider is actually a React component 

2. We need to wrap everything inside that provider component.

The provider takes what's called the store and the store holds the state.

A store holds the whole state tree of your application.

The only way to change the state inside is to dispatch an action on it.

You create a store using the createStore function.

