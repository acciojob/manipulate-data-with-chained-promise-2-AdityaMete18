//your JS code here. If required.

let output = document.getElementById("output");

function getdata(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000)
	})
}

getdata().then((data)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let even = data.filter(num => num % 2===0);
			output.innerHTML = even;
			resolve(even)
		},1000)
	})
}).then((data)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let double = data.map(num=>num*2);
			output.innerHTML=double;
			resolve(double)
		},2000)
	})
}).catch((err)=>{
		console.log("error",err)
	})