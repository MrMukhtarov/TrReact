import * as Yup from "yup";

const validations = Yup.object().shape({
  text: Yup.string().required("Text is a required fields"),
});

export default validations;
