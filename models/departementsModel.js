let pool = require("./connection");

module.exports.getAllDepartements = async function() {
    try {
        const sql = "SELECT * FROM departments";
        const departements = await pool.query(sql);
    } catch (err) {
        console.log(err);
        return {status: 500, data: err};
    }
}