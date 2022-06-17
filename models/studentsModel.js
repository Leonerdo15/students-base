var pool = require("./connection");

module.exports.getAllStudents = async function() {
    try {
        const sql = "SELECT stu_id, stu_name, cur_id, cur_name " +
            "FROM students, courses WHERE stu_cur_id = cur_id ORDER BY cur_id";

        const students = await pool.query(sql);
        console.log(sql);
        return students.rows;
    } catch (err) {
        console.log(err);
        return err;
    }
}