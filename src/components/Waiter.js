// import { useDispatch } from 'react-redux';

import Axios from "axios";
import { useEffect, useState } from "react";
import queryString from 'query-string';
import { Link, useHistory, useLocation } from "react-router-dom";
import moment from 'moment';
import Modal from "./Modal";

function Waiter() {
  const [orders, setOrders] = useState([]);
  const { search } = useLocation();
  const history = useHistory();
  const params = queryString.parse(search);
  const [type, setType] = useState(params?.type ? params?.type : 'favourites');
  const [modalShow, setShow] = useState(false);
  const [id, setId] = useState();
  const headers = {
    "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOjIsImV4cCI6MTYwNjI5MTY3OX0.z1TyVOtelGWjOGcGx29i4EllAmsN6pLP8VdePtZ5dAM"
  }

  useEffect(() => {
    
    Axios.post(`http://localhost:8000/dashboard/waiter`, { type: type }, { headers })
      .then(res => {
        setOrders(res.data);
        setType(type);
        history.push(`/${res.data.type ? `?type=${res.data.type}` : ''}`);
      })
      .catch(err => console.log(err))
  }, [history, type]);

  const changeType = (type) => {
    setType(type);
  }

  const changeShow = (e) => {
    setId(e.target.id);
    setShow(!modalShow);
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
          <div className="digits orders-length">{orders.orders_length}</div>
          <p className="text">Total Items</p>
        </div>
        <div className="totalItem">
          <div className="digitYellow called-orders-length">{orders.called_orders_length}</div>
          <p className="text">Called</p>
        </div>
        <div className="totalItem">
          <div className="digits pending-orders-length">{orders.pending_orders_length}</div>
          <p className="text">Pending</p>
        </div>
      </div>
      {/* items Counter End */}
      {/* Tabs Start */}
      <div className="tab">
        <div className="arrivalButton">
          <button className={type === "favourites" ? "active tablinks favourites" : "tablinks favourites"} onClick={() => changeType('favourites')}>
            Favourites
          </button>
        </div>
        <div className="dynamicButton">
          <button className={type === "dynamic" ? "active tablinks dynamic" : "tablinks dynamic"} onClick={() => changeType('dynamic')}>
            Dynamic
          </button>
        </div>
        <div className="arrivalButton">
          <button className={type === "arrival" ? "active tablinks arrival" : "tablinks arrival"} onClick={() => changeType('arrival')}>
            Arrival
          </button>
        </div>
      </div>
      {/* Tabs End */}
      {/* Tab-Content Start */}
      <div className="row tabData">
        {orders?.orders?.map((order, index) => (
          <div key={index} className="boxes">
            <div className="startTimer">
              <div className={`number ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`}>
                {order?.order_number <= 9 ? '0' + order?.order_number : order?.order_number}
              </div>{ }
              <div className={`timer ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`}>
                Start: <span className="order-time">{moment.utc(order?.ordered).local().format('HH:mm')}</span>
              </div>
            </div>
            <div className={`orderDetails ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`}>
              <div className={`headerDetails ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`}>
                <p>NEW ORDER!</p>
                <p>
                  {parseInt(order?.time) > 60 ?
                    <img src={`${process.env.PUBLIC_URL}/icons/pink_persons.svg`} alt='' />
                    :
                    parseInt(order?.time) > 30 ?
                      <img src={`${process.env.PUBLIC_URL}/icons/yellow_persons.svg`} alt='' />
                      :
                      <img src={`${process.env.PUBLIC_URL}/icons/green_persons.svg`} alt='' />
                  }
                                  0
                </p>
              </div>
              <div className={`contentDetails ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`} style={{ color: "#FFA4A4" }}>
                <p className={`payment ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`}>{order?.currency} {order?.paid_amount} / {order?.price}</p>
                <div className={`linkText ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`}>
                  <div className="anchor">
                    <Link to="/" className={`${order.called_items === 0 && "inactiveLink"} calledContent ${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`} onClick={changeShow}>
                      <p id={order.order_number}>CALLED {order?.called_items}/{order?.total_items}</p>
                    </Link>
                  </div>
                  <div className={`${parseInt(order?.time) > 60 ? "" : parseInt(order?.time) > 30 ? "four" : "six"}`}>
                    <p>00:15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={modalShow}
        changeShow={changeShow}
        id={id}
      />
      {/* Tab-Content End */}
    </div>
  );
}

export default Waiter;
