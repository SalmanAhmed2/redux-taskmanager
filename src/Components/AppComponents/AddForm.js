import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";
import TextField from "@material-ui/core/TextField";
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
function AddForm(props) {
  let history = useHistory();
  return (
    <div className="add-form">
      <h1>AddForm Page</h1>
      <div className="form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let input = {
              title: event.target.title.value,
              date: event.target.date.value,
              descrp: event.target.descrp.value,
              id: Math.floor(Math.random() * 100),
            };
            props.dispatch(addTodo(input));
            history.push("/");
          }}
        >
          <TextField
            id="standard-basic"
            label="Add Title"
            required
            name="title"
          />
          <br />
          <TextField
            id="date"
            required
            label="Add Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            name="date"
          />
          <br />
          <TextField
            type="text"
            name="descrp"
            required
            id="outlined-multiline-static"
            label="Add Descriptions"
            multiline
            rows={5}
            variant="outlined"
          />
          <br />
          <Button variant="contained" type="submit" color="primary" startIcon={<SaveIcon />}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
export default connect(null)(AddForm);
