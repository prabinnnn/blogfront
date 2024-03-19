const sendData = () => {
  try {
    const form = document.getElementById("registration");
    const formData = new FormData(form);
    axios.post("http://localhost:8000/api/v1/users/registration");
  } catch (e) {
    console.log(e);
  }
};
