
const addStudent = (e)=>{
    let student = {
        name: document.getElementById('Name').value,
        age: document.getElementById('Age').value,
        m1: document.getElementById('M1').value,
        m2: document.getElementById('M2').value,
        m3: document.getElementById('M3').value,
        m4: document.getElementById('M4').value,
        m5: document.getElementById('M5').value
    }
    document.querySelector('form').reset();
    localStorage.setItem('Student_Data', JSON.stringify(student));
}
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('btn').addEventListener('click',addStudent);
    });
