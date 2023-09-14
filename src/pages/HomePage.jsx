import { useCallback, useMemo, useRef, useState } from "react";
import { Col,  Row } from "react-bootstrap";
import { v4 } from "uuid";


import StudentForm from "../components/forms/productForm";
import StudentsHeader from "../components/header/ProductHeader";
import StudentsTable from "../components/table/ProductTable";

const HomePage = () => {
  const studentsJson = localStorage.getItem("students");
  const [validated, setValidated] = useState(false);
  const [students, setStudents] = useState(JSON.parse(studentsJson) || []);
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    group: "React N1",
    age: "",
  });
  const [search, setSearch] = useState("");
  const firstNameInputRef = useRef();

  const handleStudent = useCallback(
    (e) => {
      setStudent({ ...student, [e.target.id]: e.target.value });
    },
    [student]
  );

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      setValidated(true);
      event.preventDefault();

      if (form.checkValidity()) {
        let newStudents = [...students, { ...student, id: v4() }];
        setStudents(newStudents);
        localStorage.setItem("students", JSON.stringify(newStudents));
        // console.log(firstNameInputRef);
        firstNameInputRef.current.focus();
        setValidated(false);
        setStudent({
          firstName: "",
          lastName: "",
          group: "React N1",
          age: "",
        });
      }
    },
    [student, students]
  );

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value.trim().toLowerCase());
  }, []);

  const results = useMemo(
    () =>
      students.filter(
        (el) =>
          el.firstName.toLowerCase().includes(search) ||
          el.lastName.toLowerCase().includes(search)
      ),
    [search, students]
  );

  const averageAge = +(
    results.reduce((acc, el) => acc + +el.age, 0) / students.length
  ).toFixed(2);

  return (
    <>
      <Row>
        <Col lg={4}>
          <StudentForm
            ref={firstNameInputRef}
            // firstNameInputRef={firstNameInputRef}
            student={student}
            handleStudent={handleStudent}
            handleSubmit={handleSubmit}
            validated={validated}
          />
        </Col>
        <Col lg={8}>
          <StudentsHeader
            search={search}
            handleSearch={handleSearch}
            averageAge={averageAge}
          />
          <StudentsTable students={results} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
