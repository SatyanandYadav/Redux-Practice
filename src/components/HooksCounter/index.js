import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement} from '../../actions/index'

function HooksCounter() {
    const counter = useSelector((state) => state.count.counter)
    const dispatch = useDispatch();

  return (
    <div className="HooksCounter">
      <div>Counter: {counter}</div>
      <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default HooksCounter;
