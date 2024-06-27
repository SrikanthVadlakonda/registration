//create a div manamed container
var container=document.createElement('div');
container.style.height='300px';
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
 var userinput = document.createElement('input');
 userinput.type='text'
 userinput.style.width='70%';
 userinput.style.height='25px';
 userinput.style.outline='none';
 userinput.style.margin='8px 10px';
 
 container.appendChild(userinput);

 //creating last name lable
 var lnamelable = document.createElement('label');
 lnamelable.textContent='Last_Name:';
 lnamelable.style.fontFamily='sensi-serif';
 lnamelable.style.fontSize='18px';
 lnamelable.style.color='blue'
 
 container.appendChild(lnamelable);
 
 //creaating input for the last name
 var userinput = document.createElement('input');
 userinput.type='text'
 userinput.style.width='70%';
 userinput.style.height='25px';
 userinput.style.outline='none';
 userinput.style.margin='8px 10px';
 
 container.appendChild(userinput);

 //creating mail lable
 var e_maillable = document.createElement('label');
 e_maillable.textContent='E_mail:';
 e_maillable.style.fontFamily='sensi-serif';
 e_maillable.style.fontSize='18px';
 e_maillable.style.color='blue'
 
 container.appendChild(e_maillable);
 
 //creaating input for the mail
 var userinput = document.createElement('input');
 userinput.type=' email'
 userinput.style.width='70%';
 userinput.style.height='25px';
 userinput.style.outline='none';
 userinput.style.margin='8px 0';
 userinput.style.marginLeft='40px';

  container.appendChild(userinput);

  //create lable for password
  var passlable=document.createElement('label');
  passlable.textContent='Password:';
  passlable.style.fontSize='18px';
  passlable.style.fontFamily='sensi-serif';
  passlable.style.color='blue';
  
  container.appendChild(passlable);

  //create input for password
  var userinput=document.createElement('input');
  userinput.type='password';
  userinput.style.width='70%';
  userinput.style.height='25px';
  userinput.style.outline='none';
  userinput.style.margin= '8px 19px';

  container.appendChild(userinput);

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