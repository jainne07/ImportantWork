import { useState } from "react";
import TabContent from "./TabContent";

export default function CoreConcept(props) {
  const [ val, setVal] = useState('')
  let selectedTab=false;
  if(val){
    selectedTab=true
  }
  const CORE_CONCEPTS = [
    {
      title: 'Components',
      description:
        'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
      title: 'JSX',
      description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
      title: 'Props',
      description:
        'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
      title: 'State',
      description:
        'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
  ];
    const handleClick=(v)=>{
        console.log(v)
        setVal(v)
      }
  return (
    <div>
      {props.concept.map((v) => (
            <span
              style={{
                margin: "10px",
                backgroundColor: "lightBlue",
                padding: "10px",
                cursor: "pointer"
              }}
              className={val === v ? 'active': undefined}
              key={v}
              onClick={()=>handleClick(v)}
            >
              {v}
            </span>
      ))}
      {!selectedTab && <p style={{color: "grey", textTransform: "uppercase", margin: "10px"}}>Selected any tab</p>}
      {selectedTab && <TabContent value={val} concept={CORE_CONCEPTS}></TabContent>}
    </div>
  );
}
