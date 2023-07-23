let student1 = {
    students: [
      {
        name: 'suhara',
        language: 'python',
      },
      {
        name: 'arun',
        language: 'flutter',
      }
    ]
  };
  
  if (student1.students.some(student => student.language === 'python')) {
   return { ...student1,skill: 'python developer'} 
  } if(student1.students.some(student => student.language === 'flutter')){
student1.students.skill ='flutter developer'
  }
  console.log(student1);