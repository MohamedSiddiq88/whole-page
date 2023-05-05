import React from "react"
import { useHistory } from 'react-router-dom'
import { useState } from "react";
import './Base.css';


function Base({title, description, children}){
    // const history= useHistory();
    const [show,setShow]=useState(false);
    return (
        <div className="main-container base-container container-fluid">
<div className="row">
<SideBar
show={show}
setShow={setShow}
></SideBar>

{/* <div className="emp col-2"></div> */}
<div className="col col-md-10">
            <header className="header">

            <nav class="navbar navbar-dark bg-dark" >
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="btn-group mb-3">
  <input type="text" class="form-control"  aria-label="Recipient's username" aria-describedby="button-addon2" placeholder="Search"/>
  <button className="btn btn-primary" id="button-addon2">search</button>
  </div>

            </nav>
            </header>
            <main className="main-segment">
                <h2>{description}</h2>
                <div>
                    {children}
                </div>

            </main>

        </div>
        </div>
        </div>
    );
}

export default Base


function SideBar({show,setShow}) {
    const [open,setOpen]=useState(false)
    const history=useHistory();    
    
      return (
        
          <div className="col sidebar-container col-2" style={{ '--sidebar-display': show ? 'block' : 'none' }}> 
          {/* style={show ? {display: 'none'} : {display: 'block'}} */}

<div id="sidebar" className="col-2">
            <h1><b>
            <i class="fa fa-smile-o" aria-hidden="true"></i>
            </b>
            </h1>
            
            
            <hr></hr>
            <div onClick={()=>history.push("/")}>
            <i class="fa fa-tachometer fa-1x" aria-hidden="true" style={{marginRight:"0.5rem"}}></i>
            <span className="icon-name">
                DashBoard</span>
            </div>


            
            <hr></hr>
            <label style={{color:"#95ABEE"}}>INTERFACE</label><br></br>


           <div  onClick={()=>setOpen(!open)}>
           <i class="fa fa-cog" aria-hidden="true" style={{marginRight:"0.5rem"}}></i>
            <span className="icon-name" >Components</span> 
            {open?<div className="suboption">
               <p style={{color:"#95ABEE"}}>CUSTOM COMPONENTS</p> 
              <div
              onClick={()=>history.push("/buttons")}
              >Buttons</div>
              <div
              onClick={()=>history.push("/cards")}
              >Cards</div>
              </div>:
                null}
           </div>
    
    <br></br>
    <i class="fa fa-wrench" aria-hidden="true" style={{marginRight:"0.5rem"}}></i>
            <span className="icon-name">Utilities</span>

            <hr></hr>
            <label style={{color:"#95ABEE"}}>ADDONS</label>

            <div>
            <i class="fa fa-folder" aria-hidden="true" style={{marginRight:"0.5rem"}}></i>
            <span className="icon-name">Page</span>
            
            </div>

            <div>
            <i class="fa fa-table" aria-hidden="true" style={{marginRight:"0.5rem"}}></i>
            <span className="icon-name">Tables</span>
            </div>
            
            



          </div>

          </div>
          
        
    
      );
    }

    