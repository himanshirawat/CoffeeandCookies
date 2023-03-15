import React from "react";
import coffes from "../image/monstercookies.jpg";
import "./Quotes.css";

const Quotes=() => {
    return(
        <div className="container-fluid cont">
            <div className="row">
                <div className="de col-6 ">
                    <img src={coffes} alt="Coffes"></img>
                </div>
                <div className="po col-6">
                    <div className="second">
                    <p className="text-center">
                        <h2 className="mb-4">The best cookies</h2>
                        <h4 className="mb-4" >With delicious Flavours</h4>
                        Cookies make people happy. Whether it's a cute design, a great taste,
                        or a happy memory of making it with family and friends, a cookie is sure to bring happiness into your life. 
                        With so many possibilities out there, cookies are something you'll never get bored with!
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quotes;