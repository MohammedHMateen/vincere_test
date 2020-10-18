let data_string = localStorage.getItem('Student_Data');

let saved_student= JSON.parse(data_string);



document.getElementById("name").innerHTML = saved_student.name;