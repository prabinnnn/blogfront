const sendData = async () => {
  try {
    const form = document.getElementById("registration");
    const formData = new FormData(form);
    const result = await axios.post(
      "http://localhost:8000/api/v1/users/registration",
      formData
    );
    if (result) {
      const msg = document.getElementById("msg");
      msg.classList.remove(mystyle);
    }
  } catch (e) {
    console.log(e);
  }
};
