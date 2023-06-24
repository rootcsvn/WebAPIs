/* 
*	Get data from an API using fetch
*/
fetch('https://hplussport.com/api/products')
.then(
	function(response) {
		return response.json();
	}
)
.then(
	function(respData) {
		console.log(respData);
	}
)