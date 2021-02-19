import React, { Component } from 'react';
import { MdHome } from "react-icons/md";

import { animateScroll as scroll } from 'react-scroll';

class Scrolltotop extends Component {

    ScrollTo() {
        scroll.scrollToTop();
    }

    render() {

        return (
                           
        <div onClick={this.ScrollTo} style={{ color: 'limegreen', textShadow: '-1px 1px black'}} ><MdHome /> Back-to-Top</div> 
            
        );

    }

}
export default Scrolltotop;