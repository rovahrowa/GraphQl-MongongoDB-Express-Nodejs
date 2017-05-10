/**
 * Created by danstan on 5/10/17.
 */
//using node module
var dateTime = require('node-datetime');
var dt = dateTime.create();
dt.format('m/d/Y H:M:S');
var date=new Date(dt.now());
console.log(date);
//using node core without the require
let my_date=new Date()
console.log(typeof my_date);
console.log(my_date.getFullYear())
if (my_date.getFullYear()==2017){

    console.log("Created 2017")
    console.log(typeof my_date.getFullYear())

}
else console.log("Old account")