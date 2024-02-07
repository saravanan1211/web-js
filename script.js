const icon=document.querySelector(".icon i");
const navlinks=document.querySelector(".navlinks");


function toggleNav(){

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
  navlinks.classList.toggle("navlinks-active");
}


  icon.addEventListener('click',function(){
    toggleNav();
  });
  
  
  
  var carousel=document.getElementById("pic");
  var images=["images/3.jpg","images/4.jpg","images/5.jpg","images/2.jpg"]
  var num=4;
  
  
  function next(){
      num++;
     console.log("step1");
     console.log( "num=",num);
      if(num>=images.length){
          num=0;
         console.log("step2");
         console.log("num",num);
         carousel.src=images[num]
          console.log("num",num);  
      }
      else{
         console.log("step3");
         carousel.src=images[num]
          console.log("num",num);
  
      }
                      
  };
  function back(){
      num--;
      if(num<0){
          num=images.length-1;
          carousel.src=images[num]
              }
              else{
                carousel.src=images[num]
              }
  
  };

  const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const cpasswordValue = cpassword.value.trim();
	  
	if(usernameValue === '') {
		setError(username, 'Username cannot be blank');
	}
	else if(usernameValue.length>8) {
		setError(username, 'username should be 8 characters');
	}
	 else {
		setSuccess(username);
	
	}
	
	if(emailValue === '') {
		setError(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setError(email, 'Not a valid email');
	} else {
		setSuccess(email);
	}
	
	if(passwordValue === '') {
		setError(password, 'Password cannot be blank');
	} else {
		setSuccess(password);
	}
	

	if(cpasswordValue === '') {
		setError(cpassword, 'cpassword cannot be blank');
	} else if(passwordValue !== cpasswordValue) {
		setError(cpassword, 'Passwords does not match');
	} else{
		setSuccess(cpassword);
	}
}


function setError(input, message) {


	const formgroup = input.parentElement;
	
	const small = formgroup.querySelector('small');
	formgroup.className = 'form-group error';
	small.innerText = message;
}



function setSuccess(input) {
	const formgroup = input.parentElement;
	formgroup.className = 'form-group success';
}


	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

 