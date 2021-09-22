import fetch from 'node-fetch'
// const fetch = require('node-fetch')

export const getWaifu = async () => {
  const response = await fetch(`${process.env.WAIFU_API}/sfw/neko`);
  const body = await response.text();
  return JSON.parse(body)
}