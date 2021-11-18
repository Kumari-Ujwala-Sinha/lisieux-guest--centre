import React, { useState } from "react";
import "./contactform.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from "axios";
import swal from "sweetalert";

function Contactform(props) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [mailBody, setmailBody] = useState("");
  const [subject, setSubject] = useState("");

  const handleContactSubmit = (e) => {
    if (name === "" || email === "" || mailBody === "" || subject === "") {
      swal({
        title: "Please fill all the fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      return;
    }
    e.preventDefault();

    // console.log(name, email, mailBody, subject);

    axios
      .post("https://lisieux-backend.herokuapp.com/api/postcontactmail", {
        name,
        email,
        subject,
        mailBody,
      })
      .catch((err) => console.log(err));

    swal({
      title: "Email Sent Successfully!",
      text: "",
      icon: "success",
      buttons: {
        confirm: { text: "Okay", className: "sweet-warning" },
      },
    });

    setName("");
    setemail("");
    setmailBody("");
    setSubject("");
  };

  return (
    <div className="contactform">
      <h1>Get In Touch</h1>
      <div className="contactform__wrapper">
        <form className="contactform__form" onSubmit={handleContactSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
          <textarea
            type="text"
            placeholder="Message"
            onChange={(e) => setmailBody(e.target.value)}
            value={mailBody}
            required
          ></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
        <div id="map" className="contactform__map">
          <Map
            google={props.google}
            style={{ height: "100%", width: "100%" }}
            zoom={14}
          >
            <Marker name={"Current location"} />
            <InfoWindow></InfoWindow>
          </Map>
        </div>
      </div>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDC0AyfIxIqkPkNeYtGvY6t6bsJGG-oprw",
})(Contactform);
