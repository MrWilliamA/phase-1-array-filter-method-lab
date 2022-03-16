// Code your solution here



  const findMatching = (drivers, name) => {
    return drivers.filter( driver => driver.toLowerCase() === name.toLowerCase() );
  }

  // or

  //const findMatching = (drivers, name) => {
    //return drivers.filter( driver => {
      //return driver.toLowerCase() === name.toLowerCase()
      // an alternative solution
     // // driver.toUpperCase() === name.toUpperCase()
    //})
  //}
  
  //   

  const fuzzyMatch = (drivers, letter) => {
    return drivers.filter(driver => driver.slice(0,2) === letter);
  }

const matchName = (drivers, driverName) => {

    return drivers.filter(driver => driver.name === driverName);
}