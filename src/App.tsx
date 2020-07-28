import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";


function hello() {
    alert('Hello IT-Kamasutra')
}

//hello();

// function declaration
function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    let [switchOn, setswitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>

            <OnOff on={switchOn} onChange={(on) => {setswitchOn(on)}}/>

            <UncontrolledOnOff onChange={setswitchOn}/> {switchOn.toString()}

             <UncontrolledAccordion titleValue={"Menu"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

          {/*  <UncontrolledRating onChange={}/>*/}

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
