// const person ={
//     namee:"piyush salvi",
//     age:24
// }

// 
// const {namee , age}= person;
// console.log( age);
// console.log(namee);


// const person = {
//     name:"piyush",
//     age:25
// }

// const {name: person_name, age:person_age} = person;

// console.log(person_name, person_age);



// const details = {
//     address:"india",
//     item:2,
//     contact : 789868
// }

// const {address:loction, item:material, contact:mob_no} = details;

// console.log(loction);
// console.log(material);
// console.log(mob_no);


const getdata = () =>{
    return{
        namee:"piyush",
        age:25,
        city: 'New York'
    }
}

const {namee, city, age} = getdata();




console.log({namee, city});
