import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { Axios } from 'axios';
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const url = "http://localhost:3000/usuario";
  const infoAxios = await axios.get(url);
  res.status(200).json(infoAxios.data)
}