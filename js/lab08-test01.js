//Original
//####################################################################################
let bill = prompt("Please enter your bill total");
let ibill = Number(bill);

if(Number.isInteger(ibill)){
    console.log("Number entered");
}
else{
  alert("You have not entered a number");
    location.reload();
}
let tip = ibill * 0.10;
console.log("The bill total is: $" + ibill + " A 10% tip would be: $" + tip);
//######################################################################################

//Version 2 Using Arrays
//#####################################################################################
const billTotals = new Array(50,150,20,500);
const tips = [];
const percentage = [];
let i = 0;

for (let tot of billTotals)
    {
        let am = (tot > 75) ? 0.10 : (tot < 30) ? 0.30 : 0.20;
        percentage.push(am);
    }

for (let tot of billTotals)
    {
        let tipam = tot*percentage[i];
        i++;
        tips.push(tipam);
        
    }
for (let print of billTotals)
    {
       let tipval = 100*percentage.shift();
       let tiptot = tips.shift();
       console.log(`The bill total is: $${print} A ${tipval}% tip would be: $${tiptot}`);
    }
//##########################################################################################

//Version 3 Using Scope
//##########################################################################################


for (let tot of billTotals)
   {
      let tipamt = calculateTip(tot);
       console.log(`The bill total is: $${tot} the tip should be: $${tipamt}`);
   }
function calculateTip(total){
    let per = (total > 75) ? 0.10 : (total < 30) ? 0.30 : 0.20;
    return(per*total);
}