import express, { json, response } from 'express';
import cors from 'cors';
import fetch from 'node-fetch'
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

https://fakestoreapi.com/products/1
// app.get('/check/:domain', async (req, res) => {
// const domain ='https://www.google.com/'
//   // const domain = req.params.domain;
//   try {
//     const response = await fetch(`https://api.api-ninjas.com/v1/whois?domain=${domain}`, {
//       headers: { 'X-Api-Key': process.dotenv.NINJA_API_KEY }
//     });
//     const data = await response.json();
//     res.json(data);
//     console.log(data);

//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch WHOIS data' });
//   }
// });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.send('Scam Checker API is running');
});


app.get('/chack', async(req, res) => {
try {
  const response = await fetch('https://fakestoreapi.com/products/1')
  const data = await response.json()
  // res.json(data)
  console.log(data)
  
} catch (error) {
  console.log(error)
}


});


app.get('/weburl/:domain', async(req, res) => {
try {
  const domain = req.params.domain
  const key='4eh7LDOdb3sK7sH7y97mxw==wRri0dEGJKRZ02g1'
  const response =  await fetch(`https://api.api-ninjas.com/v1/whois?domain=${domain}`, {
      headers: { 'X-Api-Key':key }
    });
  const data = await response.json()
  // res.json(data)
  console.log(data)
  res.json(data)
  
} catch (error) {
  console.log(error)
}


});