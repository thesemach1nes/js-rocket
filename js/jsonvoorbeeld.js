// Replace ./data.json with your JSON feed
fetch('generated.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
 
   //console.log(data)
    data.forEach(element => 
    document.getElementById('lijst').innerHTML += "<li>" + element.name +  element.age + "</li>"
   
    );
    console.log(data);

    const isLargeNumber = (element) => element.age > 34;
    console.log(data.findIndex(isLargeNumber));
    //moet 1 zijn


    
    // Work with JSON data here
 
  })
  .catch(err => {
    console.log('WERKT NIET');
  })