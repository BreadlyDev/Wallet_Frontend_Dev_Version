const url = "https://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/api/v1/auth/register";

const data = {
  email: "dio.kurrbanov.123.com@gmail.com",
  password: "amit3534",
  firstname: "name",
  lastname: "last",
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => {
    if (!response.ok) {
      console.log(response.text);
    }
    return response.json();
  })
  .then(responseData => {
    console.log('Success:', responseData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
