import Config from '../../../utils/config';

class ApiClass {
  constructor() {
    this.host = Config.api.host;
    this.endpoint = Config.api.endpoint;
    this.url = this.host ? this.host + this.endpoint : this.endpoint;
  }

  makeRequest = ({ path, data }) => {
    return new Promise(function(resolve, reject) {
      fetch(`${this.url}${path}`, data)
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
      url: `${this.url}/project`,
      data: {
        method: 'GET',
      },
    });
  };
}

const Api = new ApiClass();
export default Api;
