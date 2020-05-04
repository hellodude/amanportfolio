import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Hii , My name is Aman Verma. I am from Bhopal (Madhya Pradesh).<br></br>
            So, I started programming in my college days, by going through some basic about C language,
            building logics, and learning basics of Algorithm and Data structure.<br />
            After having couple months of experince in two startups, I diversified my knowledge towards Web Development.
            And start building some basic websites through JavaScripts related technologies. </p>
            <p>Currently I am in Bengaluru to explore more about IT sector and looking for the opportunities to grow.</p>
            <div className="row">
              
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/open?id=1Z8_Lqga3N0pLatAm3v_RcWpQu7V4CJ62" target="_blank" className="button" ><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}