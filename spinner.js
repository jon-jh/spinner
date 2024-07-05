setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 400);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 500);

// Repeat once

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 600);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);