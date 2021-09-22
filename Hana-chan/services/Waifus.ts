const fetch = (...args:any) => import('node-fetch').then(({default: fetch}) => fetch(args));

export const getWaifu = async () => {
  const response = await fetch(`${process.env.WAIFU_API}/sfw/neko`);
  const body = await response.text();
  return JSON.parse(body)
}