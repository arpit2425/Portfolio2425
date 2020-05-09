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
