import { useState } from "react";
import { dataAbout } from "./dataAbout";
import imageFive from './fact.jpg'
import imageEight from './first-book.jpg';

function About(){

    const [facts,setFacts] = useState(dataAbout);
    const [showText ,setShowText ] =useState(false);
    const showTextClick =(fact) => {fact.showMore = !fact.showMore
    setShowText(!showText)}
    const removeFact = (id) => {
        let newFact = facts.filter((fact) => fact.id !== id);
        setFacts(newFact)
    }
    return(
        <div >
            <div className="img-fact container">
                <img src={imageFive} width="400px" alt="book" />
            </div>
            <div className="container ">
                <h1>Top {dataAbout.length} Facts about Books</h1>
            </div>
            {facts.map((fact => {
                const {id,nameFact,description, showMore} = fact;
                return(
                    <div key={id}>

                        <div  className="fact-card">
                            <div className="fact-card-wrap">
                    <div className="container factName">
                        <h2>{id} - {nameFact}</h2>
                    </div>
                    <div className="container ">
                        <div className="img-eight" >
                        <img src={imageEight} width="300px" alt="first-book" />
                        </div>
                        <p className="fact-decrip">{showMore ? description : description.substring(0,180)}
                        <button onClick={() => showTextClick(fact)} className="show-btn"> {showMore ? "show less" :"show more"}</button></p>
                    </div>
                    </div>
                    </div>
                    <div className="container">
                        <button className="btn-interest " onClick={() => removeFact(id)}>Not Interested</button>
                    </div>
                    </div>
                )
            }))}
        </div>
        
    )
}
export default About;