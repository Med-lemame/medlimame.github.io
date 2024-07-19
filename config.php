    <?php
    $servername = "sql113.infinityfree.com";
    $username = "if0_36689143";
    $password = "GM76foosxblgj3";
    $dbname = "if0_36689143_XXX(";

    // إنشاء الاتصال
    $conn = new mysqli($servername, $username, $password, $dbname);

    // التحقق من الاتصال
    if ($conn->connect_error) {
        die("فشل الاتصال: " . $conn->connect_error);
    }
    ?>
    
