import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentsTable = ({ students, editDebt }) => {
  console.log("StudentTable");
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>N</th>
          <th>Name</th>
          <th>price</th>
          <th>category</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody>
        {students.length ? (
          students.map((student, i) => (
            <tr key={student.id}>
              <td>{i + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.group}</td>
              <td>{student.age}</td>
              <button className="btn btn-primary m-3" onClick={editDebt}>
                Edit
              </button>
              <button className="btn btn-danger">delete</button>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              No students
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

StudentsTable.propTypes = {
  students: PropTypes.array,
  editDebt: PropTypes.func
};

const MemoStudentsTable = memo(StudentsTable);

export default MemoStudentsTable;
