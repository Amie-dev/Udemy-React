import { useCounterStore } from "../store/counterStore";




function CounterBtn() {

    const increase=useCounterStore((state)=>state.increase)
    const decrease=useCounterStore((state)=>state.decrease)
    const reset=useCounterStore((state)=>state.reset)
  return (
    <div>
        
        <button onClick={increase}>
            Increase +
        </button>
        <button onClick={decrease}>
            Decrease +
        </button>
        <button onClick={reset}>
            Reset as 0
        </button>
    </div>
  )
}

export default CounterBtn