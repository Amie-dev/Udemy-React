

import { useCounterStore } from "../store/counterStore.js"

function Counter() {

    const {count , decrease,increase,reset}=useCounterStore()
  return (
    <div>
        
        <h2>Counter {count}</h2>

        <button onClick={increase}>
            increase +
        </button>
        <button onClick={decrease}>
            descrease -
        </button>
        <button onClick={reset}>
            Reset as 0
        </button>
    </div>
  )
}

export default Counter