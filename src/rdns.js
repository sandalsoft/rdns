const dns = require('native-dns');
const util = require('util');
const IP = require('ip');
const { promisify } = require('util');

module.exports = async function reverseDNSLookup(ip) {
  try {
    if (!IP.isV4Format(ip) && !IP.isV6Format(ip)) {
      return Promise.reject(`${ip} is Not a valid IP address`);
    }
    const asyncDNS = promisify(dns.reverse);
    return await asyncDNS(ip);
  } catch (err) {
    return Promise.reject(err);
  }
};
