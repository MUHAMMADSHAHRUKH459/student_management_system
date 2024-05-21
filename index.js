// Array to store students
let students = [];
// Function to add a student
async function addStudent() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const courseInput = document.getElementById('course');
    const feesInput = document.getElementById('fees');
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const course = courseInput.value;
    const fees = parseInt(feesInput.value);
    // Validate input
    if (!name || !age || !course || !fees) {
        alert('Please fill in all fields.');
        return;
    }
    // Add student to array
    students.push({ name, age, course, fees });
    // Clear form fields
    nameInput.value = '';
    ageInput.value = '';
    courseInput.value = '';
    feesInput.value = '';
    // Display success message
    alert('Student added successfully!');
    // Update student list
    viewStudents();
}
// Function to view students
function viewStudents() {
    const studentListElement = document.getElementById('student-list');
    if (studentListElement) {
        studentListElement.innerHTML = ''; // Clear previous list
        if (students.length === 0) {
            studentListElement.innerHTML = '<p>No students to display.</p>';
        }
        else {
            students.forEach((student, index) => {
                const studentItem = document.createElement('div');
                studentItem.classList.add('student-item');
                studentItem.innerHTML = `
                   <h3>Student ${index + 1}:</h3>
                   <p><strong>Name:</strong> ${student.name}</p>
                   <p><strong>Age:</strong> ${student.age}</p>
                   <p><strong>Course:</strong> ${student.course}</p>
                   <p><strong>Fees:</strong> ${student.fees}</p>
                   <hr>
               `;
                studentListElement.appendChild(studentItem);
            });
        }
    }
}
// Placeholder functions for updating and deleting students
function updateStudent() {
    console.log('Update Student logic will be implemented here.');
}
function deleteStudent() {
    console.log('Delete Student logic will be implemented here.');
}
// Add event listeners to buttons
document.getElementById('add-student-btn')?.addEventListener('click', () => {
    addStudent();
});
document.getElementById('view-students-btn')?.addEventListener('click', () => {
    viewStudents();
});
document.getElementById('update-student-btn')?.addEventListener('click', () => {
    updateStudent();
});
document.getElementById('delete-student-btn')?.addEventListener('click', () => {
    deleteStudent();
});
export {};
