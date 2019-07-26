class ApiClass {
  constructor() {
    this.url = `/api`;
  }

  makeRequest = ({ url, data }) => {
    return new Promise(function(resolve, reject) {
      fetch(url, data)
        .then(response => {
          response.json().then(data => {
            if (response.status >= 300) {
              reject(data.message);
            }
            resolve(data);
          });
        })
        .catch(e => {
          reject(Error(e));
        });
    });
  };

  fetchProject = project => {
    return this.makeRequest({
      url: `${this.url}/project/${project}`,
      data: {
        method: 'GET',
      },
    });
  };
}

const Api = new ApiClass();
export default Api;
