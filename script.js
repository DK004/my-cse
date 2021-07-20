let fifthSem = document.getElementById('fifthSem');
let sixthSem = document.getElementById('sixthSem');
let webtask = localStorage.getItem("localTask");

window.onload = (event) => {
    console.log('page is fully loaded');
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }

    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'fifth'){
            window.location.href = '5th sem/index.html';
        }
        else if(index==0 && item == 'sixth'){
            window.location.href = '6th sem/index.html';
        }
    });

  };


fifthSem.addEventListener('click', ()=>{
    
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    taskObj.push('fifth');
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    
    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'fifth'){
            window.location.href = '5th sem/index.html';
        }
    });
})

sixthSem.addEventListener('click', ()=>{
    
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }
    taskObj.push('sixth');
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    
    taskObj.forEach((item, index) => {
        console.log('in the loop')
        if(index==0 && item == 'sixth'){
            window.location.href = '6th sem/index.html';
        }
    });
})
