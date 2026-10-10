var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"
    },
    {
        "name":"Laikha Abdul",
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
function randomUser(){
    fetch("https://randomuser.me/api")
    .then(
        function(rawData){
            return rawData.json();
        }
    )
    .then(
        function(jsonData){
            var user=jsonData.results[0];
            var gender=user.gender;
            var fullname=user.name.title+" "+user.name.first+" "+user.name.last;
            document.getElementById("username").innerText=fullname;
            document.getElementById("ugender").innerText=gender;
            document.getElementById("uimg").src=user.picture.large;
        }
    )


}