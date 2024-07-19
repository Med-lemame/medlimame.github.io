    <?php
    include 'config.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            echo "تم التسجيل بنجاح";
        } else {
            echo "خطأ: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
    ?>

    <form method="post" action="register.php">
        اسم المستخدم: <input type="text" name="username"><br>
        البريد الإلكتروني: <input type="email" name="email"><br>
        كلمة المرور: <input type="password" name="password"><br>
        <input type="submit" value="تسجيل">
    </form>
    
