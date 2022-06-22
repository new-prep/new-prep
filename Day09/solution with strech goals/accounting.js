"use strict";

let tableElement=document.getElementById("totalTable");
let dataArr=[];
let adminArr=[];
let financeArr=[];
let devArr=[];
let markArr=[];

function getData(){
    let getDataArr=localStorage.getItem("employeeData");
    let originData=JSON.parse(getDataArr);
    // console.log(originData)
    
    if(originData!==null){
        dataArr=originData;
    }

    adminArr=dataArr.filter(elem=>{
        return elem.department=="Administration";
    })

    financeArr=dataArr.filter(elem=>{
        return elem.department=="Finance";
    })

    markArr=dataArr.filter(elem=>{
        return elem.department=="Marketing";
    })

    devArr=dataArr.filter(elem=>{
        return elem.department=="Development";
    })}

getData();

console.log(dataArr)
console.log(devArr)
function rowRender(arr){
    let trElement=document.createElement("tr");
    tableElement.appendChild(trElement);

    let td1=document.createElement("td");
    trElement.appendChild(td1);

    let td2=document.createElement("td");
    trElement.appendChild(td2);

    let td3=document.createElement("td");
    trElement.appendChild(td3);

    let td4=document.createElement("td");
    trElement.appendChild(td4);
    let sum=0;        
    for (let i = 0; i < arr.length; i++) {
        sum=sum+arr[i].salary;
    };
    td1.textContent=arr[0].department;
    td2.textContent=arr.length;
    td3.textContent=sum;
    td4.textContent=sum/arr.length;
}
{/* <tr>
                <th>#</th>
                <th>Total Employees</th>
                <th>Total Salary</th>
                <th>Total Avg Salary</th>
            </tr> */}

function footerRow(){
    let trElement=document.createElement("tr");
    tableElement.appendChild(trElement);

    let td1=document.createElement("th");
    trElement.appendChild(td1);

    let td2=document.createElement("th");
    trElement.appendChild(td2);

    let td3=document.createElement("th");
    trElement.appendChild(td3);

    let td4=document.createElement("th");
    trElement.appendChild(td4);
    
    td1.textContent="#";
    td2.textContent="Total Employees";
    td3.textContent="T-T Salary";
    td4.textContent="Total Avg Salary";
}

let tts=0;
function footerContent(arr){
    let trElement=document.createElement("tr");
    tableElement.appendChild(trElement);

    let td1=document.createElement("td");
    trElement.appendChild(td1);

    let td2=document.createElement("td");
    trElement.appendChild(td2);

    let td3=document.createElement("td");
    trElement.appendChild(td3);

    let td4=document.createElement("td");
    trElement.appendChild(td4);
  
    for (let i = 0; i < arr.length; i++) {
           tts=tts+arr[i].salary; 
    }
    td1.textContent="#";
    td2.textContent=dataArr.length;
    td3.textContent=tts;
    td4.textContent=Math.floor(tts/dataArr.length);
}

rowRender(adminArr);
rowRender(markArr);
rowRender(financeArr);
rowRender(devArr);

footerRow();
footerContent(dataArr);
