import React from "react";
import back from './backkk.webp';
import cheif from './cheif.webp';
function Background()
{
    return(
        <div className="R3">
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
  <img src={back} style={{ width: '100%', height: '35vh' }} alt="Responsive Image" />
</div>

        <img src={cheif} className="bottomleft"/>
         <div className="bottomright">
          <b>Anuj Gosalia</b>
         <br></br>
         <br></br>
          <span className="R5">6963</span>
          <span className="R5">100</span>

          <br></br>
          <span className="R6">followers</span>
          <span className="R6">following</span>
         </div>
          <div className="R7">
            <p className="R9">Co founder & CEO at Terribly Tiny Tales</p>
            <a className="R8"  href="#">https://www.instagram.com/anujgosalia</a>
          </div>
      </div>
      
    );
}
export default Background;