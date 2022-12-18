// Add the API URL
const url = "https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane";


// Create Asynchronous function to grab the data
async function getData() {
  try {
    // We are using fetch to get the response
    const response = await fetch(url);``
    const data = await response.json();
    let a = 0;
for(; a < data.length;a++){
    console.log(data[a].name)
    let b = data[a].country;
    
    for(let i = 0 ; i < b.length; i++){
        console.log(b[i]);
        let c = b[i].country_id;
        let d = b[i].probability;
        console.log(c);
        console.log(d);
       
    }

}
    // Trigger the listData function and pass the result
    // listData(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
