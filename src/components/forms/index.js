import React from "react";
import _Form from "./form";
import Field from "./field";
import useForm from "./useForm";

const Form = _Form; //React.forwardRef(_Form);
Form.Field = Field;
Form.useForm = useForm;

export { Field, useForm };
export default Form;