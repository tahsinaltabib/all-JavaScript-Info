// const tabibDetails={
//     name: "Tahsin Al Tabib",
//     age: 21,
//     isCoder: true,
//     Skills: ["Javascript, React Js, Node Js"]
// };

// console.log(tabibDetails.name);
// console.log(tabibDetails.Skills);



// let tabibAge= 21;
// let tabibSkill= "NodeJs";

// console.log(tabibSkill === "NodeJs" );



// let tabibScore= 39

// if(tabibScore>=80){
//     console.log("Tabib, You got A+");
// } 
// else if(tabibScore>=70){
//     console.log("Tabib, You got A");
// } 
// else if(tabibScore>=60){
//     console.log("Tabib, You got B");
// } 
// else if(tabibScore>=50){
//     console.log("Tabib, You got C");
// } 
// else if(tabibScore>=40){
//     console.log("Tabib, You got D");
// } 
// else{
//     console.log("Tabib, You Fail");
// }



let tabibSkill= "React Js"
let hasExperience= false

if(tabibSkill === "Node Js" && hasExperience === true){
    console.log("Tabib has been selected as a Senior BackEnd Developer");
} 
else if(tabibSkill === "Node Js" || hasExperience === true){
    console.log("Tabib has been selected as a Junior BackEnd Developer");
}
else{
    console.log("Tabib needs to learn Node Js");
}