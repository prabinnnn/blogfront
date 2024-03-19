const sendData = async () => {
  try {
    const form = document.getElementById("registration");
    const formData = new FormData(form);
    const result = await axios.post(
      "http://localhost:8000/api/v1/users/registration",
      formData
    );
  } catch (e) {
    console.log(e);
  }
};
