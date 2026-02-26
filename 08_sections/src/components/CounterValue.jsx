import { useCounterStore } from "../store/counterStore.js"




function CounterValue() {

    const count=useCounterStore((state)=>state.count)
  return (
    <div>
        <h2>Counter :{count}</h2>
    </div>
  )
}

export default CounterValue