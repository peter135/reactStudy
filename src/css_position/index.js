import React, { Component } from "react";
import "./demo.css"

export default class CSSPosition extends Component {


    render() {
        
        return( 

            //{/* relative 相对定位 */}
            // <div class="container">
            //     
            //      <div class="content_yellow content"></div>
            //      <div class="content_red content"></div>
            //      <div class="content_black content"></div>
            // </div>

            //{/* absolute 绝对定位 */}
            // <div>
            //     
            //      {/* <div class="fu">
            //          <div class="son">
            //             子元素
            //          </div>
            //      </div> */}
            // </div>

            //{/* sticky 粘性定位 */}
            <div class="container">
                <ul>
                    <li>
                       <span>导航1</span>
                    </li>
                    <li>
                       <span>导航2</span>
                    </li>
                    <li>
                       <span>导航3</span>
                    </li>
                </ul>
            </div>
             
        )
       
    }

}