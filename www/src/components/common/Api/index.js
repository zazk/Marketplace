import Config from '../../../utils/config';

class ApiClass {
  constructor() {
    this.host = Config.api.host;
    this.endpoint = Config.api.endpoint;
    this.url = this.host ? this.host + this.endpoint : this.endpoint;
  }

  makeRequest = ({url, data}) => {
    var self = this;
    return new Promise(function(resolve, reject) {
      fetch(`${self.url}${url}`, data)
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
    var self = this;
    return self.makeRequest({
      url: `${self.url}/project`,
      data: {
        method: 'GET',
      },
    });
  };
}

const Api = new ApiClass();
export default Api;
