function fetch_cached() {

  let dnaDetails;
  if (localStorage.getItem("dnaDetails") != null) {
    dnaDetails = JSON.parse(localStorage.getItem("dnaDetails"));
  } else {
    axios.get('http://api.plos.org/search?q=title:DNA').then(resp => {
      localStorage.setItem("dnaDetails", JSON.stringify(resp.data));
      dnaDetails = resp.data;
    });

    return dnaDetails;
  }
}