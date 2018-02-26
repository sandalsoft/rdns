const rdns = require('./src/rdns');
const ip = '8.8.8.8';

async function main() {
  try {
    const hostname = await rdns(ip);
    console.log(`hostname: ${JSON.stringify(hostname)}`);
  } catch (error) {
    console.log(error);
  }
}

// main () needs to be a function for async goodness
main();
