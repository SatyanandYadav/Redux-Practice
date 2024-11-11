import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement} from '../../actions/index'
import { multiply } from '../../actions/multiply';

function HookMultiply() {
    const number = useSelector((state) => state.multi.number);
    const counter = useSelector((state) => state.count.counter);
    const dispatch = useDispatch();

  return (
    <div className="HookMultiply">
      <div>Value: {number}</div>
      <div>
      <button onClick={() => dispatch(multiply(counter))}>Multiply with {counter}</button>
      </div>
    </div>
  );
}

export default HookMultiply;
