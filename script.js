//getting all required elements
const inputBox=document.querySelector(".inputfield input");
const addBtn=document.querySelector(".inputfield Button");
const todolist=document.querySelector(".todolist");
const delereAllbtn=document.querySelector(".footer button");

inputBox.onkeyup=()=>{
    let userData=inputBox.value; //getting user enter data 
    if(userData.trim()!=0){
        addBtn.classList.add("active");  // active add button
        }
        else
        {
            addBtn.classList.remove("active");  //unactive add button 
        }
}
showtasks(); 

//if user click on add button
addBtn.onclick=()=>{
    let userData=inputBox.value;   //getting user entered value
    let getLocalStorage=localStorage.getItem("new todo"); //getting localstorage
    if(getLocalStorage==null){  //if value is null
        listArr=[];  //creating blanck array
    }
    else{
        listArr=JSON.parse(getLocalStorage);  //transforming json string into js object
    }
     listArr.push(userData);  //pushing user data 
     localStorage.setItem("new todo",JSON.stringify(listArr));  //transforming js object into json string
     showtasks();  //calling showtasks
}


// fonction to add tasks 
function showtasks(){
    let getLocalStorage=localStorage.getItem("new todo"); //getting localstorage
    if(getLocalStorage==null)
    {
        listArr=[];

    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    const pendingnum=document.querySelector(".pendingnum");
    pendingnum.textContent=listArr.length; // passing the length value in pedingnumber
    if(listArr.length>0){
        delereAllbtn.classList.add("active");
    }
    else{
        delereAllbtn.classList.remove("active");
    }
    let newlitag='';
    listArr.forEach((element,index )=> {
        newlitag+=`<li>${element}<span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`
        
    });
    todolist.innerHTML=newlitag;
    inputBox.value=""; //after adding a value inputbox will be blank
}

//function to remove tasks 
 function deleteTask(index){
    let getLocalStorage=localStorage.getItem("new todo"); 
    console.log("local:", getLocalStorage)
    listArr=JSON.parse(getLocalStorage);
    console.log("listArr:", listArr)
    listArr.splice(index,1); // remover particular index
    // after removing index updating localstorage   
    localStorage.setItem("new todo",JSON.stringify(listArr));  
     showtasks(); 
 }

 //delete all tasks

 delereAllbtn.onclick=()=>{
     listArr=[];
      // after deleting all  index updating localstorage   
    localStorage.setItem("new todo",JSON.stringify(listArr));  
    showtasks(); 
 }