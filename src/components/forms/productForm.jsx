import { forwardRef, memo } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import { groups } from "../../data/categories";
import { propTypes } from "react-bootstrap/esm/Image";

const StudentForm = forwardRef(
  ({ student, handleStudent, handleSubmit, validated }, ref) => {
    console.log("StudentForm");
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="firstName">
          <Form.Label>name</Form.Label>
          <Form.Control
            ref={ref}
            onChange={handleStudent}
            value={student.firstName}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="lastName">
          <Form.Label>price</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={student.lastName}
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="group">
          <Form.Label>category</Form.Label>
          <Form.Select onChange={handleStudent} value={student.group}>
            {groups.map((gr) => (
              <option key={gr} value={gr}>
                {gr}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3" controlId="age">
          <Form.Label>quantity</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={student.age}
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group className="my-3" controlId="age">
          <Form.Label>description</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={student.age}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group> */}
        <Button className="mt-3 w-100" type="submit">
          Add product
        </Button>
      </Form>
    );
  }
);

StudentForm.displayName = "StudentForm";

StudentForm.propTypes = {
  student: PropTypes.object,
  handleStudent: PropTypes.func,
  handleSubmit: PropTypes.func,
  validated: PropTypes.bool,
  editDebt: propTypes
};

const MemoStudentForm = memo(StudentForm);

export default MemoStudentForm;

// forwardRef((props, ref) => {
//   return <div>
//   </div>
// })
