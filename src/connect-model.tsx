import * as React from 'react';
  
export class ConnectModel extends React.Component<{}, {}> {
      render() { 

        const list = [
          {
            mints: '5 minutes',         
            Name : "Connect a Lucy model",
            NameSpan : "to Slack channel under five minutes" 
          },
          {
            mints: '5 minutes',           
            Name : "Connect a Lucy model",
            NameSpan : "to Slack channel under five minutes" 
          },
          {
            mints: '5 minutes',           
            Name : "Connect a Lucy model",
            NameSpan : "to Slack channel under five minutes" 
          },
          {
            mints: '5 minutes',           
            Name : "Connect a Lucy model",
            NameSpan : "to Slack channel under five minutes" 
          },
        ];

        const ComplexList = () => (
          <ul>
            {list.map(item => (
              <li key={item.mints}>
                <div className="model-box">                  
                  <em className="box-mints">{item.mints}</em>               
                  <h4>{item.Name}<span>{item.NameSpan}</span></h4>
                  <a href="#" className="save-later-btn">Save For Later</a>
                  <a href="#" className="play-btn">Play</a>
                </div>
              </li>             
            ))}
          </ul>
        );
                 
        return <div className="connect-model">
            <h3 className="learn-bar">Learn how to<span></span></h3>
            <ComplexList />            
        </div>
    }
}
 
 

 