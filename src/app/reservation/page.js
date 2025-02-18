
import Link from "next/link";
import React from "react";

export default function Component() {
  return (
    <div className="m-auto w-[75%] flex justify-center md:h-screen items-center flex-col" >
      <button className="border border-white px-3 py-1 rounded-sm mt-5 absolute top-0 left-5"> <Link href={"/"}>fermer</Link></button>
      <div className="hidden md:flex flex-col md:flex-row ">
        <form
          className="form-left bg-black h-[700px]"
          action="https://formspree.io/f/mwpvwdqn"
          method="POST"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            margin: "0px",
            boxSizing: "border-box",
            padding: "75px 60px",
          }}
        >
          <h2
            className="headline-1 text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              color: "#fff",
              fontFamily: "var(--fontFamily-forum)",
              fontWeight: 400,
              lineHeight: "1.2em",
              fontSize: "calc(2rem + 2.5vw)",
              textAlign: "center",
            }}
          >
            Réservation en ligne
          </h2>
          <p
            className="form-text text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              textAlign: "center",
              marginBlockEnd: "40px",
            }}
          >
            Demande de réservation{" "}
            <a
              className="link"
              href="tel:0146662579"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                textDecoration: "none",
                display: "inline",
                color: "#e4c590",
              }}
            >
              0147650016
            </a>{" "}
            ou remplissez le formulaire de commande
          </p>
          <div
            className="input-wrapper"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "20px",
            }}
          >
            <input
              className="input-field"
              name="Name"
              type="text"
              autoComplete="off"
              required
              placeholder="Name"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                letterSpacing: "inherit",
                display: "block",
                background: "none",
                font: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                width: "100%",
                padding: "10px 20px",
                border: "1px solid hsla(0,0%,100%,.1)",
                outline: "none",
                transition: "border-color 500ms ease",
                backgroundColor: "#1b1c1d",
                color: "#fff",
                height: "56px",
                marginBlockEnd: "20px",
              }}
            />
            <input
              className="input-field"
              name="email"
              type="email"
              autoComplete="off"
              required
              placeholder="Email"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                letterSpacing: "inherit",
                display: "block",
                background: "none",
                font: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                width: "100%",
                padding: "10px 20px",
                border: "1px solid hsla(0,0%,100%,.1)",
                outline: "none",
                transition: "border-color 500ms ease",
                backgroundColor: "#1b1c1d",
                color: "#fff",
                height: "56px",
                marginBlockEnd: "20px",
              }}
            />
            <input
              className="input-field"
              name="phone"
              type="tel"
              autoComplete="off"
              required
              placeholder="Phone Number"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                letterSpacing: "inherit",
                display: "block",
                background: "none",
                font: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                width: "100%",
                padding: "10px 20px",
                border: "1px solid hsla(0,0%,100%,.1)",
                outline: "none",
                transition: "border-color 500ms ease",
                backgroundColor: "#1b1c1d",
                color: "#fff",
                height: "56px",
                marginBlockEnd: "20px",
              }}
            />
          </div>
          <div
            className="input-wrapper"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              display: "grid",
              columnGap: "20px",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            <div
              className="icon-wrapper"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                position: "relative",
                marginBlockEnd: "20px",
              }}
            >
              <ion-icon
                className="md hydrated"
                name="person-outline"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  left: "15px",
                }}
              />
              <select
                className="input-field"
                name="person"
                required
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  display: "block",
                  background: "none",
                  font: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  outline: "none",
                  transition: "border-color 500ms ease",
                  backgroundColor: "#1b1c1d",
                  color: "#fff",
                  height: "56px",
                  marginBlockEnd: "0px",
                  paddingInlineStart: "40px",
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  1 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  2 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  3 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  4 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  5 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  6 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  7 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  8 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  9 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  10 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  11 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  12 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  13 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  14 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  15 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  16 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  17 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  18 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  19 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  20 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  21 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  22 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  23 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  24 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  25 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  26 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  27 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  28 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  29 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  30 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  31 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  32 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  33 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  34 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  35 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  36 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  37 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  38 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  39 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  40 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  41 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  42 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  43 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  44 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  45 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  46 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  47 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  48 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  49 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  50 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  51 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  52 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  53 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  54 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  55 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  56 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  57 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  58 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  59 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  60 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  61 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  62 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  63 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  64 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  65 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  66 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  67 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  68 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  69 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  70 Person
                </option>
              </select>
              <ion-icon
                className="md hydrated"
                name="chevron-down"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  right: "10px",
                }}
              />
            </div>
            <div
              className="icon-wrapper"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                position: "relative",
                marginBlockEnd: "20px",
              }}
            >
              <ion-icon
                className="md hydrated"
                name="calendar-clear-outline"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  left: "15px",
                }}
              />
              <input
                className="input-field"
                name="reservation-date"
                type="date"
                required
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  letterSpacing: "inherit",
                  display: "block",
                  background: "none",
                  font: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  outline: "none",
                  transition: "border-color 500ms ease",
                  backgroundColor: "#1b1c1d",
                  color: "#fff",
                  height: "56px",
                  marginBlockEnd: "0px",
                  paddingInlineStart: "40px",
                  appearance: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  paddingInlineEnd: "10px",
                }}
              />
              <ion-icon
                className="md hydrated"
                name="chevron-down"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  right: "10px",
                }}
              />
            </div>
            <div
              className="icon-wrapper"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                position: "relative",
                marginBlockEnd: "20px",
              }}
            >
              <ion-icon
                className="md hydrated"
                name="time-outline"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  left: "15px",
                }}
              />
              <select
                className="input-field"
                name="person"
                required
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  display: "block",
                  background: "none",
                  font: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  outline: "none",
                  transition: "border-color 500ms ease",
                  backgroundColor: "#1b1c1d",
                  color: "#fff",
                  height: "56px",
                  marginBlockEnd: "0px",
                  paddingInlineStart: "40px",
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option
                  value="08:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  08 : 00 am
                </option>
                <option
                  value="09:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  09 : 00 am
                </option>
                <option
                  value="010:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  10 : 00 am
                </option>
                <option
                  value="011:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  11 : 00 am
                </option>
                <option
                  value="012:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  12 : 00 am
                </option>
                <option
                  value="01:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  01 : 00 pm
                </option>
                <option
                  value="02:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  02 : 00 pm
                </option>
                <option
                  value="03:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  03 : 00 pm
                </option>
                <option
                  value="04:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  04 : 00 pm
                </option>
                <option
                  value="05:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  05 : 00 pm
                </option>
                <option
                  value="06:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  06 : 00 pm
                </option>
                <option
                  value="07:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  07 : 00 pm
                </option>
                <option
                  value="08:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  08 : 00 pm
                </option>
                <option
                  value="09:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  09 : 00 pm
                </option>
                <option
                  value="10:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  10 : 00 pm
                </option>
              </select>
              <ion-icon
                className="md hydrated"
                name="chevron-down"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  right: "10px",
                }}
              />
            </div>
          </div>
          <textarea
            className="input-field"
            name="message"
            autoComplete="off"
            required
            placeholder="Message"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              letterSpacing: "inherit",
              display: "block",
              background: "none",
              font: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              width: "100%",
              padding: "10px 20px",
              border: "1px solid hsla(0,0%,100%,.1)",
              outline: "none",
              transition: "border-color 500ms ease",
              backgroundColor: "#1b1c1d",
              color: "#fff",
              marginBlockEnd: "20px",
              paddingBlock: "20px",
              resize: "none",
              height: "140px",
              lineHeight: "1em",
            }}
          />
          <button
            className="btn btn-secondary"
            type="submit"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              appearance: "button",
              display: "block",
              background: "none",
              font: "inherit",
              backgroundImage: "none",
              lineHeight: "inherit",
              fontFamily: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              cursor: "pointer",
              border: "2px solid #e4c590",
              padding: "12px 45px",
              overflow: "hidden",
              position: "relative",
              fontSize: "1.2rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "3px",
              zIndex: 1,
              backgroundColor: "#e4c590",
              color: "#000",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <span
              className="text text-1"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "block",
                transition: "250ms ease",
              }}
            >
              Réservez une table
            </span>
            <span
              className="text text-2"
              aria-hidden="true"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "block",
                transition: "250ms ease",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                minWidth: "max-content",
                color: "#fff",
              }}
            >
              Réservez une table
            </span>
          </button>
        </form>
        <style
          dangerouslySetInnerHTML={{
            __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-size: 10px;
  scroll-behavior: smooth;
  visibility: inherit;
}

body {
  border: 0px solid rgb(229, 231, 235);
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
  background-color: #161718;
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.85em;
  font-family: Forum, serif;
  font-weight: 400;
  font-style: normal;
  height: fit-content;
  overflow: overlay;
}
`,
          }}
        />
        <div
          className="form-right bg-black h-[700px] "
          style={{
            border: "0px solid rgb(229, 231, 235)",
            margin: "0px",
            boxSizing: "border-box",
            textAlign: "center",
            backgroundPosition: "0px 0px",
            backgroundRepeat: "repeat",
            padding: "75px 60px",
            backgroundImage:
              'url("https://www.restaurantmilane.fr/assets/images/form-pattern.png")',
          }}
        >
          <h2
            className="headline-1 text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              color: "#fff",
              fontFamily: "var(--fontFamily-forum)",
              fontWeight: 400,
              lineHeight: "1.2em",
              fontSize: "calc(2rem + 2.5vw)",
              textAlign: "center",
              marginBlockEnd: "40px",
            }}
          >
            Contactez-nous
          </h2>
          <p
            className="contact-label"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              fontWeight: 700,
              marginBlockEnd: "5px",
            }}
          >
            Demande de réservation
          </p>
          <a
            className="body-1 contact-number hover-underline"
            href="tel:0146662579"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              display: "block",
              textDecoration: "none",
              fontSize: "3rem",
              lineHeight: "1.4em",
              marginInline: "auto",
              color: "#e4c590",
              maxWidth: "max-content",
              position: "relative",
            }}
          >
            - 0147650016
          </a>
          <div
            className="separator"
            style={{
              padding: "0px",
              boxSizing: "border-box",
              border: "1px solid #e4c590",
              width: "8px",
              height: "8px",
              transform: "rotate(45deg)",
              margin: "20px auto",
            }}
          />
          <p
            className="contact-label"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              fontWeight: 700,
              marginBlockEnd: "5px",
            }}
          >
            Address
          </p>
          <address
            className="body-4"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              fontStyle: "normal",
              fontSize: "1.6rem",
              color: "#a6a6a6",
              lineHeight: "1.5em",
              marginBlockEnd: "25px",
            }}
          >
            158 avenue Victor Hugo, 92140 . Clamart{" "}
            <br
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
              }}
            />
            France
          </address>
          <p
            className="menu-text text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              textAlign: "center",
            }}
          >
            Horaires{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              12:00
            </span>{" "}
            à{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              14:30
            </span>{" "}
            de{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              19:00
            </span>{" "}
            à{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              23:00
            </span>
          </p>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-size: 10px;
  scroll-behavior: smooth;
  visibility: inherit;
}

body {
  border: 0px solid rgb(229, 231, 235);
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
  background-color: #161718;
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.85em;
  font-family: Forum, serif;
  font-weight: 400;
  font-style: normal;
  height: fit-content;
  overflow: overlay;
}
`,
          }}
        />
      </div>
      <div className="md:hidden">
        <form
          className=" form-left overflow-auto"
          action="https://formspree.io/f/xzzbbznw"
          method="POST"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            margin: "0px",
            boxSizing: "border-box",
            padding: "40px 20px 30px",
          }}
        >
          <h2
            className="headline-1 text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              color: "#fff",
              fontFamily: "var(--fontFamily-forum)",
              fontWeight: 400,
              lineHeight: "1.2em",
              fontSize: "calc(2rem + 2.5vw)",
              textAlign: "center",
            }}
          >
            Réservation en ligne
          </h2>
          <p
            className="form-text text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              textAlign: "center",
              marginBlockEnd: "40px",
            }}
          >
            Demande de réservation{" "}
            <a
              className="link"
              href="tel:0146662579"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                textDecoration: "none",
                display: "inline",
                color: "#e4c590",
              }}
            >
              0147650016
            </a>{" "}
            ou remplissez le formulaire de commande
          </p>
          <div
            className="input-wrapper"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
            }}
          >
            <input
              className="input-field"
              name="Name"
              type="text"
              autoComplete="off"
              required
              placeholder="Name"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                letterSpacing: "inherit",
                display: "block",
                background: "none",
                font: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                width: "100%",
                padding: "10px 20px",
                border: "1px solid hsla(0,0%,100%,.1)",
                outline: "none",
                transition: "border-color 500ms ease",
                backgroundColor: "#1b1c1d",
                color: "#fff",
                height: "56px",
                marginBlockEnd: "20px",
              }}
            />
            <input
              className="input-field"
              name="email"
              type="email"
              autoComplete="off"
              required
              placeholder="Email"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                letterSpacing: "inherit",
                display: "block",
                background: "none",
                font: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                width: "100%",
                padding: "10px 20px",
                border: "1px solid hsla(0,0%,100%,.1)",
                outline: "none",
                transition: "border-color 500ms ease",
                backgroundColor: "#1b1c1d",
                color: "#fff",
                height: "56px",
                marginBlockEnd: "20px",
              }}
            />
            <input
              className="input-field"
              name="phone"
              type="tel"
              autoComplete="off"
              required
              placeholder="Phone Number"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                letterSpacing: "inherit",
                display: "block",
                background: "none",
                font: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                width: "100%",
                padding: "10px 20px",
                border: "1px solid hsla(0,0%,100%,.1)",
                outline: "none",
                transition: "border-color 500ms ease",
                backgroundColor: "#1b1c1d",
                color: "#fff",
                height: "56px",
                marginBlockEnd: "20px",
              }}
            />
          </div>
          <div
            className="input-wrapper"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
            }}
          >
            <div
              className="icon-wrapper"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                position: "relative",
                marginBlockEnd: "20px",
              }}
            >
              <ion-icon
                className="md hydrated"
                name="person-outline"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  left: "15px",
                }}
              />
              <select
                className="input-field"
                name="person"
                required
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  display: "block",
                  background: "none",
                  font: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  outline: "none",
                  transition: "border-color 500ms ease",
                  backgroundColor: "#1b1c1d",
                  color: "#fff",
                  height: "56px",
                  marginBlockEnd: "0px",
                  paddingInlineStart: "40px",
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  1 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  2 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  3 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  4 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  5 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  6 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  7 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  8 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  9 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  10 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  11 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  12 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  13 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  14 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  15 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  16 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  17 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  18 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  19 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  20 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  21 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  22 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  23 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  24 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  25 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  26 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  27 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  28 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  29 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  30 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  31 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  32 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  33 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  34 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  35 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  36 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  37 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  38 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  39 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  40 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  41 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  42 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  43 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  44 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  45 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  46 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  47 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  48 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  49 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  50 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  51 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  52 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  53 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  54 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  55 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  56 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  57 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  58 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  59 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  60 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  61 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  62 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  63 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  64 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  65 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  66 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  67 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  68 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  69 Person
                </option>
                <option
                  value="1-person"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  70 Person
                </option>
              </select>
              <ion-icon
                className="md hydrated"
                name="chevron-down"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  right: "10px",
                }}
              />
            </div>
            <div
              className="icon-wrapper"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                position: "relative",
                marginBlockEnd: "20px",
              }}
            >
              <ion-icon
                className="md hydrated"
                name="calendar-clear-outline"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  left: "15px",
                }}
              />
              <input
                className="input-field"
                name="reservation-date"
                type="date"
                required
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  letterSpacing: "inherit",
                  display: "block",
                  background: "none",
                  font: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  outline: "none",
                  transition: "border-color 500ms ease",
                  backgroundColor: "#1b1c1d",
                  color: "#fff",
                  height: "56px",
                  marginBlockEnd: "0px",
                  paddingInlineStart: "40px",
                  appearance: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  paddingInlineEnd: "10px",
                }}
              />
              <ion-icon
                className="md hydrated"
                name="chevron-down"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  right: "10px",
                }}
              />
            </div>
            <div
              className="icon-wrapper"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                position: "relative",
                marginBlockEnd: "20px",
              }}
            >
              <ion-icon
                className="md hydrated"
                name="time-outline"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  left: "15px",
                }}
              />
              <select
                className="input-field"
                name="person"
                required
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  display: "block",
                  background: "none",
                  font: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  outline: "none",
                  transition: "border-color 500ms ease",
                  backgroundColor: "#1b1c1d",
                  color: "#fff",
                  height: "56px",
                  marginBlockEnd: "0px",
                  paddingInlineStart: "40px",
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option
                  value="08:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  08 : 00 am
                </option>
                <option
                  value="09:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  09 : 00 am
                </option>
                <option
                  value="010:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  10 : 00 am
                </option>
                <option
                  value="011:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  11 : 00 am
                </option>
                <option
                  value="012:00am"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  12 : 00 am
                </option>
                <option
                  value="01:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  01 : 00 pm
                </option>
                <option
                  value="02:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  02 : 00 pm
                </option>
                <option
                  value="03:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  03 : 00 pm
                </option>
                <option
                  value="04:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  04 : 00 pm
                </option>
                <option
                  value="05:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  05 : 00 pm
                </option>
                <option
                  value="06:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  06 : 00 pm
                </option>
                <option
                  value="07:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  07 : 00 pm
                </option>
                <option
                  value="08:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  08 : 00 pm
                </option>
                <option
                  value="09:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  09 : 00 pm
                </option>
                <option
                  value="10:00pm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  10 : 00 pm
                </option>
              </select>
              <ion-icon
                className="md hydrated"
                name="chevron-down"
                aria-hidden="true"
                role="img"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  visibility: "inherit",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  right: "10px",
                }}
              />
            </div>
          </div>
          <textarea
            className="input-field"
            name="message"
            autoComplete="off"
            required
            placeholder="Message"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              letterSpacing: "inherit",
              display: "block",
              background: "none",
              font: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              width: "100%",
              padding: "10px 20px",
              border: "1px solid hsla(0,0%,100%,.1)",
              outline: "none",
              transition: "border-color 500ms ease",
              backgroundColor: "#1b1c1d",
              color: "#fff",
              marginBlockEnd: "20px",
              paddingBlock: "20px",
              resize: "none",
              height: "140px",
              lineHeight: "1em",
            }}
          />
          <button
            className="btn btn-secondary"
            type="submit"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              appearance: "button",
              display: "block",
              background: "none",
              font: "inherit",
              backgroundImage: "none",
              lineHeight: "inherit",
              fontFamily: "inherit",
              fontFeatureSettings: "inherit",
              fontVariationSettings: "inherit",
              cursor: "pointer",
              border: "2px solid #e4c590",
              padding: "12px 45px",
              overflow: "hidden",
              position: "relative",
              fontSize: "1.2rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "3px",
              zIndex: 1,
              backgroundColor: "#e4c590",
              color: "#000",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <span
              className="text text-1"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "block",
                transition: "250ms ease",
              }}
            >
              Réservez une table
            </span>
            <span
              className="text text-2"
              aria-hidden="true"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "block",
                transition: "250ms ease",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                minWidth: "max-content",
                color: "#fff",
              }}
            >
              Réservez une table
            </span>
          </button>
        </form>
        <style
          dangerouslySetInnerHTML={{
            __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-size: 10px;
  scroll-behavior: smooth;
  visibility: inherit;
}

body {
  border: 0px solid rgb(229, 231, 235);
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
  background-color: #161718;
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.85em;
  font-family: Forum, serif;
  font-weight: 400;
  font-style: normal;
  height: fit-content;
  overflow: overlay;
}
`,
          }}
        />
        <div
          className="form-right text-center h-[70vh]"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            margin: "0px",
            boxSizing: "border-box",
            textAlign: "center",
            padding: "40px 20px 30px",
            backgroundPosition: "0px 0px",
            backgroundRepeat: "repeat",
            backgroundImage:
              'url("https://www.restaurantmilane.fr/assets/images/form-pattern.png")',
          }}
        >
          <h2
            className="headline-1 text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              color: "#fff",
              fontFamily: "var(--fontFamily-forum)",
              fontWeight: 400,
              lineHeight: "1.2em",
              fontSize: "calc(2rem + 2.5vw)",
              textAlign: "center",
              marginBlockEnd: "40px",
            }}
          >
            Contactez-nous
          </h2>
          <p
            className="contact-label"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              fontWeight: 700,
              marginBlockEnd: "5px",
            }}
          >
            Demande de réservation
          </p>
          <a
            className="body-1 contact-number hover-underline"
            href="tel:0146662579"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              display: "block",
              textDecoration: "none",
              fontSize: "2.4rem",
              lineHeight: "1.4em",
              marginInline: "auto",
              color: "#e4c590",
              maxWidth: "max-content",
              position: "relative",
            }}
          >
            - 0147650016
          </a>
          <div
            className="separator"
            style={{
              padding: "0px",
              boxSizing: "border-box",
              border: "1px solid #e4c590",
              width: "8px",
              height: "8px",
              transform: "rotate(45deg)",
              margin: "20px auto",
            }}
          />
          <p
            className="contact-label"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              fontWeight: 700,
              marginBlockEnd: "5px",
            }}
          >
            Address
          </p>
          <address
            className="body-4"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              fontStyle: "normal",
              fontSize: "1.6rem",
              color: "#a6a6a6",
              lineHeight: "1.5em",
              marginBlockEnd: "25px",
            }}
          >
            158 avenue Victor Hugo, 92140 . Clamart{" "}
            <br
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
              }}
            />
            France
          </address>
          <p
            className="menu-text text-center"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              padding: "0px",
              boxSizing: "border-box",
              margin: "0px",
              textAlign: "center",
            }}
          >
            Horaires{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              12:00
            </span>{" "}
            à{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              14:30
            </span>{" "}
            de{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              19:00
            </span>{" "}
            à{" "}
            <span
              className="span"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                display: "inline-block",
                color: "#e4c590",
              }}
            >
              23:00
            </span>
          </p>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-size: 10px;
  scroll-behavior: smooth;
  visibility: inherit;
}

body {
  border: 0px solid rgb(229, 231, 235);
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
  background-color: #161718;
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.85em;
  font-family: Forum, serif;
  font-weight: 400;
  font-style: normal;
  height: fit-content;
  overflow: overlay;
}
`,
          }}
        />
      </div>
    </div>
  );
}
