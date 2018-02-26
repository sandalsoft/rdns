# rdns
Simple async reverse DNS lookups for node using async/await


# Install
`yarn add rdns`

or

`npm i -S rdns`


# Usage

```
const rdns = require('rdns');

async main() {
  
  try {
    const hostnames = await rdns('8.8.8.8');
    console.log(hostnames);  // ["google-public-dns-a.google.com"]
    console.log(hostname[0]); // "google-public-dns-a.google.com"
  } catch (error) {
    console.log(`error: ${JSON.stringify(error)}`);
  }
}

// main() needed so we can call await inside async main() function
main()
```

# Notes
- rdns returns an array even if the IP only resolves to one hostname
