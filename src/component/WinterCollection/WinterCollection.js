import React from "react";
import '../WinterCollection/WinterCollection.css';
import remove4 from '../../Images/remove4.png';
const WinterCollection = () => {
    return (
        <div className="collectionWinter">
            <div><img className="colwin" src={remove4}/></div>
            <div className="magna">
                <h1 className="twenty">‘22 Winter Collection</h1>
                <p className="odio">Vitae, odio adipiscing aenean tortor diam,
                    vitae amet volutpat urna.
                    Id aliquam ante eu tellus tristique quam magna non.</p>
            </div>
        </div>
    )
}
export default WinterCollection