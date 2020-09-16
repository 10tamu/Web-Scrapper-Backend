const questions = [
    "What is your name?", "Where do you live?", "What are your preferred programming languages ?"
]


const ask = (i=0) =>{
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();