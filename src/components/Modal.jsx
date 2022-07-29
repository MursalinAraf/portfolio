import React from 'react'
import './mystyle.css'

export default function Modal(props) {

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    const data = props.data[0]

  return (
    props.show ?
    <div className={showHideClassName} >
        <section className="modal-main" style={{textAlign: 'left', paddingLeft: '20px'}}>
            <div className="bla">
                <h2 className="modal-title" style={{paddingTop: '20px'}}>
                    {data.title}
                </h2>
                </div>    
            <div className="modal-body">
                {data.description}
            </div>
            {data.employer && <div>
            <b>Employer : </b> {data.employer}
            </div>}
            { data.ContractNo && <div>
            <b>Contract Number : </b> {data.ContractNo}
            </div>}
            {data.fundedBy && <div>
            <b>Funded By : </b> {data.fundedBy}
            </div>}
            {data.epcContractor && <div>
            <b> EPC Contractor : </b> {data.epcContractor}
            </div>}
            {data.consultant && <div>
            <b>Consultant : </b> {data.consultant}
            </div>}
            <div>
                <b>Work Of Scope</b>
                {
                    data.majorWorkScope.map(scope => <ul>
                        <li style={{marginLeft: '12px'}}>{scope}</li>
                    </ul>)
                }
            </div>
            <div>
                <b>Key Responsibilities</b>
                {
                    data.responsibilities.map((respo) => {
                        return(
                            <div>
                               <b style={{marginLeft: '8px'}}>{respo.stage}</b>
                               <ul>
                               {
                                   respo.resp.map(res => <li style={{marginLeft: '12px'}}>{res}</li>)
                               }
                               </ul> 
                            </div>
                        )
                    })
                }
            </div>
            <div className="modal-footer">
                <button className="button" onClick={props.onClose}>Close</button>
            </div>
        </section>
    </div> : null
  )
}
