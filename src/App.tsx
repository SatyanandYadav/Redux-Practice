import { connect } from 'react-redux'
import './App.css';
import { decrement, increment } from './actions/index';
import Users from './components/Users';
import React from 'react';

interface IAppProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

function App(props: IAppProps) {

  return (
    <div className="App">
      <div>Counter: {props.counter}</div>
      <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      </div>
      {/* <HooksCounter />
      <HookMultiply />

      <ShowItems />
      <ShowItems isCount/> */}

      <Users />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  counter: state.count.counter
})

const mapDispatchToProps = (dispatch: any) => {

  // console.log(dispatch);
  return ({
   increment:() => dispatch(increment()),
   decrement: () => dispatch(decrement()),
})
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
