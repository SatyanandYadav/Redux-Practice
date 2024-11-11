import { connect } from 'react-redux'
import { increment } from '../../actions/index';
import { multiply } from '../../actions/multiply';

function ShowItems(props) {
//   console.log(props);
  return (
    <div className="ShowItems">
      <div>Counter: {props.value}</div>
      <button onClick={props.itemsFn}>Change</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.isCount ? state.count.counter : state.multi.number,
})

const mapDispatchToProps = (dispatch, ownProps) => {

    const dispatchFn = ownProps.isCount ? () => dispatch(increment()) : () => dispatch(multiply())

//   console.log(dispatch);
  return ({
   itemsFn: dispatchFn,
})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowItems);
