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
// import axiox from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const url =
  "https://cors-anywhere.herokuapp.com/https://us-central1-otp-react-native-4e01f.cloudfunctions.net/Mailer";
const submitbtn = document.querySelector(".submit-btn");
submitbtn.addEventListener("click", async (event) => {
  submitbtn.textContent = "Sending mail...";
  event.preventDefault();
  const fullname = document.querySelector(".fullname").value;
  const email = document.querySelector(".email").value;
  const message = document.getElementById("message").value;

  try {
    const mail = await axios.post(url, {
      subject: fullname,
      from: email,
      message,
    });
    submitbtn.textContent = "Mail Sent";
    document.querySelector(".fullname").value = "";
    document.querySelector(".email").value = "";
    document.getElementById("message").value = "";
    submitbtn.disabled = true;

    console.log(mail);
  } catch (err) {
    console.log(err);
    submitbtn.textContent = "Failed to send the mail";
  }
});

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
