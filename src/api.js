function api(endpoint, { method = "GET", body, jwt } = {}) {
  console.log ('fetching')
    return fetch(
      "https://codaisseur-coders-network.herokuapp.com" + endpoint,
      {
        method: method,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    )
      .then(response => Promise.all([response.status, response.json()]))
      .then(([status, data]) => {
        if (status >= 400) {
          // eslint-disable-next-line no-throw-literal
          throw { api_error: data };
        } else {
          return data;
        }
      });
  }

  export default api