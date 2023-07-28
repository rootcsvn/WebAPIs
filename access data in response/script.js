/* 
*	Access data in response
*/
fetch("https://hplussport.com/api/products?qty=2&order=name")
.then(function(response) {
    return response.json();
})
.then(function(jasonData) {
    console.log(jasonData);
})