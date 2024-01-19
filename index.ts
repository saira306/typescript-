
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep =()=>{
    return new Promise ((res)=>{
        setTimeout (res,2000);
    })
}


async function welcome(){ 
   let  rainbowTitle = chalkAnimation.rainbow(`Lets start calculation`); //satre
   await sleep();
   rainbowTitle .stop();
   console.log();

 //console .log(`${rainbowTitle}  is fine`);
}

 await welcome();
 
async function askQueastin(){
 const answers = await inquirer
    .prompt([
        /*puss  your questione in hare*/
        {
      type:"list",
      name:"operator",
      message:"which operation you want to perform?  \n",
      choices:["Addition","Subtraction","Multipication","Division",]   
        },
        {
            type:"number",
            name:"num1",
            message:"Enter number 1:",
            
        },
       {
           type:"number",
           name:"num2",
           message:"Enter  number  2:",
       }
    ]);
       if
          (answers.operator == "Addition"){
            console .log (chalk.red(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
       else if
          (answers.operator == "Subtraction"){
            console. log (chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if  
         (answers.operator == "Multipication"){
            console.log (chalk.yellow(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if
         (answers.operator == "Division" ){
            console.log (chalk.blue(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    }

askQueastin();

async function startagain(){
    do{
        await askQueastin();
        var agian = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you want to continew? press y or n:"
        })
    }while(agian.restart == 'y' || agian.restart   == 'Y'|| agian .restart == 'yes' || agian.restart == 'YES')
       
}

startagain();


    




