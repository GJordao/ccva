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
    /**
     * 
     * @param path the path to server without the server url
     * @param data object with the fields for the database insert
     */
    static postContent(path, data) {
        return new Promise((resolve, reject) => {
            const fullPath = this.url + path + '/' + encodeURIComponent( JSON.stringify(data));
            console.log(fullPath);
            fetch(fullPath, { method: "POST", body: '' })
                .then((response) => {
                    console.log(response.text());
                    resolve('Dados enviados com sucesso. Obrigado!');
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}