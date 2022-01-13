import React, { useState, useEffect } from "react";

import './localrecords.css';

import { fetchRecords, fetchAddRecord} from '../../services';


// get the format of time
function getFormat(num) {
  const str = ("0" + Math.floor((num / 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((num / 1000) % 60)).slice(-2) + "." +  ("0" + Math.floor((num / 10) % 100)).slice(-2);
  return str;
}


function LocalRecordAddForm(props) {
  // props: avgRecord, fastestRecord, slowestRecord

  const [records, setRecords] = useState({});

  useEffect(
    () => {
      fetchRecords()
      .then( result => setRecords(result) )
      .catch( err => console.log('poop', err) );
    },
    [ setRecords ]
  );

  // submit operation
  let valName;
  let valEmail;
  let valType;

  function onAdd(name, email, fastest, avg, type) {
    fetchAddRecord(name, email, fastest, avg, type)
    .then( record => {
      setRecords({
        ...records,
        [record.id]: record,
      })
    })
    .catch( err => console.log('poop', err) );
  }

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
  }

  return (
    <div >
        {/* form */}
        <div className="localrecord-form">
          <h2>Record Submission</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAdd(valName.value, valEmail.value, 
                    getFormat(props.fastestRecord), 
                    getFormat(props.avgRecord), valType.value
                  );
            }}>

              <div className="nameform">
                  <label htmlFor="name"><span>Name</span><br />
                  <input 
                    className="name_input" 
                    type="text" 
                    name="name" 
                    id="name"
                    required
                    ref={inputName => valName = inputName}
                  />
                  <span className="required_label">*</span>
                  </label>
              </div>

              <div className="emailform">
                  <label htmlFor="email"><span>Email</span><br />
                  <input 
                    className="email_input" 
                    type="email" 
                    name="email" 
                    id="email"
                    ref={inputEmail => valEmail = inputEmail}
                  />
                  </label>
              </div>
              
              <div className="fastestform">
                  <label htmlFor="fastest" ><span>Fastest Time</span><br />
                  <input 
                    className="fastest_input" 
                    type="text" 
                    name="fastest" 
                    id="fastest" 
                    value={getFormat(props.fastestRecord)} 
                    onChange={(event)=>this.inputChangedHandler(event)}
                    pattern="^((?!00:00.00).)*$" 
                    title="Use Stopwatch to get fastest time!"
                  />
                  <span className="required_label">*</span>
                  </label>
              </div>

              <div className="averageform">
                  <label htmlFor="average"><span>Average Time</span><br />
                  <input 
                    className="average_input" 
                    type="text" 
                    name="average" 
                    id="average" 
                    value={getFormat(props.avgRecord)} 
                    onChange={(event)=>this.inputChangedHandler(event)}
                    pattern="^((?!00:00.00).)*$" 
                    title="Use Stopwatch to get average time!"
                  />
                  <span className="required_label">*</span>
                  </label>
              </div>

              <div className="typeform">
                  <label htmlFor="cubetype"><span>Cube Type</span><br />
                  <select 
                    name="cubetype" 
                    id="cubetype" 
                    required
                    defaultValue={'3x3x3 Cube'}
                    ref={selectType => valType = selectType}
                  >
                      <option value="3x3x3 Cube">3x3x3 Cube</option>
                      <option value="2x2x2 Cube">2x2x2 Cube</option>
                      <option value="4x4x4 Cube">4x4x4 Cube</option>
                      <option value="5x5x5 Cube">5x5x5 Cube</option>
                      <option value="Clock">Clock</option>
                      <option value="Megaminx">Megaminx</option>
                      <option value="Pyraminx">Pyraminx</option>
                      <option value="Others">Others</option>
                  </select>
                  <span className="required_label">*</span>
                  </label>
              </div>

              <div className="agreeform">
                  <label>
                  <input type="checkbox" name="agree" id="agree" value="agree" required/><span>Agree to show the record in the Record Board.</span>
                  </label>
              </div>
              
              <div className="submit_btn" aria-label="submit form button">
                <button  type="submit">
                  <span>Sumbit to the Board!</span>
                </button>
              </div>

          </form>
        </div>

        <div className="form-divider"><br/></div>

        {/* local record list */}
        <div className="siterecord">
          <h2>Record Board</h2>
          <div className="siterecord-table">
            <ul className="siterecord-table-title">
              <li className="siterecord-table-name"><span>Name</span></li>
              <li className="siterecord-table-type"><span>Cube Type</span></li>
              <li className="siterecord-table-fastest"><span>Fastest Time</span></li>
              <li className="siterecord-table-avg"><span>Average Time</span></li>
            </ul>
            {
              Object.values(records).map( record => (
                <ul key={record.id}>
                  <li className="siterecord-table-name"><span>{record.name}</span></li>
                  <li className="siterecord-table-type"><span>{record.type}</span></li>
                  <li className="siterecord-table-fastest"><span>{record.fastest}</span></li>
                  <li className="siterecord-table-avg"><span>{record.avg}</span></li>
                </ul>
              ) )
            }
          </div>
        </div>

    </div>
  );
}
  
export default LocalRecordAddForm;

  