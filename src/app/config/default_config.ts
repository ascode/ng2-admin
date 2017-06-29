export class DefaultConfig {
    //public apiUrl = "http://192.168.2.238:8000/json/reply/";
    private apiUrl = "http://localhost/Net4Frm.Host/json/reply/";

    constructor(){
        
    }

    getApiURL(){
        return this.apiUrl;
    }
}