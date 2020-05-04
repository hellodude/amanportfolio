import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt=""  src="images/portfolio/GreenTree.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>The Green Tree Initiative</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/Ipldata.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>IPL Data</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/trello.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Trello Task Management</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/apimovies.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>API Movies</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
             
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/GreenTree.png" alt="" />
            <div className="description-box">
              <h4>The Green Tree Initiative</h4>
              <p>This is  static website build for the NGO. I had used only HTML and CSS for building and designing purpose. It is having responsive web design</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/hellodude/GreenTreeInitiativeProject" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/Ipldata.png" alt="" />
            <div className="description-box">
              <h4>IPL Data</h4>
              <p>In this project I had used the ipl data from 2010 to 2017. Initially the data present in CSV so I converted to JSON. Then after creating local server whole data is processed and Visualized by using of graph.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/hellodude/IPLdataProject" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/trello.png" alt="" />
            <div className="description-box">
              <h4>Trello Task Managment</h4>
              <p>Trello is task Management website.I had used API of trello to make changes to actual website by our own application. </p>
              <span className="categories"><i className="fa fa-tag" />WebDesign</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/hellodude/TrelloTaskMangement" target="_blank" >Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/apimovies.png" alt="" />
            <div className="description-box">
              <h4>API Movies</h4>
              <p>This project is api of movies details and can be access in local server through endpoints.</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a  href="https://github.com/hellodude/api_project" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          
        </div> {/* row End */}
      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}