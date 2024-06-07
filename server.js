   const express = require('express');
   const bcrypt = require('bcrypt');
   const bodyParser = require('body-parser');
   const db = require('./db');

   const app = express();
   const port = 3000;

   // تهيئة bodyParser لتحليل بيانات الطلب
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());

   // نقاط نهاية API لإنشاء حساب جديد
   app.post('/signup', async (req, res) => {
       try {
           const hashedPassword = await bcrypt.hash(req.body.password, 10);
           const { name, email } = req.body;
           const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
           db.run(sql, [name, email, hashedPassword], function (err) {
               if (err) {
                   return res.status(500).send("حدث خطأ أثناء إنشاء الحساب.");
               }
               res.status(201).send("تم إنشاء الحساب بنجاح!");
           });
       } catch (error) {
           res.status(500).send("حدث خطأ أثناء إنشاء الحساب.");
       }
   });

   // نقاط نهاية API لتسجيل الدخول
   app.post('/login', (req, res) => {
       const { email, password } = req.body;
       const sql = `SELECT * FROM users WHERE email = ?`;
       db.get(sql, [email], async (err, user) => {
           if (err) {
               return res.status(500).send("حدث خطأ أثناء تسجيل الدخول.");
           }
           if (!user) {
               return res.status(400).send("البريد الإلكتروني غير صحيح.");
           }
           try {
               if (await bcrypt.compare(password, user.password)) {
                   res.send("تم تسجيل الدخول بنجاح!");
               } else {
                   res.status(400).send("كلمة المرور غير صحيحة.");
               }
           } catch (error) {
               res.status(500).send("حدث خطأ أثناء تسجيل الدخول.");
           }
       });
   });

   // بدء الخادم
   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   
