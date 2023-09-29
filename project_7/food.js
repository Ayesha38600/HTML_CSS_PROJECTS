function myFun(params) {
     let searchVal = document.getElementById("inp").value.toUpperCase(); ;
     let table = document.getElementsByTagName("table")
     let tr = document.getElementsByTagName("tr");
let front = document.querySelector(".main");



     for (let i = 0; i < tr.length; i++) {
       let td = tr[i].getElementsByTagName("td")[0];
       if (td){
        let text = td.innerText;
        if (text.toUpperCase().indexOf(searchVal)>-1) {
            tr[i].style.display="";
front.style.display ="none"
        }else{
            tr[i].style.display="none"; 
        }
       }
        
     }
     if (searchVal =="") {
        // location.reload()
        front.style.display = "flex"
        
    }

     
     console.log(searchVal);
    
}

// slide bar 
let slide = document.querySelectorAll(".customer")
let count = 0;
console.log(slide);

slide.forEach(function (customer , index) {
    customer.style.left = `${index * 100}%`
    
})
// ...................
function next(params) {
    count++;

    if (count==slide.length) {
        count=0;
        
    }
    bar();
    
}
// .................
function prev(params) {
    count--;

    if (count==-1) {
        count=slide.length-1;
        
    }
    bar();
    
}


function bar(params) {
    slide.forEach(function (customer) {
        customer.style.transform = `translateX(-${count* 100}%)`

        
    })
    
}
