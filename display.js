let data_string = localStorage.getItem('Student_Data');
let saved_student= JSON.parse(data_string);



document.getElementById("name").innerHTML = saved_student.name;
document.getElementById("age").innerHTML = saved_student.age;
let avg = (parseInt(saved_student.m1) + parseInt(saved_student.m2) +parseInt(saved_student.m3) +parseInt (saved_student.m4)+parseInt(saved_student.m5))/5.0;
document.getElementById("avg").innerHTML = avg;