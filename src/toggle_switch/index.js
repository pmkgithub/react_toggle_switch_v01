import React, { Component } from 'react';
import styled from 'styled-components';

const ToggleSliderLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 100px;
    height: 35px;

    > input {
        display: none;
    }
`;

// channel and the circle.
// channel background-color: #ddd
// circle background-color: #999
const ToggleSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: red;
    transition: 1s;
    border-radius: 17px;
    &:before {
        position: absolute;
        content: '';
        top: 2px;
        left: 2px;
        height: 30px;
        width: 30px;
        background-color: pink;
        transition: 0.5s;
        border-radius: 50%;
    }
    &:after {
        position: absolute;
        top: 7px;
        left: 35px;
        color: white;
        opacity: 1;
        -webkit-transition: opacity 0.6s;
        -moz-transition: opacity 0.6s;
        -o-transition: opacity 0.6s;
        transition: opacity 0.6s;
        content: 'inactive';
    }
`;

// &:checked + ${slider} means when the SlideInput is "checked", style the Slider (channel and circle) as so...
const ToggleSliderInput = styled.input`
    &:checked + ${ToggleSlider} {
        background-color: #0365b2;
        &:before {
            transform: translate(66px);
            background-color: white;

        }
        &:after {
            position: absolute;
            top: 7px;
            left: 10px;
            color: white;
            content: 'active';
        
        }
    }   
`;

export default class ToggleSliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    render() {
        return (
            <ToggleSliderLabel>
                <ToggleSliderInput 
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={(e) => this.setState({checked: e.target.checked})}/>
                <ToggleSlider />
            </ToggleSliderLabel>
        );
    }
}


// import React, { Component } from 'react';
// import styled from 'styled-components';

// const ToggleSliderLabel = styled.label`
//     position: relative;
//     display: inline-block;
//     width: 100px;
//     height: 35px;

//     > input {
//         display: none;
//     }
// `;

// // channel and the circle.
// // channel background-color: #ddd
// // circle background-color: #999
// const ToggleSlider = styled.span`
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: red;
//     transition: 1s;
//     border-radius: 17px;
//     &:before {
//         position: absolute;
//         content: '';
//         top: 2px;
//         left: 2px;
//         height: 30px;
//         width: 30px;
//         background-color: pink;
//         transition: 0.5s;
//         border-radius: 50%;
//     }
//     &:after {
//         position: absolute;
//         top: 7px;
//         left: 35px;
//         color: white;
//         opacity: 1;
//         -webkit-transition: opacity 0.6s;
//         -moz-transition: opacity 0.6s;
//         -o-transition: opacity 0.6s;
//         transition: opacity 0.6s;
//         content: 'inactive';
//     }
// `;

// const SliderTextActive = styled.span`
//     position: absolute;
//     top:-30px;;
//     left: 20px;
//     color: black;
//     opacity: 0;
// `;
// const SliderTextInactive = styled.span`
//     position: absolute;
//     top:-30px;;
//     left: 60px;
//     color: black;
//     opacity: 1;
// `;

// // &:checked + ${slider} means when the SlideInput is "checked", style the Slider (channel and circle) as so...
// const ToggleSliderInput = styled.input`
//     &:checked + ${Slider} {
//         background-color: #0365b2;
//         &:before {
//             transform: translate(66px);
//             background-color: white;

//         }
//         &:after {
//             position: absolute;
//             top: 7px;
//             left: 10px;
//             color: white;
//             content: 'active';
        
//         }
//     }
//     &:checked ~ ${SliderTextActive} {
//         opacity: 1;
//         transition: opacity 2s ease-in-out;
//         -moz-transition: opacity 2s ease-in-out;
//         -webkit-transition: opacity 2s ease-in-out;
//         color: purple;
        
//     }
//     &:checked ~ ${SliderTextInactive} {
//         opacity: 0;
//         transition: opacity 2s ease-in-out;
//         -moz-transition: opacity 2s ease-in-out;
//         -webkit-transition: opacity 2s ease-in-out;
//         color: green;
        
// `;

// export default class ToggleSlider extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             checked: false,
//         };
//     }

//     render() {
//         return (
//             <ToggleSliderLabel>
//                 <ToggleSliderInput 
//                     type="checkbox"
//                     checked={this.state.checked}
//                     onChange={(e) => this.setState({checked: e.target.checked})}/>
//                 <ToggleSlider />
//                 <SliderTextActive>
//                     BAR
//                 </SliderTextActive>
//                 <SliderTextInactive>FOO</SliderTextInactive>
//             </ToggleSliderLabel>
//         );
//     }
// }
