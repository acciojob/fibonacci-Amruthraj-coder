function fibonacci(num) {
// your code here
	let arr=[0,1];
	if(num==1){return 0}
	else if(num>=3){
	for(let i=2;i<num;i++){
		arr.push(arr[i-1]+arr[i-2]);
	}
	}
	return arr[arr.length-1];
}

module.exports = fibonacci;
