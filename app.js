


  



  








import {  createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { collection, addDoc, getDocs, setDoc,updateDoc,doc,Timestamp  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import {auth, app,  storage,  db,  } from './config.js';
import { ref,uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
 
let btn = document.getElementById('submitBtn');

 btn && btn.addEventListener('click', async (event) => {
  event.preventDefault();

  let fullNameInput = document.getElementById('name');
  let phoneNumberInput = document.getElementById('phoneNumber');
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');
  
  
  
  
  let fullName = fullNameInput.value;
  let phoneNumber = phoneNumberInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;

  try {
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

   
    const docRef = await addDoc(collection(db, "users"), {
      uid: user.uid,
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
    });
 console.log("Document written with ID: ", docRef.id);
console.log(auth.currentUser)
   





 











    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your account has been registered',
      showConfirmButton: false,
      timer: 1500
    })
     window.location ='./quizz.html'
  } catch (e) {
    
    console.error("Error adding document: ", e)
   
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid email or password!',
         
    });
  }
});




let getAllusers =async ()=>{

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });

}
getAllusers()







onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const uid = user.uid;
    
    console.log('user Found', user);
  } else {
   console.log('user not Found' , user );
  }
});

  







// uplaoded wala functon hain

















// yah change profile wala function hain

// let changeBtn = document.getElementById('changeBtn');

// changeBtn.addEventListener('click', async () => {
//   const id = currentUser;

//   const washingtonRef = doc(db, "users", id);
//   let fullNameInput = document.getElementById('name').value; 
//   let phoneNumberInput = document.getElementById('phoneNumber').value; 

//   try {
//     await updateDoc(washingtonRef, {
//       fullName: fullNameInput, 
//       phoneNumber: phoneNumberInput 
//     });
//     console.log('Data updated successfully');
//   } catch (error) {
//     console.log(error);
//   }
// });














  // var resultElement = document.getElementById('result');
  // var percentageScore = ((score / questions.length) * 100);
  // resultElement.innerText = `Your Score: ${percentageScore.toFixed(2)}%`;
  // resultElement.style.display = 'block';
  

  




    //options[i].checked = false;
//nextBtn && nextBtn.disabled ; true;
  

 
//nextQuestions();
 





// function enabledBtn() {
//   nextBtn.disabled = false; 
// }


// enabledBtn()







let file = document.getElementById('profilePic');


let uploadBtn = document.getElementById('uplaodBtn');
uploadBtn.addEventListener('click', upload);

async function upload() {
  let fileNew = file.files[0]
let imageRef=  ref(storage, `images/${fileNew.name}`)
let url =  getDownloadURL(imageRef);
console.log(url, 'dawanload');
try{
 let uploaded =   await uploadBytes(imageRef, fileNew)

  console.log(uploaded, 'image uploaded success' );


  console.log('uploaded call' , file.files[0]);
}catch(e){
  console.log('some erorr');
}
}


 






























// window.addEventListener('blur',function(){

//   window.location= './signin.html'
// })



//12345678


