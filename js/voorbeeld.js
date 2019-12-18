// Replace ./data.json with your JSON feed


fetch('sommen.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
 
    getele
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })