const jsonnames = `["Nivi", "Agal", "Sri","Thejal"]`;
const jsonperson = `{"name":"Nivi","age": 25, "isEmployed": true,"hobbies": ["cooking", "reading"]}`;
const jsonpeople = `[{"name":"Nivi","age": 25,"isEmployed": true},
                    {"name":"Agal","age": 26,"isEmployed": false},
                    {"name":"Sri","age": 24,"isEmployed": false},
                    {"name":"Thejal","age": 23,"isEmployed": true} 
                   ]`;


//const jsonString = JSON.stringify(people);
//console.log(jsonString);

const parseData = JSON.parse(jsonpeople);
console.log(parseData);