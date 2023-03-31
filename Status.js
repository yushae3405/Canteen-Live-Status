document.addEventListener("keypress",function(event){
    ChangeStatus(event.key);

});

function ChangeStatus(key){
    switch(key){
        case "c":
            document.querySelectorAll("#Status h1")[2].innerHTML = "closed!!!";
            break;


        case "o":
            document.querySelectorAll("#Status h1")[2].innerHTML = "open!!!";
            break;
        

        default: console.log(key);

    }
}