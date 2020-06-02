1. What problem does the context API help solve?

Context API solves the problem of props drilling. It creates an environment in which state can be passed both up (to parent elements) and down (to children elements), eliminating the need to pass props down through each child element.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are instructions that get sent to the reducer. The reducer takes in an action and interprets what it should do based on the information passed to it by the action. A store contains the state of an application, and that state is changed by dispatching an action into a reducer. The store is known as a 'single source of truth' because once the information inside the store has been changed

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is updated and used within a single component and can only send props down to children components. Application state is a store of state that is available to all components that subscribe to the store. 

Components would be ideal for working with a page or two. State is better for more complex apps, or for storing universal values i.e. darkmode for a website

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware allowing programmers to use action creators that return a function instead of just an action object. Thunk receives the dispatch method from the store which gets used to send actions into the reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I need to spend more time with Context API to make a real judgment, but it seems perfect for something basic, but redux seems better suited toward more complex projects
