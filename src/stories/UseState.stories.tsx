import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo',
}

function generatedData() {
return 1;
}

export const Example1 = () => {
    console.log("Example1")

    //const initValue = useMemo(generatedData, [])

    const [counter, setCounter] = useState<number>(generatedData);

 //   const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}


