import React from "react";  
import Card from "./Card";
import CardData from "./CardData";


const StackCard = () => {
  return (
    <>
    <div className="stack-cards">
        <Card details={CardData} />
    </div>
    </>
  );
}    
export default StackCard;