const sentence = "hello there from lighthouse labs";
for (let i=0;i<sentence.length;i++) {
    setTimeout(() => {
        process.stdout.write(sentence[i]);// print the char here
      }, i * 10)
    };
    
    setTimeout(() => {
        console.log();// print the char here
      }, 200)
    
    
  