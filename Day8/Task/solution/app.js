"use strict";
let allEmployee=[];

let id=999;

function getId(){
    id++;
    return id;
}

const ghazi={
    employeeId:getId(),
    name:"Ghazi Samer",
    Department:"Administration",
    level:"Senior"
}

const lana={
    employeeId:getId(),
    name:"Lana Ali",
    Department:"Finance",
    level:"Senior"
}

const tamara={
    employeeId:getId(),
    name:"Tamara Ayoub",
    Department:"Marketing",
    level:"Senior"
}

const safi={
    employeeId:getId(),
    name:"Safi Walid",
    Department:"Administration",
    level:"Mid-Senior"
}

const rana={
    employeeId:getId(),
    name:"Rana Saleh",
    Department:"Development",
    level:"Junior"
}

const hadi={
    employeeId:getId(),
    name:"Hadi Ahmad",
    Department:"Finance",
    level:"Mid-Senior"
}


allEmployee.push(ghazi,lana,tamara,safi,rana,hadi);


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function calculateSalary(obj){
    let netSalary;
if(obj.level=="Junior"){
    netSalary=getRandomArbitrary(500,1000);
}else if(obj.level=="Mid-Senior"){
    netSalary=getRandomArbitrary(1000,1500);
}else if(obj.level == "Senior"){
    netSalary=getRandomArbitrary(1500,2000);
}
obj.salary=netSalary-0.075*netSalary;
}


for (let i = 0; i < allEmployee.length; i++) {
    calculateSalary(allEmployee[i]);
}


for (let i = 0; i < allEmployee.length; i++) {
    document.write("Employee name : ",allEmployee[i].name);
    document.write("<br>");
    document.write("Employee salary : ",Math.ceil(allEmployee[i].salary));
    document.write("<br>");
    document.write("<br>");

}