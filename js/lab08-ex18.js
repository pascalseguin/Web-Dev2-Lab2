
/* To refresh your memory, here is a complex object created using
   object literal syntax.
   */

const stock = {
   symbol: "AAPL",
   name: "Apple Inc.",
   location: {
      address: "One Apple Park Way",
      city: "Cupertino",
     output() {
       console.log(`${this.address} - ${this.city}`);
   }
   },
output: function () {
    console.log(`${this.symbol} - ${this.name}`);
}
}

stock.output();
stock.location.output();

function Company(symbol, name, address, city) {
    this.symbol = symbol;
    this.name = name;
    this.location = {};
    this.location.address = address;
    this.location.city = city;
    this.output = function() {
console.log(`${this.symbol} - ${this.name}`);
}
}

const apple2 = new Company("AAPL","Apple Inc.",
"One Apple Park Way","Cupertino");
const google2 = new Company("GOOG","Alphabet Inc.",
"1600 Amphitheatre Parkway","Mountain View");


console.log(apple2);
console.log(apple2.location.address);

apple2.output();

const companies = [
new Company("AAPL","Apple Inc.",
"One Apple Park Way","Cupertino"),
new Company("FB","Facebook Inc.","1 Hacker Way","Menlo Park"),
new Company("PYPL","PayPal Holdings Inc.",
"2211 N. 1st St.","San Jose"),
new Company("MSFT","Microsoft Corporation",
"One Microsoft Way","Redmond")
];

for (let c of companies) {
c.output();
}