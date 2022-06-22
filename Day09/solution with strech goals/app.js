'use strict';

let all=[];
let formElement=document.getElementById('formInput');
let renderDiv=document.getElementById("renderDiv");
let id =999;
let initialSalary=0;


function Employee(fullName,imageUrl,department,level){
    this.EmployeeID=giveId();
    this.fullName=fullName;
    this.department=department;
    this.imageUrl=imageUrl;
    this.level=level;
    all.push(this);
}

let Employee1=new Employee("Ghazi Samer","./img/Ghazi.jpg","Administration","Senior");
let Employee2=new Employee("Lana Ali","./img/Lana.jpg","Finance","Senior");
let Employee3=new Employee("Tamara Ayoub","./img/Tamara.jpg","Marketing","Senior");
let Employee4=new Employee("Safi Walid","./img/Safi.jpg","Finance","Mid-Senior");
let Employee5=new Employee("Omar Zaid","./img/Omar.jpg","Development","Senior");
let Employee6=new Employee("Rana Saleh","./img/Rana.jpg","Development","Junior");
let Employee7=new Employee("Hadi Ahmad","./img/Hadi.jpg","Development","Mid-Senior");


function getRandomSalary(min, max) {
    return Math.random() * (max - min) + min;
}

function giveId(){
    id++;
    return id;
}

console.log(all);
Employee.prototype.salary=function(){
    if(this.level=="Senior"){
    initialSalary=getRandomSalary(1500,2000);
    }else if(this.level=="Mid-Senior"){
        initialSalary=getRandomSalary(1000,1500);
    }else if(this.level=="Junior"){
     initialSalary=getRandomSalary(500,1000);
    }

    this.salary=Math.floor(initialSalary-(0.075*initialSalary));
};

for (let i = 0; i < all.length; i++) {
    all[i].salary();
    
};

function render(){
        for (let i = 0; i < all.length; i++) {
            let divChild=document.createElement("div");
            renderDiv.appendChild(divChild);

            
            let imgElement=document.createElement("img");
            divChild.appendChild(imgElement);
            imgElement.setAttribute("src",all[i].imageUrl)
        
            let h3Element=document.createElement('h3');
            divChild.appendChild(h3Element);
            h3Element.textContent=all[i].fullName;
        
            let pElement=document.createElement("p");
            divChild.appendChild(pElement);
            pElement.textContent=`Dep : ${all[i].department} - Salary: ${all[i].salary}$`;
            
            //delete button 

            let btn=document.createElement("button");
            divChild.appendChild(btn);
            btn.setAttribute("id","deleteBtn");

            btn.value="Delete";
            btn.style.width="60px"
            btn.style.height="30px"
            btn.textContent="Delete";
        
            btn.addEventListener("click",function deleteEmployee(){
                let newArr=all.filter(elem=>{
                    return !(elem.EmployeeID==all[i].EmployeeID);
                })
                console.log(newArr);
                if(newArr){
                    all=newArr;
                }
                setData();
                // getData();
                renderDiv.textContent="";
                render();
                })
        }

};


formElement.addEventListener('submit',submitter);

function submitter(event){
    event.preventDefault();

   let employeeName=event.target.name.value;
   let url=event.target.url.value;
   let Department=event.target.Department.value;
   let level=event.target.level.value;
    // console.log(employeeName,url,Department,level);
    renderDiv.textContent='';
    console.log(url)
    let newEmployee=new Employee(employeeName,url,Department,level);

    newEmployee.salary();

    setData();
    render();
};

function setData(){
    let stringData=JSON.stringify(all);
    localStorage.setItem("employeeData",stringData);
}
    
function getData(){
let getDataArr=localStorage.getItem("employeeData");
let originData=JSON.parse(getDataArr);
console.log(originData)

if(originData!==null){
    all=originData;
}
render();
}

getData();





