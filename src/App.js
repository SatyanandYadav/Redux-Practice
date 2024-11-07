import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';
import { decrement, increment } from './actions';
import HooksCounter from './components/HooksCounter';
import HookMultiply from './components/HookMultiply';
import ShowItems from './components/ShowItems';
import Users from './components/Users';

function App(props) {
  // console.log(props);
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

const mapStateToProps = (state) => ({
  counter: state.count.counter
})

const mapDispatchToProps = (dispatch) => {

  // console.log(dispatch);
  return ({
   increment:() => dispatch(increment()),
   decrement: () => dispatch(decrement()),
})
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
