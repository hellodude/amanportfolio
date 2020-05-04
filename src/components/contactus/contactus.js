import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Thank You for visiting!</p>
            <p>You can contact me below are my details. </p>

          </div>
        </div>
        <div className="row">
          
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                BTM stage-1<br />
                11/12th main <br />
                Bengaluru (560029)<br />
                Vaman852@gmail.com<br />
                <span>(+91) 8770205634</span>
               

              </p>
            </div>
            
          </aside>
        </div>
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}