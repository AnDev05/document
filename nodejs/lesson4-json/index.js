var bug = {
    name : 'Bug',
    age : 1,
    catch : false
}

var jsonString = JSON.stringify(bug);

console.log(jsonString);

//console.log(typeof jsonString); //string

//console.log(typeof bug); //object

var myCatString = '{"name":"Tom","age":2,"dead":false}';

var myCat = JSON.parse(myCatString);

console.log(myCat);
