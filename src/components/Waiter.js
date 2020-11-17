// import { useDispatch } from 'react-redux';

import Axios from "axios";
import { useEffect, useState } from "react";

function Waiter() {
    const [orders, setOrders] = useState([])
    const [type, setType] = useState('favourites')


    
    useEffect(() => {
        Axios.post(`http://localhost:8000/dashboard/waiter`, {type})
          .then(res => {
            setOrders(res.data)
          })
          .catch(err => console.log(err))
    }, [type]);

    const changeType = (type) => {
      setType(type)
    }

  return (
    <div>
      {/* Top Navbar */}
      <div className="top-nav">
        <div className="menuToggle">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <div className="notification">
          <svg width={16} height={22} viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 2V2.29C12.892 3.15 15 5.829 15 9V16H16V18H0V16H1V9C1.00009 7.49235 1.48674 6.02499 2.38757 4.81607C3.28841 3.60714 4.55534 2.72122 6 2.29V2C6 1.46957 6.21071 0.960859 6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585786C9.78929 0.960859 10 1.46957 10 2ZM3 16H13V9C13 7.67392 12.4732 6.40215 11.5355 5.46447C10.5979 4.52678 9.32608 4 8 4C6.67392 4 5.40215 4.52678 4.46447 5.46447C3.52678 6.40215 3 7.67392 3 9V16ZM10 20V19H6V20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22C8.53043 22 9.03914 21.7893 9.41421 21.4142C9.78929 21.0391 10 20.5304 10 20Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="orderHeading">
        <h4><span>Order</span> Workload of</h4>
      </div>
      {/* Order Heading ends here */}
      {/* Main Lady Text Start*/}
      <div className="pub">
        <h2 className="pubtext">Restaurant Name</h2>
      </div>
      {/* main Lady Text end */}
      {/* items Counter Start */}
      <div className="itemcounter">
        <div className="totalItem">
          <div className="digits orders-length">{orders.order_length}</div>
          <p className="text">Total Items</p>
        </div>
        <div className="totalItem">
          <div className="digitYellow called-orders-length">0</div>
          <p className="text">Called</p>
        </div>
        <div className="totalItem">
          <div className="digits pending-orders-length">0</div>
          <p className="text">Pending</p>
        </div>
      </div>
      {/* items Counter End */}
      {/* Tabs Start */}
      <div className="tab">
        <div className="arrivalButton">
          <button className="tablinks favourites" onClick={() => changeType('favourites')}>
            Favourites
                </button>
        </div>
        <div className="dynamicButton">
          <button className="tablinks dynamic" onClick={() => changeType('dynamic')}>
            Dynamic
                </button>
        </div>
        <div className="arrivalButton">
          <button className="tablinks arrival" onClick={() => changeType('arrival')}>
            Arrival
                </button>
        </div>
      </div>
      {/* Tabs End */}
      {/* Tab-Content Start */}
      <div className="row tabData">
        {orders?.order?.map((order, index) => (
          <div key={ index }>
            <div className="startTimer">
              <div className="number four">
                {order?.order_number <= 9 ? '0' + order?.order_number : order?.order_number}
              </div>
              {/* <div className="timer four"> */}
                {/* Start: <span className="order-time">${local_time}</span> */}
              {/* </div> */}
            </div>
            <div className="orderDetails four">
              <div className="headerDetails four">
                <p>NEW ORDER!</p>
                <p>
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5.33333C5.52741 5.33333 6.04298 5.17694 6.48152 4.88392C6.92005 4.5909 7.26184 4.17443 7.46367 3.68716C7.66551 3.19989 7.71832 2.66371 7.61542 2.14643C7.51253 1.62914 7.25855 1.15399 6.88561 0.78105C6.51267 0.40811 6.03752 0.154134 5.52024 0.0512404C5.00295 -0.0516535 4.46678 0.00115542 3.97951 0.202989C3.49224 0.404823 3.07576 0.746616 2.78274 1.18515C2.48973 1.62368 2.33333 2.13925 2.33333 2.66667C2.33333 3.37391 2.61428 4.05219 3.11438 4.55229C3.61447 5.05238 4.29275 5.33333 5 5.33333ZM10.3333 6.66667C10.7289 6.66667 11.1156 6.54937 11.4445 6.32961C11.7734 6.10984 12.0297 5.79749 12.1811 5.43203C12.3325 5.06658 12.3721 4.66445 12.2949 4.27649C12.2177 3.88853 12.0272 3.53216 11.7475 3.25245C11.4678 2.97275 11.1115 2.78227 10.7235 2.7051C10.3355 2.62793 9.93341 2.66753 9.56796 2.81891C9.20251 2.97028 8.89015 3.22663 8.67039 3.55553C8.45063 3.88443 8.33333 4.2711 8.33333 4.66667C8.33333 5.1971 8.54404 5.70581 8.91912 6.08088C9.29419 6.45595 9.8029 6.66667 10.3333 6.66667ZM13 11.3333C13.1768 11.3333 13.3464 11.2631 13.4714 11.1381C13.5964 11.013 13.6667 10.8435 13.6667 10.6667C13.6661 10.0436 13.491 9.43315 13.1611 8.90459C12.8312 8.37602 12.3597 7.95051 11.8002 7.67631C11.2407 7.40212 10.6156 7.29023 9.99572 7.35333C9.37586 7.41644 8.78609 7.65202 8.29333 8.03333C7.64034 7.3829 6.80937 6.9404 5.90521 6.76162C5.00106 6.58284 4.06421 6.67579 3.21281 7.02876C2.36142 7.38172 1.6336 7.97889 1.12116 8.74496C0.608708 9.51102 0.334575 10.4117 0.333328 11.3333C0.333328 11.5101 0.403566 11.6797 0.52859 11.8047C0.653615 11.9298 0.823184 12 0.999995 12H9C9.17681 12 9.34638 11.9298 9.4714 11.8047C9.59642 11.6797 9.66666 11.5101 9.66666 11.3333" fill="#FFFA7E"></path>
                  </svg>
                                  0
                                  </p>
              </div>
              <div className="contentDetails four" style={{color: "#FFA4A4"}}>
                <p className="payment four">{order?.currency} {order?.paid_amount} / {order?.price}</p>
                <div className="linkText four">
                  <div className="anchor">
                    <a href="/dashboard/called_items/${order.order_number}" className={order.called_items === 0 ? "inactiveLink calledContent four" : "calledContent four"}>
                    <p>CALLED {order?.called_items}/{order?.total_items}</p>

                    </a>
                  </div>
                  <div className="four">
                    <p>00:15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Tab-Content End */}
      {/* Pop_up Start here */}
      <div className="syncModal">
        <div className="popup-overlay">
          {/*Creates the popup content*/}
          <div className="popup-content">
            <div className="modalBody">
              <div className="closeButton">×</div>
              <div className="syncHeading">
                <p>Choose your department:</p>
              </div>
              <form action="#">
                <input type="radio" id="waiters" name="radio-group" />
                <label htmlFor="waiters">Waiters</label><br />
                <input type="radio" id="kitchen" name="radio-group" />
                <label htmlFor="kitchen">Kitchen</label><br />
                <input type="radio" id="bar" name="radio-group" defaultChecked />
                <label htmlFor="bar">Bar</label><br />
                <input type="radio" id="demo" name="radio-group" />
                <label htmlFor="demo">Demo</label><br />
              </form>
              <div className="syncButton">
                <button type="button">Start Working</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pop_up End here */}
      {/* Called item Pop_up Start here */}
      <div className="syncCalledModal">
        <div className="popup-overlayCalled">
          {/*Creates the popup content*/}
          <div className="popup-content">
            <div className="modalCalledBody">
              {/* Top Navbar */}
              <div className="top-nav">
                <div className="close">
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
              {/* {'{'}% for order in orders %{'}'} */}
              <div className="dalWinters">
                <div className="titleText">
                  <h4>
                  </h4>
                  {/* <h4>{'{'}{'{'}order.name{'}'}{'}'}&nbsp; &nbsp;X&nbsp; {'{'}{'{'}order.qta{'}'}{'}'}</h4> */}
                </div>
                <div className="noteText">
                  {/* {'{'}% if order.order_note %{'}'} */}
                  {/* <h4>{'{'}{'{'}order.order_note | safe{'}'}{'}'}</h4> */}
                  {/* {'{'}% endif %{'}'} */}
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
              {/* {'{'}% endfor %{'}'} */}
              {/* Dalwhinnie Winters End */}
            </div>
          </div>
        </div>
      </div>
      {/* Called item Pop_up End here */}
    </div>
  );
}

export default Waiter;
