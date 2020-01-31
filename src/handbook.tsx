import * as React from 'react';

// import Popup from "reactjs-popup";
 


export interface IHandBookBarProps {
  // isShown:boolean;    
}

export interface IHandBookBarState {
  isShownPopup:boolean;
}

export class HandBook extends React.Component<{},IHandBookBarState> {
  constructor(props:any) {
    super(props);     
 //    this.state = {isToggleOn: true};  
 this.state = {isShownPopup: true};   
 this.onShowCick = this.onShowCick.bind(this);    
    
}
    
 
 
 onShowCick() {
  this.setState(function(prevState) {
      return {isShownPopup: !prevState.isShownPopup};
  });
}

render() {  

        const hand_list = [
          {
            heading: 'Introduction',         
            sublistname1 : "Add two numbers together",
            sublistname2 : "Degree Conversion", 
            sublistname3 : "Exercise: miles to kilometers", 
            mints: '05 minutes',
            paly_resume : "PLAY",
          },
          
          {
            heading: 'Calling web services',         
            sublistname1 : "Add two numbers together", 
            mints: '12 minutes', 
            paly_resume : "RESUME",
          },
          {
            heading: 'Connecting to BMS systems',         
            sublistname1 : "Example using Modbus",
            sublistname2 : "Example using Another one?", 
            mints: '23 minutes',
            paly_resume : "PLAY",
          },
          {
            heading: 'Debugging',         
            sublistname1 : "Using the debugger",
            sublistname2 : "Undo/Redo", 
            sublistname3 : "Action List", 
            mints: '05 minutes',
            paly_resume : "PLAY",
          },
          {
            heading: 'JSON manipulation', 
            mints: '25 minutes',
            paly_resume : "PLAY",
          },
          {
            heading: 'Text Manipulation', 
            mints: '23 minutes',
            paly_resume : "PLAY",
          },
          {
            heading: 'Loops and Repeater', 
            mints: '34 minutes',
            paly_resume : "PLAY", 
          },
        ];
      //  const nestedLists = [list, list, list, list];

        const HandbookList = () => (
          <div className="handbook_overall">
            {hand_list.map(item => (
              <ul key={item.heading} className="handbook_list">
                <div className="handbook_list_title">
                    <h4>{item.heading}</h4>
                   <div className="handbook_list_title_rgt">
                      <em className="mints-txt">{item.mints}</em>
                      <a href="#" className="play_resume-btn" onClick={this.onShowCick}>{item.paly_resume}</a>
                   </div>
                </div>             

                <li className="sub_list">{item.sublistname1}</li> 
                <li className="sub_list">{item.sublistname2}</li>
                <li className="sub_list">{item.sublistname3}</li>               
              </ul>             
            ))}
          </div>
        );

                 
        return <div className='handbook'>                            
                <div className="handbook-model">
                  <div className="handbook-title-bar"><h3>Lucy Handbook</h3></div>
                  <HandbookList />            
              </div>
              <div className="training-box">
                  
                  <a className="training-btn">Training</a>
                  
                </div> 

                

               

            </div> 
    }
}
 
 

 