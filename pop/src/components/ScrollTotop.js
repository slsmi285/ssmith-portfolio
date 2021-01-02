import React, { Component } from 'react';
import { MdHome } from "react-icons/md";

import { animateScroll as scroll } from 'react-scroll';

class Scrolltotop extends Component {

    ScrollTo() {
        scroll.scrollToTop();
    }

    render() {

        return (
            <div className="move-top-wrap">                 
                <div onClick={this.ScrollTo} class="move-top" ><MdHome /></div> 
            </div>
        );

    }

}
export default Scrolltotop;