import React, { Component } from "react";
import { Link } from "gatsby";



class HeadlineMenuLeft extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="headline-menu-left">  
          
          {/* <Link
          className="headline-menu--link highlight" 
          to="/submit">Get Listed
          </Link> */}

          <a
            className="headline-menu--link"
            target="_blank"
            href="https://seattlecreative.show/"
          >
            Listen
          </a>

          <Link
          className="headline-menu--link" 
          to="/about">About
          </Link>
          
          
        </div>
      </React.Fragment>
    );
  }
}

export default HeadlineMenuLeft;
