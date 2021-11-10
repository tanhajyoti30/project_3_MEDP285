//define elements
let slider = document.getElementById("myRange");
let firstPic = document.getElementById("first");
let secondPic = document.getElementById("second");
let thirdPic = document.getElementById("third");
let fourthPic = document.getElementById("fourth");
let fifthPic = document.getElementById("fifth");
let sixthPic = document.getElementById("sixth");
let seventhPic = document.getElementById("seventh");
let eighthPic = document.getElementById("eighth");
let ninthPic = document.getElementById("ninth");

slider.oninput = function()
{
	if (this.value < 10)
	{
		firstPic.classList.remove("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden"); 
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.add("hidden");
		  
	}
	else if (this.value >=10 && this.value <20)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.remove("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.add("hidden");
	}
	else if (this.value >=20 && this.value <30)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.remove("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.add("hidden");
	}
	else if (this.value >=30 && this.value <40)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.remove("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.add("hidden");
	}
	else if (this.value >=40 && this.value <50)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.remove("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.add("hidden");
	}
	
	else if (this.value >=50 && this.value <60)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.remove("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.add("hidden");
	}
	else if (this.value >=60 && this.value <70)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.remove("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.add("hidden");
	}
	else if (this.value >=70 && this.value <80)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.remove("hidden");
		ninthPic.classList.add("hidden");
	}
	else if (this.value >=80 && this.value < 90)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.remove("hidden");
		ninthPic.classList.add("hidden");
	}
	else if (this.value <100)
	{
		firstPic.classList.add("hidden");
		secondPic.classList.add("hidden");
		thirdPic.classList.add("hidden");  
		fourthPic.classList.add("hidden");
		fifthPic.classList.add("hidden");
		sixthPic.classList.add("hidden");
		seventhPic.classList.add("hidden");
		eighthPic.classList.add("hidden");
		ninthPic.classList.remove("hidden");
	}
	
}

