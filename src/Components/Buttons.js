import React from "react";
import Base from "../Base/Base";

function Students() {
    return (
        <div>
            <Base
                title={""}
                description={"Buttons"}
            >

                <div className="container-fluid text-left">

                    <div className="row">


                        <div className="col-md-6 " style={{marginTop:"0.5rem"}}>
                            <div class="card">
                                <div class="card-header">
                                    {/* titel */}
                                    <h5><b>Rounded Buttons</b></h5>
                                </div>
                                <div class="card-body">
                                    {/* body */}
                                    {/* <!-- Large Round --> */}
                                    <p><b> Large Round </b></p>
                                    <p>Large round buttons are typically used for primary actions and are usually placed in prominent locations. They are often styled with bright colors or bold text to draw attention to the action. Large round buttons are ideal for touch screens, as they provide a large target area for users to interact with.</p>
                                    <br></br>
<button class="btn btn-lg btn-primary rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-lg btn-secondary rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-lg btn-success rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-lg btn-danger rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-lg btn-warning rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-lg btn-info rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-lg btn-dark rounded-circle"><i class="fa fa-plus"></i></button>

{/* <!-- Medium Round --> */}
<br></br>
<p><b>Medium Round</b></p>
<p>Medium round buttons are used for secondary actions or navigation. They are slightly smaller in size than large round buttons but are still easy to tap on touch screens. They are often styled with muted colors or smaller text to differentiate them from primary actions.</p>
<br></br>
<button class="btn btn-md btn-primary rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-md btn-secondary rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-md btn-success rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-md btn-danger rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-md btn-warning rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-md btn-info rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-md btn-dark rounded-circle"><i class="fa fa-plus"></i></button>

{/* <!-- Small Round --> */}
<br></br>
<p><b>Small Round</b></p>
<p>Small round buttons are commonly used for tertiary actions or as icons in navigation menus. They are the smallest of the three and are often used for less important actions that do not require as much emphasis. They are typically styled with simple icons or minimal text to conserve space and avoid clutter.</p>
<br></br>
<button class="btn btn-sm btn-primary rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-sm btn-secondary rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-sm btn-success rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-sm btn-danger rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-sm btn-warning rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-sm btn-info rounded-circle"><i class="fa fa-plus"></i></button>
<button class="btn btn-sm btn-dark rounded-circle"><i class="fa fa-plus"></i></button>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6" style={{marginTop:"0.5rem"}}>
                            <div class="card">
                                <div class="card-header" >
                                    {/* titel */}
                                    <p><b>Split Buttons with Icon</b></p>
                                </div>
                                <div class="card-body" style={{display:"flex",flexDirection:"column"}}>
                                    {/* body */}
                                    <p>Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.</p>
                                    <div class="btn-group col-3">
  <button type="button" class="btn btn-primary" style={{opacity: 0.5}}>
    <i class="fa fa-phone"></i>
    
  </button>
  <button type="button" class="btn btn-primary"  aria-expanded="false">
  Call Us
  </button> 
</div>


<div class="btn-group col-5" style={{marginTop:"0.5rem"}}>
  <button type="button" class="btn btn-secondary" style={{opacity: 0.5}}>
    <i class="fa fa-shopping-cart"></i>
    
  </button>
  <button type="button" class="btn btn-secondary"  aria-expanded="false">
  shopping Cart
  </button> 
</div>


<div class="btn-group col-3 " style={{marginTop:"0.5rem"}}>
  <button type="button" class="btn btn-danger" style={{opacity: 0.5}}>
    <i class="fa fa-trash"></i>
    
  </button>
  <button type="button" class="btn btn-danger"  aria-expanded="false">
  Trash
  </button> 
</div>


<div class="btn-group col-3" style={{marginTop:"0.5rem"}}>
  <button type="button" class="btn btn-info" style={{opacity: 0.5}}>
    <i class="fa fa-info-circle "></i>
    
  </button>
  <button type="button" class="btn btn-info"  aria-expanded="false">
  Info
  </button> 
</div>


<div class="btn-group col-3" style={{marginTop:"0.5rem"}}>
  <button type="button" class="btn btn-dark" style={{opacity: 0.5}}>
    <i class="fa fa-arrow-right"></i>
    
  </button>
  <button type="button" class="btn btn-dark"  aria-expanded="false">
  Arrow
  </button> 
</div>


<div class="btn-group col-3" style={{marginTop:"0.5rem"}}>
  <button type="button" class="btn btn-warning" style={{opacity: 0.5}}>
    <i class="fa fa-exclamation-triangle"></i>
    
  </button>
  <button type="button" class="btn btn-warning"  aria-expanded="false">
  warning
  </button> 
</div>

<div class="btn-group col-3" style={{marginTop:"0.5rem"}}>
  <button type="button" class="btn btn-success" style={{opacity: 0.5}}>
    <i class="fa fa-map-marker"></i>
    
  </button>
  <button type="button" class="btn btn-success"  aria-expanded="false">
  Maker
  </button> 
</div>



                                </div>
                            </div>
                        </div>

                        <div className="col-md-6" style={{marginTop:"0.5rem"}}>
                            <div class="card">
                                <div class="card-header">
                                    {/* titel */}
                                    <p><b>Brand Buttons</b></p>
                                </div>
                                <div class="card-body">
                                    {/* body */}
                                    <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.

You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
                                    {/* <!-- Facebook Button --> */}
<button type="button" class="btn btn-primary btn-block">
  <i class="fa fa-facebook"></i> Follow Us on Facebook
</button>

{/* <!-- Google Button --> */}
<button type="button" class="btn btn-danger btn-block">
  <i class="fa fa-google"></i> Sign in with Google
</button>

                                </div>
                            </div>
                        </div>

                                      

                    </div>
                </div>
            </Base>
        </div>
    );
}

export default Students