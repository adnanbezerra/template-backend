import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const user = 'admin';
const password = process.env.POSTGRE_PASSWORD;
const host = process.env.POSTGRE_HOST;
const port = process.env.POSTGRE_PORT;
const database = 'meu_banco_de_dados';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

export default connection;