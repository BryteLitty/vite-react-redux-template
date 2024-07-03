import { 
  decrement, 
  increment,
  incrementByAmount,
  incrementAsync
} from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";

const Couter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>(); 

  return (
    <div>
        <h4>{count}</h4>

        <button onClick={() => dispatch(incrementByAmount(10))}>Increase</button>
        <button onClick={() => dispatch(incrementAsync(100))}>Decrease</button>
    </div>
  )
}

export default Couter;