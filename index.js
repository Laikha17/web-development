var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]
var index=0
function toggle(){
    if(index==0){
        index=1;
    }
    else{
        index=0;
    }
    document.getElementById("username").innerText=users[index].name,
    document.getElementById("ugender").innerText=users[index].gender,
    document.getElementById("uimg").src=users[index].image
}