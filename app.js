const mysql = require('mysql2/promise'); // using promise-based API

// 1. Create connection
const dbConfig = {
  host: 'localhost',
  user: 'root',       // your MySQL username
  password: 'Syed@24', // your MySQL password
  database: 'practice'  // your database name
};

async function main() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL!');

    // -------------------------------
    // 2. Insert data
    // -------------------------------
    const insertQuery = `
      INSERT INTO summa (name, age, mobile_no)
      VALUES (?, ?, ?)
    `;

    await connection.execute(insertQuery, ['Ali', '35', '9876543210']);
    console.log('Row inserted!');

    // -------------------------------
    // 3. Read data
    // -------------------------------
    const [rows] = await connection.execute('SELECT * FROM summa');
    console.log('All rows:');
    console.table(rows);

    // -------------------------------
    // 4. Update a row
    // -------------------------------
    await connection.execute(
      'UPDATE summa SET mobile_no = ? WHERE pkey = ?',
      ['9999999999', 2]
    );
    console.log('Row updated!');

    // -------------------------------
    // 5. Delete a row
    // -------------------------------
    await connection.execute(
      'DELETE FROM summa WHERE pkey = ?',
      [4]
    );
    console.log('Row deleted!');

    // Close connection
    await connection.end();
    console.log('Connection closed.');
  } catch (err) {
    console.error('DB error:', err);
  }
}

main();
