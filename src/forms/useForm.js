import React,{ useRef } from "react";

class FormStore {
    constructor() {
      this.store = {}; // 状态库
      this.fieldEntities = [];
      this.callbacks = {};

    }

    setCallbacks = (newCallbacks) => {
      this.callbacks = {
        ...this.callbacks,
        ...newCallbacks
      }
    }

    // 注册与取消注册，
    setFieldEntities = (field) => {
      this.fieldEntities.push(field);

      return () => {
          // 取消注册
          this.fieldEntities = this.fieldEntities.filter((item) => item !== field);
          delete this.store[field.props.name];
      }

    };
  
    // get
    getFieldsValue = () => {
      return {...this.store};
    };
    getFieldValue = (name) => {
      return this.store[name];
    };
    // set
    setFieldsValue = (newStore) => {
      // name: value
      // 1. 修改状态库
      this.store = {
        ...this.store,
        ...newStore,
      };
      console.log("store", this.store); //sy-log

      this.fieldEntities.forEach((entity)=>{
        Object.keys(newStore).forEach((k)=>{
            if(k === entity.props.name) {
                entity.onStoreChange();
            }
        });
      });

    };
  

    validate = () => {
      let err = [];
  
      // todo 检验 rules
  
      return err;
    };


    submit = () => {
      const { onFinish, onFinishFailed } = this.callbacks;
      let err = this.validate();
  
      if (err.length === 0) {
        onFinish(this.getFieldsValue());
      } else {
        onFinishFailed(err, this.getFieldsValue());
      }
    };
  
    getForm = () => {
      return {
        getFieldValue: this.getFieldValue,
        getFieldsValue: this.getFieldsValue,
        setFieldsValue: this.setFieldsValue,
        setFieldEntities: this.setFieldEntities,
        submit: this.submit,
        setCallbacks: this.setCallbacks,
      };
    };
}

export default function useFrom(){

    const formRef = useRef();

    if(!formRef.current) {
        const formStore = new FormStore();
        formRef.current = formStore.getForm();
    }

    return [formRef.current];

}
  