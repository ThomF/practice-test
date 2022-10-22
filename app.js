const ageToVote = 18
const currentYear = 2022
const jsReleaseYear = 1995
const currentAge = currentYear - jsReleaseYear

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE
console.log("Current age of java script", currentAge )

if(currentAge > ageToVote){
  console.log("JS is old enough to vote");
  
}
  else{
    console.log("JS is not old enough to vote");
  }
  

