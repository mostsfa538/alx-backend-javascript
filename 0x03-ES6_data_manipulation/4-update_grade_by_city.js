export default function updateStudentGradeByCity(stds, loc, newGrades) {
  return stds.filter((e) => e.location === loc).map((e) => {
    const newGrade = newGrades.find((grade) => grade.studentId === e.id);

    return { ...e, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
