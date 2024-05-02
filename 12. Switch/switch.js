//switch statement
let day ;
day =Number(prompt("Enter the day"));

switch (day) {
    case 1:
        console.log("Sabti"); break;
    case 2:
        console.log("Axad");break;
    case 3:
        console.log("isniin");break;
    case 4:
        console.log("talaado");break;
    case 5:
        console.log("arbaco");break;
    case 6:
        console.log("khamiis");break;
    case 7:
        console.log("jimco");break;
    default:
        console.log("maalintaan majirto!");
}

//combining cases
switch (day) {
    case 1:  
    case 2:   
    case 3:    
    case 4:     
    case 5:
        console.log("maalmaha shaqada");break;
    case 6:
    case 7:
        console.log("maalmaha fasaxa");break;
    default:
        console.log("maalintaan majirto!");
}