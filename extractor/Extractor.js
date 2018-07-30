class Extractor {
    static apiEndpoint = "https://kretaglobalmobileapi.ekreta.hu";
    static apiKey = "7856d350-1fda-45f5-822d-e1a2f3f1acf0";
    static headers = { 'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36" };

    async getInstitutes() {
        return fetch({
            method: 'GET',
            url: this.apiEndpoint + '/api/v1/Institute',
            headers: { apiKey: this.apiKey, ...this.headers },
        });
    }
}

export default new Extractor();