var pg = require('pg');

/* Heroku Credentials
Host:       ec2-63-34-223-144.eu-west-1.compute.amazonaws.com
Database:   dd9rfv1nc8rsmp
User:       stwugjiqcprgia
Port:       5432
Password:   fee6f057525fc2573028dbbb69b7eb8d361031af4e91c866645a8f72218c7458
URI:        postgres://stwugjiqcprgia:fee6f057525fc2573028dbbb69b7eb8d361031af4e91c866645a8f72218c7458@ec2-63-34-223-144.eu-west-1.compute.amazonaws.com:5432/dd9rfv1nc8rsmp
Heroku CLI: heroku pg:psql postgresql-convex-94950 --app ct-wp-students
 */

const connectionString = "postgres://stwugjiqcprgia:fee6f057525fc2573028dbbb69b7eb8d361031af4e91c866645a8f72218c7458@ec2-63-34-223-144.eu-west-1.compute.amazonaws.com:5432/dd9rfv1nc8rsmp"
    //const connectionString = "postgres://postgres:password@localhost:5432/Students"
console.log("connectionString = " + connectionString);

const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
})

module.exports = pool;