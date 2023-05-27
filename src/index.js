import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Recommended from './Recommended/Recommended';
import Movies from "./Movies/Movies.js"
import LiveEvents from "./LiveEvents/LiveEvents.js"
import Premires from "./Premires/Premires.js"
import EventsNearBy from "./EventsNearBy/EventsNearBy.js"
import OnlineEvents from "./OnlineEvents/OnlineEvents.js";
import Footer from "./Footer/Footer.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Movies/>
  <LiveEvents/>
  <Premires/>
  <EventsNearBy/>
  <OnlineEvents/>
  <Footer/>
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
