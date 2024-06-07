   const sqlite3 = require('sqlite3').verbose();

   // فتح اتصال بقاعدة البيانات
   const db = new sqlite3.Database('./database.sqlite', (err) => {
       if (err) {
           console.error(err.message);
       }
       console.log('Connected to the SQLite database.');
   });

   // إنشاء جدول المستخدمين إذا لم يكن موجودًا
   db.serialize(() => {
       db.run(`CREATE TABLE IF NOT EXISTS users (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT NOT NULL,
           email TEXT NOT NULL UNIQUE,
           password TEXT NOT NULL
       )`);
   });

   module.exports = db;
   
