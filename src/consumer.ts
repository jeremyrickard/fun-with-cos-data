var soda = require('soda-js'); 

//The providers dataset is defined here: https://dev.socrata.com/foundry/data.coloradosprings.gov/sas5-6mn5

var consumer = new soda.Consumer('data.coloradosprings.gov')

//Get the entire dataset
// consumer.query()
//   .withDataset('sas5-6mn5')
//   .getRows()
//   .on('success', function(rows: any) { console.log(rows); })
//   .on('error', function(error: any) { console.error(error); });


//Get just the grocery_assist_food_pantry: true
// consumer.query()
//   .withDataset('sas5-6mn5')
//   .where({ grocery_assist_food_pantry: true })
//   .getRows()
//   .on('success', printProviders)
//   .on('error', function(error: any) { console.error(error); });


//Get everything within a 5000m of City Hall
consumer.query()
  .withDataset('sas5-6mn5')
  .where("within_circle(geocoded_column, 38.8357,-104.8210,5000)")
  .getRows()
  .on('success', printProviders)
  .on('error', function(error: any) { console.error(error); });


function printProviders(rows: any) {
  console.log("Found %d results", rows.length)
  rows.forEach(printProvider)
} 

function printProvider(row: any) {
  console.log("Provider: %s", row.name)
  console.log("=> Address: %s", row.geocoded_column_address) 
  console.log("=> Geocoded Latitude: %s",row.geocoded_column.coordinates[1])
  console.log("=> Geocoded Longitude: %s", row.geocoded_column.coordinates[0])
  console.log("=====================================")
}

