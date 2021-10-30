let inputField = document.querySelectorAll('.input');

let errMsg = document.querySelectorAll('.err-msg');

let agreeCb = document.getElementById('.agree-cb');

let sumbitBtn = document.getElementById('submitBtn');

let emailRegex = /^[a-z0-9._-]+@(gmail|yahoo).com$/;

let mobileRegex = /^[0][7][7][0-9]{7}$/;

let passRegex = /^[A-Z]{6,18}$/i;


sumbitBtn.onclick = function(e) {
  e.preventDefault();
  console.log("submit clicked")
  inputField.forEach((el, index) => {
    if (el.value.length === 0) {
      errMsg[index].innerHTML = "Email Input Shouldn't be empty !";
      errMsg[index].style.display = 'block';
    }
    if (el.value.length === 1) {
      errMsg[index].innerHTML = "Mobile Number Input Shouldn't be empty !";
      errMsg[index].style.display = 'block';
    }
    if (el.value.length === 2) {
      errMsg[index].innerHTML = "Password Input Shouldn't be empty !";
      errMsg[index].style.display = 'block';
    }
  });
}






// ================================================================================

/*
  Code Hazem
*/

// Error Messages

// let signUp = document.querySelector('.myBtn1')
// let input = document.querySelectorAll('.inp')
// let allErr = document.querySelectorAll('.errMsg')
// let check1 = document.getElementById('exampleCheck1')
// let emailReg = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo).com$/
// let mobileReg = /077[0-9]{7}/
// let passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,8}$/

// console.log(`SignUp Var ${signUp}`);
// console.log(`Input Var ${input}`);
// console.log(`All Errs ${allErr}`);
// console.log(`Check 1 ${check1}`);
// console.log(`email reg ${emailReg}`);
// console.log(`email reg ${mobileReg}`);
// console.log(`email reg ${passReg}`);


// signUp.onclick = function () {
//   input.forEach(function (ele, index) {
//     if (ele.value.length === 0) {
//       allErr[index].innerHTML = 'This Field is Empty'
//       allErr[index].style.display = 'block'
//     } else if (ele.value.length > 0) {
//       switch (index) {
//         case 0:
//           if (emailReg.test(input[index].value))
//             allErr[index].style.display = 'none'
//           else {
//             allErr[index].style.display = 'block'
//             allErr[index].innerHTML = 'Email is not valid'
//           }
//           break
//         case 1:
//           if (mobileReg.test(input[index].value))
//             allErr[index].style.display = 'none'
//           else {
//             allErr[index].style.display = 'block'
//             allErr[index].innerHTML =
//               'Phone is not valid / must be orange number'
//           }
//           break
//         case 2:
//           if (passReg.test(input[index].value))
//             allErr[index].style.display = 'none'
//           else {
//             allErr[index].style.display = 'block'
//             allErr[index].innerHTML =
//               'Password must contain at least one small letter and one capital letter and one number and one special charcter, and must be between 6-8 charcters'
//           }
//           break
//       }
//     } else {
//       allErr[index].style.display = 'none'
//     }
//   })
//   if (check1.checked == false) {
//     allErr[3].innerHTML = 'You must checked this field'
//     allErr[3].style.display = 'block'
//   } else {
//     allErr[3].style.display = 'none'
//   }

//   event.preventDefault()
// }
// =============================================================================================


























// let inputEmail = document.getElementById('InputEmail');
// let inputMobileNum = document.getElementById('InputMobileNumber');
// let inputPassword = document.getElementById('InputPassword');
// let emailErrMsg = document.querySelector('email-err-msg');
// let mobileErrMsg = document.querySelector('mob-err-msg');
// let passErrMsg = document.querySelector('psw-err-msg');
// let agreeCheckBoxErrMsg = document.querySelector('ch1-err-msg');
// let newsLetterCheckBoxErrMsg = document.querySelector('ch2-err-msg');