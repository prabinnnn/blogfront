const sendData = async () => {
  try {
    const form = document.getElementById("registration");
    const formData = new FormData(form);
    const result = await axios.post(
      "http://localhost:8000/api/v1/users/registration",
      formData,
      { headers: { "content-type": "multipart/form-data" } }
    );
    if (result) {
      const msg = document.getElementById("msg");
      msg.classList.remove("d-none");
      msg.innerHTML = result.data.data;
    }
  } catch (e) {
    console.log(e);
  }
};
