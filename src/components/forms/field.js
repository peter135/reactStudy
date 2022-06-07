import React, {Component} from "react";
import FieldContext from "./fieldContext";

export default class Field extends Component {
  static contextType = FieldContext;

  onStoreChange = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    this.unsetFieldEntities = this.context.setFieldEntities(this);
  }

  componentWillUnmount() {
    this.unsetFieldEntities();
  }

  getControlled = () => {
    const {getFieldValue, setFieldsValue} = this.context;
    const {name} = this.props;
    return {
      value: getFieldValue(name), //"omg", // get
      onChange: (e) => {
        const newValue = e.target.value;
        // set
        setFieldsValue({
          [name]: newValue,
        });
      },
    };
  };

  render() {
    console.log("render"); //sy-log
    const {children} = this.props;
    const returnChildNode = React.cloneElement(children, this.getControlled());
    return returnChildNode;
  }
}
