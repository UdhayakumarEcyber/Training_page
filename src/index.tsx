import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
 

import {ConnectModel}  from './connect-model';
import{ HandBook } from './HandBook';

import {WatchModel} from './now_watching'
 
export interface ITrainingMainProps {
    isShownPopup:boolean;     
}

export interface ITrainingMainState {
    isToggleOn:boolean;
}

export class TrainingMain extends React.Component<ITrainingMainProps, ITrainingMainState> {
    constructor(props:any) {
       super(props);  
      
    //    this.state = {isToggleOn: true};        
    this.state = {isToggleOn: true};  
    this.handleClick = this.handleClick.bind(this);

   }

   handleClick() {
    this.setState(function(prevState) {
        return {isToggleOn: !prevState.isToggleOn};
    });
}

   
   render() {  
       return  <div className="training-section">  

                <div className={this.props.isShownPopup ? 'Hide_HandBook' : 'Show_HandBook'}>
                    <WatchModel />    
                </div>


               <div className="container">
                    <header className="training-section-header">          
                    <div className="menu-nav">
                        <a href="#" onClick={this.handleClick}>Menu</a>
                    </div> 
                    <div className="exp-content">
                        <h2>We’ve made sure you’re setup experience,
                        <span>is simple and easy just like our products.</span></h2>
                        
                    </div>
                    </header>

                    <section className="content">

                        <ConnectModel />  
                        <div className={this.state.isToggleOn ? 'Hide_HandBook' : 'Show_HandBook'}>
                            <HandBook />                            
                        </div>
                        

                </section> 

                <div className="copy_right">
                    <p>COPYRIGHTS 2020 © ALL RIGHTS RESERVED.</p>
                </div>

                </div>         
            </div>
   }
} 

ReactDOM.render(<TrainingMain/>, document.getElementById("container"));