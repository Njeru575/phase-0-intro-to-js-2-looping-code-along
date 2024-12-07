function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
 
  


function countDown(){
    let countDown = 10;
    while (countDown > -1) {
      console.log(countDown --);
    }
}
