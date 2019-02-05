# Augur

Front end for blockchain data processing application.

## Purpose

Application processes tokens to be able to respond to basic queries.

The following information can be returned:

- The balance of an account for a token at a given time
- The average token transfer amount for a token
- The median token transfer amount for a token
- The account with the highest balance of a token at a given time

Sample data:

```
{
  "token": "0x86629cb32a61bfe620a93e37047a332d7cc1e3a3",
  "sender": "0x39c230f89981274177e79708c921582bd4bd0303",
  "recipient": "0xa7c7f886700b2d10ce2128487121b84699f41513",
  "value": 220000000000000,
  "timestamp": 1531355950
},
{
  "token": "0x1985365e9f78359a9b6ad760e32412f4a445e862",
  "sender": "0x08661d81d03b74a88bcf680e3e5eef2bd277caba",
  "recipient": "0x5a5a8da3e328324f2c5c425e2bb2493e5a79e5c6",
  "value": 1000000000000000000,
  "timestamp": 1531356017
},
```
