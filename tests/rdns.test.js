const rdns = require('../');
const ip = '8.8.8.8';
const domain = 'gretavanfleet.com';

test('gretavanfleet.com throws invalid IP error', async () => {
  expect.assertions(1);
  await expect(rdns(domain)).rejects.toMatch(
    `${domain} is Not a valid IP address`
  );
});

test('8.8.8.8 resolves to google-public-dns-a.google.com', async () => {
  expect.assertions(1);
  const hostnames = await rdns(ip);
  expect(hostnames[0]).toMatch('google-public-dns-a.google.com');
});
