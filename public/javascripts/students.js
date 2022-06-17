window.onload = async function() {
    let students = await $.ajax({
        url: "/api/students",
        method: "get",
        dataType: "json"
    })
    showStudents(students)
}


function showStudents(students) {
    let html = "";
    for (let student of students) {
        html += "<section>" +
            "<h2>" + student.stu_name + "</h2>" +
            "<h3> Curso: " + student.cur_name + "</h3></section>";
    }
    document.getElementById("students").innerHTML = html;
}