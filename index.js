// Add your code here

// 1. Send Data
function submitData(name, email) {
// 4. Return the Fetch Chain
  return fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept':       'application/json'
  },
  body: 
    JSON.stringify({
      name, 
      email
    }) 
  })
// 2. Handle the Response
  .then(res => res.json())
  // .then(obj => console.log(obj)); // JSONified object
  .then(obj => document.body.innerHTML = obj.id)
// 3. Handle errors
  .catch(function(error) {
    document.body.innerHTML = error.message;
  })
}
      
    // add a catch()
      // obj on error w message property & info about error
      // append msg to DOM when catch() called   


// 2 args - strings - userName, email
  // return fetch()
  // 1. Send data
    // POST request to http://localhost:3000/users using fetch()
      // destination URL
      // headers 
        // Content-Type - application/json
        //  Accept - application/json
      // body:
        // name
        // email 
          // passed in as args to submitData
          // nam & email keys w obj (obj stringified)
  // 2. Handle response
    // then() - json
    // then() - access obj - find new id & append value  to DOM
    // Test - submitData(), id appears on page (JSON server must be running)
  // 3. Handle errors
    // add a catch()
      // obj on error w message property & info about error
      // append msg to DOM when catch() called
  // 4. Return the Fetch Chain 
    // return fetch chain from submitData() function