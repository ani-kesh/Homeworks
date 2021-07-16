const GetCountries = async function () {
  return await fetch("https://restcountries.eu/rest/v2/all")
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      if (result.length > 0) {
        return result;
      }
    });
};

export default GetCountries;
