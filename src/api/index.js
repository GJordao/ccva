export default class ApiHelper {
    static url = 'http://ccva.jordao.xyz/';
    static fetchContent(path) {
        return new Promise((resolve, reject) => {
            fetch(this.url + path)
                .then((response) => response.json())
                .then((responseJson) => {
                    resolve(JSON.parse(responseJson));
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}