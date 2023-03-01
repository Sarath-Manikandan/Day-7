var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");  
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

// Get all the countries from the Asia continent /region using the Filter function
   var asiaCountries = result.filter((country) => country.region === "Asia");
    console.log(asiaCountries);

// Get all the countries with a population of less than 2 lakhs using Filter function
let population = result.filter((country) => country.population < 200000);
    console.log(population);

// Print the following details name, capital, flag using forEach function
result.forEach((country) => {console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flag}`);
    });

// Print the total population of countries using reduce function
let totalPopulation = result.reduce((accumulator, country) => accumulator + country.population,0);
  console.log(totalPopulation);

// Print the country which uses US Dollars as currency
for (let i = 0; i < result.length; i++) {
    if (result[i].currencies.USD) {
      console.log(result[i].name.common);
      break;
    }
  }
}