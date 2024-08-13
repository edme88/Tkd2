import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { Axios } from 'axios';
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const username = req.body.username;
  const password = req.body.password;

  const url = "http://localhost:3000/usuario/login";
  const infoAxios = await axios.post(url, {username, password});
  res.status(infoAxios.status).json(infoAxios.data)
}