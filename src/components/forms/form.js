import FieldContext from "./fieldContext";
import useForm from "./useForm";
import React,{ useRef } from "react";

export default function Form({children, onFinish, onFinishFailed}) {
  const [formInstance] = useForm();
  formInstance.setCallbacks({ onFinish, onFinishFailed });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}
