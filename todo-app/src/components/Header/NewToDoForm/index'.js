import React from "react";
import { Formik, Field, Form } from "formik";
import ValidatuinSchema from "./Validations";
import { useTodo } from "../../../contexts/ToDoContext";

function NewToDoForm() {
  const { addTodo } = useTodo();
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {

        console.log(values);

        addTodo(values.text);

        bag.resetForm();
        
      }}
      ValidatuinSchema={ValidatuinSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewToDoForm;
