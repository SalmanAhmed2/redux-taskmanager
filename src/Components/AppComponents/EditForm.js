import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { updateTodo } from "../actions/actions";

function EditForm(props) {
  let history = useHistory();
  let location = useLocation();
  const items = location.state.item;
  const item = props.tasks.find((tasks) => tasks.id === items.id);
  const [values, setValues] = useState(item);
  const handleSubmit = () => {
    props.dispatch(updateTodo(values));
    history.push("/");
  };
  return (
    <div className="edit-form">
      <h1>Edit Page</h1> 
      <TextField
        id="standard-basic"
        label="Add Title"
        required
        value={values.title}
        onChange={(event) => {
          setValues({ ...values, title: event.target.value });
        }}
      />
      <br />
      <TextField
        value={values.date}
        onChange={(event) => {
          setValues({ ...values, date: event.target.value });
        }}
        id="date"
        required
        label="Add Date"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <br />
      <TextField
        value={values.descrp}
        onChange={(event) => {
          setValues({ ...values, descrp: event.target.value });
        }}
        type="text"
        required
        id="outlined-multiline-static"
        label="Add Descriptions"
        multiline
        rows={5}
        variant="outlined"
      />
      <br />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
      >
        Update
      </Button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  tasks: state.tasks.data,
});

export default connect(mapStateToProps)(EditForm);
