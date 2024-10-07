
class Course {
    constructor(name, code) {
      this.name = name;
      this.code = code;
      this.students = [];
    }
  

    enrollStudent(studentName) {
      this.students.push(studentName);
    }
  
    
    getCourseDetails() {
      return `${this.name} (${this.code}): ${this.students.length > 0 ? this.students.join(', ') : 'No students enrolled yet'}`;
    }
  }
  
  
  class CourseEnrollmentSystem {
    constructor() {
      this.courses = [];
    }

    addCourse(name, code) {
      const course = new Course(name, code);
      this.courses.push(course);
      this.updateCourseOptions();
    }
  
    
    enrollStudentInCourse(studentName, courseCode) {
      const course = this.courses.find(c => c.code === courseCode);
      if (course) {
        course.enrollStudent(studentName);
        this.updateEnrollmentDisplay();
      }
    }
  
    
    updateCourseOptions() {
      const selectCourse = document.getElementById('selectCourse');
      selectCourse.innerHTML = '<option value="" disabled selected>Select a course</option>'; // Reset options
  
      this.courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.code;
        option.textContent = `${course.name} (${course.code})`;
        selectCourse.appendChild(option);
      });
    }
  
    
    updateEnrollmentDisplay() {
      const enrollmentDisplay = document.getElementById('enrollmentDisplay');
      enrollmentDisplay.innerHTML = ''; // Clear the display
  
      this.courses.forEach(course => {
        const div = document.createElement('div');
        div.className = 'enrollment-item';
        div.textContent = course.getCourseDetails();
        enrollmentDisplay.appendChild(div);
      });
    }
  }
  
  
  const courseSystem = new CourseEnrollmentSystem();
  
  
  document.getElementById('addCourseBtn').addEventListener('click', () => {
    const courseName = document.getElementById('courseName').value;
    const courseCode = document.getElementById('courseCode').value;
  
    if (courseName && courseCode) {
      courseSystem.addCourse(courseName, courseCode);
      document.getElementById('courseName').value = '';
      document.getElementById('courseCode').value = '';
    } else {
      alert('Please enter both course name and course code.');
    }
  });
  
  
  document.getElementById('enrollBtn').addEventListener('click', () => {
    const studentName = document.getElementById('studentName').value;
    const selectedCourse = document.getElementById('selectCourse').value;
  
    if (studentName && selectedCourse) {
      courseSystem.enrollStudentInCourse(studentName, selectedCourse);
      document.getElementById('studentName').value = '';
    } else {
      alert('Please enter the student name and select a course.');
    }
  });
  