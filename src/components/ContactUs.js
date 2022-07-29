import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                  <h4>Contact : +8801727919079</h4>
                  <h4>Email : parvej100001@gmail.com</h4>
                  <br></br>
              </div>
            </aside>
          </div>
                         <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>
                     {resumeData.phone}
                    </span>
                    <br></br>
                    <span>parvej100001@gmail.com</span>
       					   </p>
                  </div>
               </div>
        </section>
        );
  }
}