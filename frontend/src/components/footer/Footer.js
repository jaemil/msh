import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "black",
              padding: "0% 20% 0% 20%",
            }}
          >
            {/* <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Felix}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              width="100px"
              height="150px"
              src={Davide}
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              width="100px"
              height="150px"
              src={Andreas}
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Thomas}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Heike}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Timo}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Josua}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Sarah}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Hannes}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Johannes}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Wolle}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Yvonne}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Sean}
              width="100px"
              height="150px"
            ></img>
            <img
              style={{ maxWidth: "100%", width: "7.15%", height: "60%" }}
              src={Sofia}
              width="100px"
              height="150px"
            ></img> */}
          </div>
          <p style={{ textAlign: "center", padding: "50px 0px 20px 0px" }}>
            <a style={{ margin: "0px 10px 0px 10px" }}>
              © 2020 Musikschule Hopf
            </a>
            ·
            <Link to="/impressum" style={{}}>
              <div
                style={{
                  margin: "0px 10px 0px 10px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Impressum
              </div>
            </Link>
            ·
            <Link to="/datenschutz" style={{ textDecoration: "none" }}>
              <div
                style={{
                  margin: "0px 10px 0px 10px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Datenschutz
              </div>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
