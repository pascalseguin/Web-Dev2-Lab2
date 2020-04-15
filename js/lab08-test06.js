const companies = JSON.parse(content)


function AcctCalculations(item)
    {
         this.currency = function(num) {  return new Intl.NumberFormat('en-us', {style: 'currency',
                                                currency: 'USD'}).format(num);};
        this.markCap50 = function(){ return item.stats.day50MovingAvg*item.stats.sharesOutstanding;}
        this.markCap200 = function(){return item.stats.day200MovingAvg*item.stats.sharesOutstanding;}
        this.revenue = function(){return item.stats.operatingRevenue-item.stats.costOfRevenue;}
        this.sheq = function(){return item.stats.totalAssets-item.stats.totalLiabilities;}
     
    }
    


function outputCard(item) {
    
    let calc = new AcctCalculations(item);
    
    document.write(` <article class="card">

    <h2>${item.symbol} - ${item.companyName}</h2>
      <div>
        <p>Share Price (50day avg): <span>${calc.currency(item.stats.day50MovingAvg)}</span></p>
        <p>Share Price (200day avg): <span>${calc.currency(item.stats.day200MovingAvg)}</span></p>
        <p>Market Cap (50day avg): <span>${calc.currency(calc.markCap50())}</span></p>
        <p>Market Cap (200day avg): <span>${calc.currency(calc.markCap200())}</span></p>
        <p>Net Revenue: <span>${calc.currency(calc.revenue())}</span></p>
        <p>Shareholder Equity: <span>${calc.currency(calc.sheq())}</span></p>
      </div>
      <footer>`);
    
    tag();
    
    document.write(`</footer></article>`);
    
    function tag() {
       for (let note of item.tags){
           document.write(`<small>${note}</small>`);
       }
    }
     
}

for (let item of companies){outputCard(item)}
       
    



