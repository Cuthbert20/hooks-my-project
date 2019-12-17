Features of Hooks: You can write stateful logic that you can reuse over 1,2..10..20 Components.

Built in hooks: 1. useState

Building Forms and how Hooks makes this easier:

useEffect:
instead of React lifeCycle Methods (componentDidMount(), componentDidUnmount(), componentDidUpdate()) we use useEffect inplace of all of the React LifeCycle Methods. useEffect runs after every render (It can be customized).
useEffect aslo replaces passing in a callback function to setState()

useState:
useState() is a react hook ie function that hooks into react features. useState takes in to arguments and returns an array of these values.
1st state value
2nd function to modify that state value ie like setState
whatever we pass into useState("Example") is now on state. ie here the string of Example would be the value of state.
