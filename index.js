//At this Stage we create a variable with the name of 'screen' which contain the id of our element "screen".
let screen= document.getElementById('screen');

//At this stage we again create a variable withe name of 'buttons' which contain all the "button" element of our document.
buttons= document.querySelectorAll('button');

//At this stage we create a string variable with the name of 'screenValue'
let screenValue='';

//At this Stage we start a for of loop for all buttons which is in our document.In this for of loop we create a item for all buttons
for(item of buttons)
{
    //At this stage we add a event listener which is a 'click' event for all buttons items
    item.addEventListener('click',(e)=>
    {
        //This line give us the inner text of a button which we contain in a variable name with 'buttonText', for example if our button contain letter 'M' than when we click on button they gives us 'M'
        buttonText= e.target.innerText;
        
        //Here we print the button text for conformatin that our click event work peoperly
        console.log('Button text is',buttonText)
        
        //At this stage we check some condation if our condition true then the body of if get executed
        if(buttonText=='X'){
            
            //if the condition true then the buttonText will change 'X' to '*'
            buttonText='*';
            
            //here we store the buttonText  value in the variable 'screenValue', which is string variable 
            screenValue += buttonText;
            
            //this code of line change the inner text (InnerHTML) of our element whose id is 'screen'.
            screen.value = screenValue;
        }
        
        //Here we again check a condition, if it is true then the body of eles if get executed
        else if(buttonText=='C'){
            
            //if the condition is true then the screenValue will become blank. It is a string variable
          screenValue = "";
            
        //this code of line change the inner text (InnerHTML) of our element whose id is 'screen'.
          screen.value = screenValue;
        }
        
        //Here we again check a condition, if it is true then the body of eles if get executed
        else if( buttonText=='='){
            
            //If the condition is true then the value of 'screen' changes. Here we use the eval() function with the paremeter 'screenValue'. This method evalute the aguments if they have expressions.
            screen.value=eval(screenValue); 
        }
        //if the above condition is not true then this block of code executed  which change the screenValue with buttonText and then change the 'screen'.value which contain the id of element, with screenValue.
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
