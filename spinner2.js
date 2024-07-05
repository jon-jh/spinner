const array = ['|', '/', '-', '\\', '|'];
array.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, index * 100);
});