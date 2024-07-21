import React from "react"

const GoogleMapComponent = () => {
  return (
    <div style={{ margin: "0 auto", padding: "1em" }}>
      <iframe
        width="100%"
        height="500px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310847.31899522874!2d13.095098971545521!3d52.506386171736644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1720560232485!5m2!1sen!2sde"
        frameBorder="0"
        allowFullScreen
        title="Google Map"
        style={{ border: "none" }}
        aria-hidden="false"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default GoogleMapComponent

