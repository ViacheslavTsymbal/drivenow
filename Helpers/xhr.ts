import {Helper} from "./helper";

let helpers = new Helper();
let r =  require('request');
let regLink;
let auth;

export class Requests{

    public static post(url, headers, json){

        var defer = protractor.promise.defer();
        r.post({
          url: url,  
          headers: headers,
          json: json    

}, function (error,response) {
            
        if(error || response.statusCode >=400){
            console.log(response.statusCode && response.body)
            defer.reject({
                error:error,
                response:response
            })
        }
        else{
            console.log(response.body)
            auth = response.body['authToken']
            defer.fulfill(response);

        }
    });
    return defer.promise
};
    public static get(url,headers){
        var defer = protractor.promise.defer();
        r.get({
          url: url,  
          headers: headers       
}, function (error,response) {
        if(error || response.statusCode >= 400){
            console.log(response.statusCode && response.body)
            defer.reject({
                error:error,
                response:response
            })
        }
        else{
            console.log(response.body)
            defer.fulfill(response);
        }
    });
    return defer.promise
};




    //API calls
    public userLogin(){

        return Requests.post(
        //url
        'https://beta.content-api.drive-now.com/crm/login?language=en&country=fi',
        //headers
        {
           'X-Api-Key':'rz7a9SgrPfHwTz3gFza81XnoXNQ7IuIU',
           'Content-type':'application/json'
        },
        //body
        {
        "login":"viacheslav.tsymbal+4898fin@sixt.coms",
        "username":"viacheslav.tsymbal+4898fin@sixt.com",
        "password":"Qazwsx123"
        });         
    };
    public getBonusMinutes(){
     return Requests.get(
         'https://beta.content-api.drive-now.com/web/crm/bonusminutes/private?country=fi&language=en',
        {   
           'Authorization':'Basic ZHJ2bnc6ZHJpdmVub3cxMw==',
           'X-Auth-Token':'sadasdasdsa',
           'X-Api-Key':'rz7a9SgrPfHwTz3gFza81XnoXNQ7IuIU',
           'Content-type':'application/json',
           
        },
     )
 }









}

