

let monTxtZone = document.getElementById("mazone");
console.log('monTxtZone: ', monTxtZone);
monTxtZone.addEventListener("click",erase);

//
let latotale=document.documentElement.textContent;
//console.log('latotale: ', latotale);

let content = monTxtZone.innerHTML;
console.log('content HTML de MontxtZone: ', content);

let remplace="Avec cette application en ligne vous pouvez compter les mots, les signes (caractères invisibles inclus), les ponctuations. D'autres fonctionnalités sont en cours de développement. Cliquez dans cette zone pour commencer commencer"

monTxtZone.textContent=remplace;


let myReset = document.getElementById("reset");
myReset.addEventListener("click",initializ)

let total=document.getElementById("total");
let words=document.getElementById("mots");
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
let count = document.getElementById("count");
count.addEventListener("click",compteur)


console.log('monTxtZone: ', monTxtZone);
console.log('monTxtZone typeof: ', typeof monTxtZone);

console.log('******************');

//let laClasse=monTxtZone.classList;

//console.log('laClasse: ', laClasse);

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// //////////////// LES FONCTIONS     //////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

        //////////////////////////////////////////////////////
        //////////////////  LE COMPTEUR   //////////////////
        //////////////////////////////////////////////////////

function compteur(){


                let lesChar=monTxtZone.value;
                let contChar=lesChar.length;
                let lesCharMinuSpaces=lesChar.trim().length;
                let dif=contChar-lesCharMinuSpaces;
console.log('✌️difference entre les 2 --->', dif);
console.log('✌️lesCharMinuSpaces --->', lesCharMinuSpaces);

                
   
// calcul nombre de caracteres
                let long=lesChar.length;
                console.log('long: ', long);


    console.log('long: ', long);

    total.textContent=long;
 

    // calcul nombre de mots

    let myWords=lesChar.split(" ").length;
    words.textContent=myWords;

    
}
// ###########################################################
// ##################   INITIALISER     ######################
// ###########################################################

function initializ(){

                                 monTxtZone.textContent="C'est reparti !";
    
                             }


// ##########################################################
// ##################        ERASE     ######################
// ##########################################################


    function erase(){

        monTxtZone.textContent="";
        
                     }

// ##########################################################
// ##################        STRINGIFY     ##################
// ##########################################################

     function stringify(){
                              this.toString();
                          }

                          // ##########################################################
// ##################        STRINGIFY     ##################
// ##########################################################

function disDble(i){

	let iChar = i.toString();

	display.textContent+=" --- Possibilité d'espaces doubles en 
position : " + iChar;

newPhrase[i]="Possibilité de signes doubles en position i";
		 console.log(i, newPhrase[i]);
        

}



// ###########################################################
// ##################                   ######################
// ###########################################################


// AJOUT DE LA FONCTION DETECTION DE DOUBLONS
let display=document.getElementById("info");


let myPhrase=monTxtZone; 


let stringArray = myPhrase.trim().split(" ");
let long=stringArray.length;
console.log("StringArray",stringArray);
stringArray.forEach((a) => console.log("voici un des élements", a));

let newPhrase=[];
console.table(stringArray)

console.log("display",display);

stringArray.forEach((i) => console.log("Pour i=",i));


for (let i= 0; i<=long;i++)
		if (stringArray[i]==stringArray[i+1] )
		{ disDble(i);
		                 
                  }
                              
//let myProtoString1= Object.getPrototypeOf(stringArray);
//console.log("Prototype de la phrase tableau", myProtoString1)

//let string = "Bonjour je   suis dans l'attente d'un e    //pharse   sans contexte    ";
//
//let string1=string.trim()
//
//
//let myProtoString2= Object.getPrototypeOf(string1);
//
//console.log("myProtoString2",myProtoString2);



// var string2 = string1.split();
// 
// console.log("TYPE OF string2", typeof string2);
// 
// let myProto= Object.getPrototypeOf(string2);
// 
// console.log("myProto",myProto);

//let stringTrim=string2.trim();

console.log("========== STRING SPLIT ==================");

console.log(string2);





