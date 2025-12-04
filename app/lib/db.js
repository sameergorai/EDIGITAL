import mysql from "mysql2/promise";

let pool;

export function getDB() {
  if (!pool) {
    // pool = mysql.createPool({
    //   host: 'server.cloudsensy.in',
    //   user: 'edigitalmain',
    //   password: 'Samir@&(9204)',
    //   database: 'edigitalmain',
    //   port: 2083,
    //   waitForConnections: true,
    //   connectionLimit: 10,
    // });
    // Update your db.js for cPanel typically:
pool = mysql.createPool({
  host: 'localhost', // Usually localhost for cPanel
  user: 'edigitalmain_edigital', // cPanel databases often have username_prefix
  password: 'Samir@&(9204)',
  database: 'edigitalmain_dbname', // cPanel adds prefix to database names
  port: 2083, // Standard MySQL port
  waitForConnections: true,
  connectionLimit: 10,
});
  }
  return pool;
}

// import mysql from 'mysql2/promise';

// export async function connectToDatabase() {
//   const connection = await mysql.createConnection({
//     host: 'server.cloudsensy.in',
//     port: 2083, // Note: 2083 is cPanel port, MySQL typically uses 3306
//     user: 'edigitalmain', // Usually "globalin_username"
//     password: 'Samir@&(9204)',
//     database: 'edigitalmain',
//     ssl: { rejectUnauthorized: false } // If SSL is required
//   });
  
//   return connection;
// }