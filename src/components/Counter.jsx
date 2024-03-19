import { useState } from "react"
import { useEffect } from "react"

const Counter = () =>{
    
    const [count, setCount ] = useState(0) //rerendering happing while state variable change
    const [count1, setCount1] =useState(0)

    useEffect(() => {
        console.log("effect")
    },[count1]) //[]dependency array - effect according to state
    //Here, effect will print whenever we load and whenever we use count1
    //in empty array, effect will print only when load
    //when no array, effect will print whenever we load and whenever we change useState

    const increment = () => {
        setCount(count + 1)
    }
    const increment1 = () => {
        setCount1(count1 + 1)
    }

    const decrement = () => {
        if(count>0){
            setCount(count - 1)
        }
        else{
            alert("0 is the end of life bro")
        }
    }

    // const stopwatch = () => {
    //     setInterval(()=>{
    //         setCount(count+1)
    //         count = useState(count)
    //     },1000)
    // }

    return (
        <>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>+</button>    &nbsp;
        <button onClick={decrement}>-</button>    &nbsp;
         {/* <button onClick={stopwatch}>++</button>  */}
        <h1>Counter1: {count1}</h1>
        <button onClick={increment1}>+</button>    &nbsp;
        </>
    )
}

export default Counter