-- إجراء مخزن لإضافة مستخدم جديد
CREATE PROCEDURE AddUser (
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO users (username, email, password)
    VALUES (p_username, p_email, p_password);
END;

-- إجراء مخزن لإضافة دورة جديدة
CREATE PROCEDURE AddCourse (
    IN p_title VARCHAR(100),
    IN p_description TEXT
)
BEGIN
    INSERT INTO courses (title, description)
    VALUES (p_title, p_description);
END;

-- إجراء مخزن للتسجيل في دورة
CREATE PROCEDURE EnrollInCourse (
    IN p_user_id INT,
    IN p_course_id INT
)
BEGIN
    INSERT INTO enrollments (user_id, course_id)
    VALUES (p_user_id, p_course_id);
END;
