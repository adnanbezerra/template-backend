import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const user = 'admin';
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.DATABASE_PORT;
const database = 'meu_banco_de_dados';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

export default connection;