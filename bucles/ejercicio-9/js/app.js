for (let step = 1; step <= 100; step++) {
  if (step % 5 == 0) {
    console.log(step + " ----------------------------");
  } 
  else if(step % 4 == 0) {
    console.log(step + " Multiplo de 4");
  } 
  
  else if(step % 9 == 0) {
    console.log(step + " Multiplo de 9");
  } 

  else {
    console.log(step);
  }
}
