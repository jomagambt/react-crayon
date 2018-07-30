import axios from 'axios';

class Extractor {
    headers = { 'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36" };

    async getInstitutes() {
        return axios.get('https://gist.githubusercontent.com/forcemagic/049f4231d2674916f601447a71abac08/raw/f1424da98002713724fb93fcc5a585cf09342d3e/institutes.json', {
            headers: { apiKey: this.apiKey },
            responseType: 'json',
        });
    }
}

export default new Extractor();