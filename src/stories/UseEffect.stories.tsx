import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample1 = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample1")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only 1st render (componentDidMount")
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect 1st render and every counter changed")
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample")

    // useEffect(() => {
    //     setInterval(()=> {
    //         setCounter(state => state + 1);
    //     }, 1000);
    // }, [])


    return <>
        Hello, counter: {counter}

    </>
}

//api.getUsers().then('')
//setInterval
//indexedDB
//document.getElementId
//document.title = "user";
