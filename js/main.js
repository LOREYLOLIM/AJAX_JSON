// sample object json
// var myCat = {
//     "name" : "Meowasalot",
//     "species" : "cat", 
//     "favFood": "tuna",
// }

// // to access the data on an object
// myCat.name
// myCat.species
// myCat.favFood


// // sAMPLE ARRAY
// var myFavColors = ['blue', 'green', 'purple']

// // accessing data in arrays
// myFavColors[0]
// myFavColors[1]
// myFavColors[2]


// // calling arrays an object same time
// var thePets = [
//     {
//         "name" : "Meowasalot",
//         "species" : "cat", 
//         "favFood": "tuna",
//     },
//     {
//         "name" : "Barky",
//         "species" : "dog", 
//         "favFood": "carrots",
//     },
// ]

// thePets[1].favFood //return array and object same time

var  btn = document.getElementById("btn"); 
var animalContainer = document.getElementById("animal-info")
var pageCounter = 1;

btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
ourRequest.onload = function(){
    if(ourRequest.status>=200 && ourRequest.status < 400) {
        // console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    // console.log(ourData[1])
    renderHtML(ourData)
    }else {
        console.log("we connected to the server but, but it returned and error.");
    }
    
};

ourRequest.onerror = function(){
    console.log("Connection Error");
};

ourRequest.send();
pageCounter++;
if(pageCounter>3){
    btn.classList.add("hide-me");
}
});

function renderHtML(data){
    var htmlString = "";
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " That Likes to eat " ;
       
        for(ii=0; ii<data[i].foods.likes.length; ii++){
            if(ii == 0){
                htmlString += data[i].foods.likes[ii]; 
            }else{
                htmlString += " and " + data[i].foods.likes[ii]; 

            }
        }

        htmlString += " and dislikes ";

        for(ii=0; ii<data[i].foods.dislikes.length; ii++){
            if(ii == 0){
                htmlString += data[i].foods.dislikes[ii]; 
            }else{
                htmlString += " and " + data[i].foods.dislikes[ii]; 

            }
        }

        htmlString += ".</p>";
    };
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

