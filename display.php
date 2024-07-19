    <?php
    include 'config.php';

    $sql = "SELECT id, username, email FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "ID: " . $row["id"]. " - اسم المستخدم: " . $row["username"]. " - البريد الإلكتروني: " . $row["email"]. "<br>";
        }
    } else {
        echo "لا يوجد نتائج";
    }

    $conn->close();
    ?>
    
