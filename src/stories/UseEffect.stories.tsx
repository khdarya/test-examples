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

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter: {counter}

    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("Component rendered" + counter)

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        return () => {
            console.log("Reset effect" + counter)
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>

    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log("Component rendered" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Type text: {text}
    </>
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log("Component rendered with" + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Timeout expired")
            setText('3 seconds past')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        text: {text}
    </>
}


//api.getUsers().then('')
//setInterval
//indexedDB
//document.getElementId
//document.title = "user";
