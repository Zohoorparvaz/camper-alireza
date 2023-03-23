require('dotenv').config();

const { Client } = require('pg');
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const connect = async () => {
  try {
    const client = new Client({ connectionString: URL, ssl: true });
    await client.connect();
    const res = await client.query("SELECT 'NeonDB is Connected!' as message");
    console.log(res.rows[0].message);
    await client.end();
  } catch (error) {
    console.log(error);
  }
};

connect();