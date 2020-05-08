// import nodemailer from "nodemailer";
// import nmt from "nodemailer-mailgun-transport";
// import auth from "./keys";
// const auth = {
//   auth: {
//     api_key: keys.api_key1,
//     domain: keys.domain1,
//   },
// };
// const transport = nodemailer.createTransport(nmt(auth));
// const submitbtn = document.querySelector(".submit-btn");
// const sendmail = function (from, subject, text) {
//   const mailoption = {
//     from,
//     to: "arpittrivedi2425@gmail.com",
//     subject,
//     text,
//   };
//   transport.sendMail(mailoption, (err, data) => {
//     if (err) console.log(err);
//     else console.log("Mail sent");
//   });
// };

// submitbtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const fullname = document.querySelector(".fullname").value;
//   const email = document.querySelector(".email").value;
//   const message = document.getElementById("message").value;
//   sendmail(email, fullname, message);
// });

/////////////Map

// function initMap() {
//   let locations = { lat: 26.8467088, lng: 80.9461592 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: locations,
//     zoom: 12,
//   });
//   let marker = new google.maps.Marker({
//     position: locations,
//     map: map,
//   });
// }
// initMap();
