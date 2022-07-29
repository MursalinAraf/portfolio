import React, { Component } from 'react';
import Modal from './Modal';
export default class Porfolio extends Component {

  constructor(){
    super()
    this.state= {
      show: false,
      openId: 1
    }
  }
  

  showModal = e => {
    this.setState({
      show: !this.state.show,
      openId: e
    });
  };

  onClose = () => {
    this.setState({
      show: false
    });
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" role="presentation" onClick={() => this.showModal(item.id)}>
                  <div className="item-wrap">
                      <img src={`${item.imgurl[0]}`} alt="project" className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <Modal show={this.state.show} data={resumeData.portfolio.filter(port => port.id === this.state.openId)} onClose={this.onClose} />
  </section>
        );
  }
}