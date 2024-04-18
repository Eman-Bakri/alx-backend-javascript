interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

function StudentList(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    }
}

const stu1 = StudentList({ firstname: 'Eman', lastname: "Ali", age: 27, location: "Spain"})
const stu2 = StudentList({ firstname: 'Ziad', lastname: "Wael", age: 21, location: "Lebanon"})

const studentsList = [ stu1, stu2 ];

// creating table, its rows, and its data.
const table = document.createElement("table");
const first_row = document.createElement("tr");
const second_row = document.createElement("tr");

const frdata1 = document.createElement("td");
const frdata2 = document.createElement("td");
const srdata1 = document.createElement("td");
const srdata2 = document.createElement("td");

frdata1.innerHTML = ;
frdata2.innerHTML = ;

first_row.appendChild(tdata);
first_row.appendChild(tdata1);

table.appendChild(first_row);

srdata1.innerHTML = ;
srdata2.innerHTML = ;

second_row.appendChild(tdata2);
second_row.appendChild(tdata3);

table.appendChild(second_row);