async function fetch_cached() {

  let dnaDetails;
  if (localStorage.getItem("dnaDetails") != null) {
    // Looking in local storage
    dnaDetails = JSON.parse(localStorage.getItem("dnaDetails"));
  } else {
    await axios.get('http://api.plos.org/search?q=title:DNA').then(function(resp){
      // Handling success case
      localStorage.setItem("dnaDetails", JSON.stringify(resp.data));
      dnaDetails = resp.data;
    }).catch(function(error){
      // Handling error case
    });
  }
  return dnaDetails;
}

fetch_cached();
