const regButton = document.getElementById("registrationButton");
const formButtons = document.getElementsByClassName("form__input")
const input1 = formButtons[0];
const input2 = formButtons[1];
const input3 = formButtons[2];
const input4 = formButtons[3];
const errorText = document.getElementsByClassName("errortext");
const errorPhoto = document.getElementsByClassName("errorphoto");
const mail = document.getElementById("mail");
console.log(formButtons[0])

function containsNumbers(str) {
    return /\d/.test(str);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

regButton.onclick=function(){
    console.log("click")

    if(input1.value != "" && containsNumbers(input1.value) != true ){
        console.log('success')
    }else{
        formButtons[0].value =""
        formButtons[0].placeholder = ""
        errorPhoto[0].style.display = "block"
        errorText[0].style.display = "block"
        input1.style.borderColor ="red"
        console.log('fail')
    }

    if(input2.value != "" && containsNumbers(input2.value) != true ){
        console.log('success')
    }else{
        formButtons[1].value =""
        formButtons[1].placeholder = ""
        errorPhoto[1].style.display = "block"
        errorText[1].style.display = "block"
        input2.style.borderColor ="red"
        console.log('fail')
    }

    if(input3.value != "" && validateEmail(input3.value) ){
        console.log('success')
    }else{
        formButtons[2].value =""
        formButtons[2].placeholder = ""
        mail.style.display = "block"
        errorPhoto[2].style.display = "block"
        errorText[2].style.display = "block"
        input3.style.borderColor ="red"
        console.log('fail')
    }

    if(input4.value != "" && input4.value.length>8  ){
        console.log('success')
    }else{
        formButtons[3].value =""
        formButtons[3].placeholder = ""
        errorPhoto[3].style.display = "block"
        errorText[3].style.display = "block"
        input4.style.borderColor ="red"
        console.log('fail')
    }

    

}

