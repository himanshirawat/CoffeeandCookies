import React from "react";
import food from "../image/cafe-brownie.jpg";
import cokies from "../image/pinkcookies.jpg";
import "./Last.css";

const Last=()=>{
    return (
        <div className="container-fluid mt-5 last">
            <div class="row text-center justify-content-center">
                <div class="first col-md-4 ">
                    <img src={food} alt='food'></img>
                </div>
                <div class="secondpart col-md-4">
                   <p>
                    Cookies make people happy. Whether it's a cute design, a great taste,
                        or a happy memory of making it with family and friends, a cookie is sure to bring happiness into your life. 
                        With so many possibilities out there, cookies are something you'll never get bored with!
                    </p>
                </div>
                <div class="third col-md-4 ">
                    <img src={cokies} alt='cokies'></img>
                </div>
            </div>
        </div>
    );
};

export default Last;