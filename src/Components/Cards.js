import React from "react";
import Base from "../Base/Base";


function Cards(){
    return (
        <div>
           <Base
            title={"cards"}
            description={"Cards"}
           >
          

        <div className="container-fluid text-left ">
            <div className="row">
            <div className="col-md-6" style={{marginTop:"0.5rem"}}>
                            <div class="card">
                                <div class="card-header">
                                    {/* titel */}
                                    <h5><b>Default Card Example</b></h5>
                                </div>
                                <div class="card-body">
                                    {/* body */}
                                    <p>
                                    This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6" style={{marginTop:"0.5rem"}}>
                            <div class="card">
                                <div class="card-header">
                                    {/* titel */}
                                    <h5 className="text-primary"><b>Basic Card Example</b></h5>
                                </div>
                                <div class="card-body">
                                    {/* body */}
                                    <p>
                                    The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6" style={{marginTop:"0.5rem"}}>
                            <div class="card">
                                <div class="card-header">
                                    {/* titel */}
                                    <h5 className="text-primary"><b>Dropdown Card Example</b></h5>
                                </div>
                                <div class="card-body">
                                    {/* body */}
                                    <p>
                                    Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6" style={{marginTop:"0.5rem"}}>
                            <div class="card">
                                <div class="card-header" >
                                    {/* titel */}
                                    <h5 className="text-primary"><b>Collapsable Card Example</b></h5>
                                </div>
                                <div class="card-body">
                                    {/* body */}
                                    <p>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!</p>
                                </div>
                            </div>
                        </div>



            </div>
        </div>


           </Base>
        </div>
    );
}

export default Cards