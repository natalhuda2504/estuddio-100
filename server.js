const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'natalia@estuddio100.com', // Seu email
    pass: 'yeco lela qesz gqxo' // Sua senha
  }
});

app.post('/send-email', (req, res) => {

  const mailOptions = {
    from: req.body.email,
    to: 'contato@estuddio100.com', // Destinatário
    subject: 'Contato Site Estuddio100',
    text: `Nome: ${req.body.name}\nEmail: ${req.body.email}\nTítulo: ${req.body.title}\nMensagem: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send(info.body);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});