import * as React from 'react';

// import * as Player from 'video-react';

// import Popup from "reactjs-popup";
  
 

// export interface IHandBookBarProps {
//     publishData:boolean;
//     onDataToggleSettings:( publishData:boolean) => void;
//     isShownpopup:boolean;
// }

export interface IHandBookBarState {
    isClosepopup:boolean;
}


export class WatchModel extends React.Component<{},IHandBookBarState>  {
  constructor(props:any) {
    super(props);  
       
 
 this.state = {isClosepopup: true};
    
 this.onHideCick = this.onHideCick.bind(this);    
    
}
    
onHideCick = () => {
  this.setState( {
    isClosepopup: false   
  });
 }

render() {  

  // const videoplay ={
  //   <video width="400" controls>
  //   <source src="mov_bbb.mp4" type="video/mp4">
  //   <source src="mov_bbb.ogg" type="video/ogg">
  //   Your browser does not support HTML5 video.
  //   </video>
  // }
  
  const watch_list = [
    {
      heading: 'This video covers',               
      sublistname1 : "Using connectors",
      sublistname2 : "Webhook and API run through", 
      sublistname3 : "In depth explaination on authentication and OAUTH usage", 
      mints: '05 minutes', 
    },    
      
  ];

    const WatchList = () => (
        <div className="watching_overall">
            {watch_list.map(item => (

            <div className="watching-section" key={item.heading}>

                <div className="watching-section-lft">  

                  <div className="watching_video">

                      {/* <Player
                          playsInline
                          poster="/assets/poster.png"
                          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        /> */}

                      <img
                          src="../images/video-bg.svg"
                          alt="Log in with Google"
                          style={{ marginRight: '10px' }}
                        />

                    </div>      
               
                </div>

                <div className="watching-section-rgt">

                    <em className="mints-txt">{item.mints}</em>

                    <h4>{item.heading}</h4> 
                    
                    <ul className="watching-section-list">
                        <li className="sub_list">{item.sublistname1}</li> 
                        <li className="sub_list">{item.sublistname2}</li>
                        <li className="sub_list">{item.sublistname3}</li> 
                    </ul>

                    <a href="#" className="save-later-btn">Save For Later</a> 

                </div>
            </div>

            ))}
        </div>
    );
       

                 
        return <div className={this.state.isClosepopup ? 'popup_overall' : 'Hide_HandBook'}>

          <div className="PopUp">

          <div className="PopUp-title"><span className="close" onClick={this.onHideCick}></span><h3>Now watching <span>Connect a Lucy model to Slack channel under five minutes</span></h3></div>

                  <WatchList />  

              </div>

          </div>
 
    }
}
 
 
