/*
This function is called when the Check button is clicked
*/
function Check(){
    //select the character input
    var char=document.querySelector("#char");
    //check if character is not entered,alert the warning and apply style to input box
    if(char.value == ""){
        alert("Please Enter the Character first..!!");//error alert
        char.style.backgroundColor= "#E6B0AA";
        char.focus();//styling input box if blank
    }//Else proceed
    else{
        var typo="";
        //call the function to check the type
        if(is_Vowel(char.value)){
            typo+="VOWEL";
        }else{
            typo+="CONSONANT";
        }
        //Show the result in resultdiv
         document.getElementById("result").innerHTML= "The Entered character is a : <span style='color:green;'>"+typo;
    }
}

/*
This is the javascript function for checking a character is voewl or consonant
*/
function is_Vowel(char){
    //define an array containing all the vowels
    var vowels = new Array("a","e","i","o","u","A","E","I","O","U");
    //return typeof(char);
    //check the entered character is in the vowels array
    var is_vowel = vowels.indexOf(char);
    //If character not found in array return false else true
    if(is_vowel == -1){
        return false;
    }else{
        return true;
    }
}

/*This function checks the input value is character only on key up event*/
function alphaOnly(event) {
  var key = event.keyCode;
    //alert(key);
   var sp_key = new Array(8,9,13,16,17,18);//array of special keys
    var special;
    if(sp_key.indexOf(key) == -1){
        special=false;
    }else{
        special=true;
    }
  var typo = ((key >= 97 && key <= 122) || (key >= 65 && key <= 90) || (special));//checking the keycode
    if(!typo){
        //alert the error for only character inputs
        alert("Only Characters are allowed..!!");
        document.getElementById("char").value="";
        document.getElementById("char").focus();
        document.getElementById("char").style.backgroundColor="#E6B0AA";
    }
    
};

