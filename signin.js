// import {auth} from './config.js'

// import {  signInWithEmailAndPassword , onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


// let email= document.getElementById('email')
// let password= document.getElementById('password')

// let btn = document.getElementById('loginBtn');
// btn.addEventListener('click', login)

//  async function login(){
// try{
// let {user} =   await   signInWithEmailAndPassword(auth, email.value , password.value)

// console.log('user successfully  login');
// console.log(user);



// }catch (e){
// console.error(e.message)
// }


// }



// onAuthStateChanged(auth, (user) => {
//     if (user) {
     
//       const uid = user.uid;
      
//       console.log('user Found', user);
//     } else {
//      console.log('user not Found' , user );
//     }
//   });
  
// // setTimeout( async()=>{

// //      await signOut(auth)
// // },6000)


  

// let logOut = document.getElementById('logOut')

// logOut.addEventListener('click', ()=>{

//     signOut(auth).then(() => {
//        console.log('user log Out');
//        window.location ='./signin.html'

//       }).catch((error) => {
//        console.log('error');
//       });
      

// })














import {auth} from './config.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { signInWithEmailAndPassword,  signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";





const signInForm = document.getElementById('signInForm');
 

signInForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    
    console.log('User login in:', user);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Account has been Login',
        showConfirmButton: false,
        timer: 1500
      });
   window.location='./quizz.html'
   } catch (error) 
   {
   
   
    console.error('Sign-in error:');
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Invilid Email & password',
        showConfirmButton: false,
        timer: 1500
      })
  }
  
  
});














function confirmLogout() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You want to log out of your account!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, LogOut!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      logOut();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your Account is still logged in :)',
        'error'
      )
    }
  });
}




//yaha se log out ka kaam hwah hain

function logOut() {
  signOut(auth).then(() => {
    console.log('User logged out');
    window.location = './index.html';
  }).catch((error) => {
    console.log('Error while logging out:', error);
    Swal.fire({
      icon: 'error',
      title: 'Logout Failed',
      text: 'There was an error logging out. Please try again.',
    });
  });
 
}






const logOutBtn = document.getElementById('logOut');
logOutBtn.addEventListener('click', () => {
  confirmLogout();
  
});
