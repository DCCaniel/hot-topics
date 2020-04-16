// printing shortcut
const p = console.log;

// GET THE REFERENCES
const $container = document.querySelector(".container");
const $links = document.querySelectorAll("ul a");
let urlVal = "partials/home.html"

// CREATE THE OBJECT TO STORE THE LOADED CONTENT
let contents;
let data;

// USE fetch() TO LOAD home.html ON THE PAGE-LOAD.
// STORE THE LOADED CONTENT INTO contents AS A 
// NEW PROPERTY OF contents WITH THE KEY: 
// "./partials/home.html"
fetch("./partials/home.html");
let contents = "./partials/home.html";


// CREATE THE FUNCTION 
const storeContents = function (urlVal) {
// storeContents RUNS EVERY TIME A LINK IS CLICKED.
// storeContents REQUIRES THE INPUT. THIS INPUT IS
// THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
// IN THE BODY OF THIS FUNCTION CHECK:
   // IF contents OBJECT DOESN'T HAVE A PROPERTY WITH
   // THE KEY THAT IS THE VALUE OF href ATTRIBUTE OF 
   // THE CLICKED LINK - LIKE THIS:
   if (contents[urlVal] != urlVal) {
      // IF SO:
         fetch(urlVal)
          .then (
            // PASS THE DATA TO contents[urlVal]
              data += contents[urlVal]
          )
           .then (
              // PASS THE contents[urlVal] TO $container
              $container = contents[urlVal]
          )
          // ELSE:
          // THIS MEANS contents OBJECT ALREADY 
          // HAS THIS PROPERTY AND YOU JUST NEED 
          // TO PASS ITS VALUE TO $container 
           else {
            $container = contents[urlVal]
          }
      // CLOSE YOUR CONDITIONAL HERE
};

// CREATE THE FUNCTION THAT WILL HANDLE A LINK-CLICK:
const handleClick = function (e) {
    // stops directing user to specified location
    e.preventDefault();
    
    let key = e.target.href;
    
    storeContents(key);
};


for (let i = 0; i < $links.length; i++) {
    $links[i].addEventListener("click", handleClick);
}