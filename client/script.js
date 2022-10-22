const formEl = document.getElementById("formEl");

formEl.onsubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: new FormData(formEl),
  });
  const data = await res.json();

  alert(data.message);
};
