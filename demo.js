//create a div manamed container
var container=document.createElement('div');
container.style.height='320px';
container.style.width='400px';
container.style.backgroundColor='white';
container.style.padding='20px';
container.style.border='1px solid';
container.style.borderRadius='6px';
document.body.appendChild(container);

//here a container created and its height width bgcolor border are added

//adding a heading name using h2 tag
var heading=document.createElement('h2');
heading.textContent='Registration Form';
heading.style.textAlign='center';
heading.style.color='red';
heading.style.borderBottom= 'red dashed'

container.appendChild(heading);

//here a heading h2 created and several styles are added

//creating first name lable
 var fnamelable = document.createElement('label');
 fnamelable.textContent='First_Name:';
 fnamelable.style.fontFamily='sensi-serif';
 fnamelable.style.fontSize='18px';
 fnamelable.style.color='blue'
 
 container.appendChild(fnamelable);
 
 //creaating input for the first name
 var fnameinput = document.createElement('input');
 fnameinput.type='text'
 fnameinput.style.width='70%';
 fnameinput.style.height='25px';
 fnameinput.style.outline='none';
 fnameinput.style.margin='8px 10px';
 
 container.appendChild(fnameinput);

 //creating last name lable
 var lnamelable = document.createElement('label');
 lnamelable.textContent='Last_Name:';
 lnamelable.style.fontFamily='sensi-serif';
 lnamelable.style.fontSize='18px';
 lnamelable.style.color='blue'
 
 container.appendChild(lnamelable);
 
 //creaating input for the last name
 var lnameinput = document.createElement('input');
 lnameinput.type='text'
 lnameinput.style.width='70%';
 lnameinput.style.height='25px';
 lnameinput.style.outline='none';
 lnameinput.style.margin='8px 10px';
 
 container.appendChild(lnameinput);

 //creating mail lable
 var e_maillable = document.createElement('label');
 e_maillable.textContent='E_mail:';
 e_maillable.style.fontFamily='sensi-serif';
 e_maillable.style.fontSize='18px';
 e_maillable.style.color='blue'
 
 container.appendChild(e_maillable);
 
 //creaating input for the mail
 var e_mailinput = document.createElement('input');
 e_mailinput.type=' email'
 e_mailinput.style.width='70%';
 e_mailinput.style.height='25px';
 e_mailinput.style.outline='none';
 e_mailinput.style.margin='8px 0';
 e_mailinput.style.marginLeft='40px';

  container.appendChild(e_mailinput);

  //create lable for password
  var passlable=document.createElement('label');
  passlable.textContent='Password:';
  passlable.style.fontSize='18px';
  passlable.style.fontFamily='sensi-serif';
  passlable.style.color='blue';
  
  container.appendChild(passlable);

  //create input for password
  var passinput=document.createElement('input');
  passinput.type='password';
  passinput.style.width='70%';
  passinput.style.height='25px';
  passinput.style.outline='none';
  passinput.style.margin= '8px 19px';

  container.appendChild(passinput);

   //create lable for confirm password
   var cpasslable=document.createElement('label');
   cpasslable.textContent=' Confirm_Password:';
  cpasslable.style.fontSize='18px';
   cpasslable.style.fontFamily='sensi-serif';
   cpasslable.style.color='blue';
   
   container.appendChild(cpasslable);
 
   //create input for cinfirm password
   var cpassinput=document.createElement('input');
   cpassinput.type='password';
   cpassinput.style.width='54%';
   cpassinput.style.height='25px';
   cpassinput.style.outline='none';
   cpassinput.style.margin= '8px 19px';
 
   container.appendChild(cpassinput);

  //create register button
  var btn=document.createElement('button');
  btn.textContent='Register';
  btn.style.height='50px';
  btn.style.width='150px';
  btn.style.fontSize='18px';
  btn.style.textTransform='uppercase';
  btn.style.backgroundColor='blue';
  btn.style.color='white';
  btn.style.borderRadius='7px';
  btn.style.cursor='pointer';
  btn.style.margin='15px 150px';
  
container.appendChild(btn);

//now add the event to this register button 
btn.addEventListener('click', function(){
  var First_Name=fnameinput.value;
  var Last_Name=lnameinput.value;
  var E_mail=e_mailinput.value;
  var Password=passinput.value;
  var Confirm_Password=cpassinput.value;

  //creating alert message
  alert('Successfully registered!: ' + First_Name + ' ' + Last_Name);
  console.log(First_Name);

  console.log(Last_Name);

  console.log(E_mail);

  console.log(Password);
  console.log(Confirm_Password);


})