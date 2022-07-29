import React, { Component } from 'react';
import './mystyle.css'
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p >
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {
                            item.specialization.map(spec => <div> <span>&bull;</span> <em className="date">{spec.designation} {spec.duration}</em></div>)
                          }
                          </p>  
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Extra Curricullar</span></h1>
            </div>

            <div className="nine columns main-col">

              {resumeData.responsibilities.map((res, index) => {
                return <div className="response">
                <h3>{index +1 }. {res.event}</h3>
                <em className="date">{res.position}</em>
                <br />
                <em className="date">{res.games}</em>
                <hr />
                </div>
              })}
            </div>  

            </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li><h4 style={{paddingTop: '4px', paddingLeft: '10px'}}>{item.skillname}</h4></li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>
         <div className="row main-col">
         <div className="three columns header-col">
               <h1 style={{marginLeft: '12px'}}><span>Training</span></h1>
            </div>

             <ul>
                {
                  resumeData.trainings && resumeData.trainings.map((item) => {
                    return(
                      <li className="training">{item.trainingName}</li>
                    )
                  })
                }

   					</ul>
             </div>

      </section>
    );
  }
}