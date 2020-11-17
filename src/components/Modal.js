import Axios from "axios";
import { useEffect } from "react";

function Modal({show, changeShow, id}) {


  useEffect(() => {
    if(id!==undefined){
    Axios.post(`http://localhost:8000/dashboard/called_items/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
    }
  }, [id]);

  return (
    <div>
      {/* Called item Pop_up Start here */}
      <div className="syncCalledModal" style={show ? {display:"block"} : {display:"none"}} >
        <div className="popup-overlayCalled">
          {/*Creates the popup content*/}
          <div className="popup-content">
            <div className="modalCalledBody">
              {/* Top Navbar */}
              <div className="top-nav">
                <div className="close cursorPointer" onClick={changeShow}>
                  ×
                      </div>
              </div>
              <div className="calledHeading">
                <div className="calledText">Called Items:
                        <span className="calleditem">{'{'}{'{'}orders|length{'}'}{'}'}</span>
                </div>
                <div className="printButton">
                  <button className="print">Print &nbsp;
                          <i className="fa fa-print" />
                  </button>
                </div>
              </div>
              <div className="dalWinters">
                <div className="titleText">
                  <h4>
                  </h4>
                </div>
                <div className="noteText">
                </div>
                <div className="quantity">
                  <p>
                    <svg width={9} height={13} viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.75 0.25V1.5H1.375V3.375C1.375 4.2038 1.70424 4.99866 2.29029 5.58471C2.87634 6.17076 3.6712 6.5 4.5 6.5C3.6712 6.5 2.87634 6.82924 2.29029 7.41529C1.70424 8.00134 1.375 8.7962 1.375 9.625V11.5H0.75V12.75H8.25V11.5H7.625V9.625C7.625 8.7962 7.29576 8.00134 6.70971 7.41529C6.12366 6.82924 5.3288 6.5 4.5 6.5C4.91038 6.5 5.31674 6.41917 5.69589 6.26212C6.07503 6.10508 6.41953 5.87489 6.70971 5.58471C6.99989 5.29453 7.23008 4.95003 7.38712 4.57089C7.54417 4.19174 7.625 3.78538 7.625 3.375V1.5H8.25V0.25H0.75ZM2.625 1.5H6.375V3.375C6.375 3.87228 6.17746 4.3492 5.82583 4.70083C5.47419 5.05246 4.99728 5.25 4.5 5.25C4.00272 5.25 3.52581 5.05246 3.17417 4.70083C2.82254 4.3492 2.625 3.87228 2.625 3.375V1.5ZM2.625 9.625V11.5H6.375V9.625C6.375 9.12772 6.17746 8.65081 5.82583 8.29918C5.47419 7.94754 4.99728 7.75 4.5 7.75C4.00272 7.75 3.52581 7.94754 3.17417 8.29918C2.82254 8.65081 2.625 9.12772 2.625 9.625Z" fill="#FFFA7E" />
                    </svg>&nbsp;
                          00:13
                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Called item Pop_up End here */}
    </div>
  );
}

export default Modal;
