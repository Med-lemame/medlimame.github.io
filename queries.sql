-- استعلام لجلب المستخدمين المسجلين في دورة معينة
SELECT u.username, u.email
FROM users u
JOIN enrollments e ON u.user_id = e.user_id
WHERE e.course_id = ?;

-- استعلام لجلب جميع الدورات
SELECT course_id, title, description, created_at
FROM courses;

-- استعلام لجلب تفاصيل المستخدمين مع عدد الدورات المسجلين بها
SELECT u.user_id, u.username, COUNT(e.course_id) as course_count
FROM users u
LEFT JOIN enrollments e ON u.user_id = e.user_id
GROUP BY u.user_id, u.username;
