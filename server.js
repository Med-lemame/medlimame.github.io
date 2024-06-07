const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// سلسلة الاتصال الخاصة بـ MongoDB Atlas
const dbURI = 'mongodb+srv://medlimame9:<f9nrXY9ervGchqe7>@cluster0.txtjpyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;

// توصيل قاعدة البيانات
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

// تعريف مخطط المستخدم
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    name: String
});

const User = mongoose.model('User', userSchema);

// تهيئة bodyParser لتحليل بيانات الطلب
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// نقاط نهاية API لإنشاء حساب جديد
app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        });
        await newUser.save();
        res.status(201).send("تم إنشاء الحساب بنجاح!");
    } catch (error) {
        res.status(500).send("حدث خطأ أثناء إنشاء الحساب.");
    }
});

// نقاط نهاية API لتسجيل الدخول
app.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("البريد الإلكتروني غير صحيح.");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("تم تسجيل الدخول بنجاح!");
        } else {
            res.status(400).send("كلمة المرور غير صحيحة.");
        }
    } catch (error) {
        res.status(500).send("حدث خطأ أثناء تسجيل الدخول.");
    }
});

// بدء الخادم
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
