import React from "react";
import view from '../image/cafe (2).jpg';
import cofe from '../image/cofee.jpg';
import cookies from '../image/ChocolateChipCookies.jpg';
import cake from '../image/cake.jpg'; 
import "./Layout.css";

const Layout =() =>{
    return (
        <div>
            <img src={view} alt='view' className="responsive"></img>
            <section className="container-fluid sec"> 
              <div class="row d-flex justify-content-center">
                <div class="col-md-10 col-xl-8 text-center">
                <h3 class="mb-4 intro">Welcome</h3>
                        <p class="para mb-4 pb-2 mb-md-5 pb-md-0">
                            Cookies and coffee. 
                            They just go together, a perfect match.
                            This pairing combination has become a large part of culture in Western Europe and North America 
                            starting in the mid-1600's. The first known cookie originates from 7th century AD in Persia,
                            when sugar started to be more widely used.
                        </p>
                </div>
              </div>

              <div class="row text-center justify-content-center">
                <div class="a common col-md-4 mb-5 mb-md-0">
                  <div class="d-flex justify-content-center mb-4">
                    <img src={cookies} alt="cookies" class="rounded-circle shadow-1-strong" width="150" height="150" />
                  </div>
                  <h5 class="mb-4" >COOKIES</h5>
                  <h6 class="mb-3">Delicious</h6>
                  <p class="px-xl-3"> 
                  <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                          tenetur.
                  </p>
                </div>

                <div class="b common col-md-4 mb-5 mb-md-0">
                  <div class="d-flex justify-content-center mb-4">
                    <img src={cofe} alt="Coffee" class="rounded-circle shadow-1-strong" width="150" height="150" />
                  </div>
                  <h4 class="mb-4">COFFEE</h4>
                  <h6 class="mb-3">Flavours</h6>
                  <p class="px-xl-3">
                  <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                </div>

                <div class="c common col-md-4 mb-0">
                  <div class="d-flex justify-content-center mb-4">
                    <img src={cake} alt="cakes" class="rounded-circle shadow-1-strong" width="150" height="150" />
                  </div>
                  <h4 class="mb-4">CAKES</h4>
                  <h6 class="mb-3">Marketing Specialist</h6>
                  <p class="px-xl-3">
                    <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                  </p>
                </div>
              </div>
            </section>
        </div>
    );
};

export default Layout;
