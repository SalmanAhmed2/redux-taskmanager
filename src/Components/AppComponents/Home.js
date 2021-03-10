import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteTodo } from "../actions/actions";
import { editTodo } from "../actions/actions";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function Home(props) {
  let history = useHistory();
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <button
        onClick={() => {
          history.push("/add-form");
        }}
      >
        Create Task
      </button>
      {props.tasks.map((item) => (
        <>
          <table className="table">
            <thead>
              <tr className="tableheadrow">
                <th className="tableDATA">Name</th>
                <th className="tableDATA">Date</th>
                <th className="tableDATA">Action</th>
              </tr>
              <tbody>
                <tr className="tablerow">
                  <td className="links">{item.title}</td>
                  <td className="links">{item.date}</td>
                  <td>
                    <div className="buttons">
                      <DeleteIcon
                        onClick={() => props.dispatch(deleteTodo(item.id))}
                      />
                      <CreateIcon
                        onClick={() => {
                          props.dispatch(editTodo(item.id));
                          history.push("/edit-form", { item });
                        }}
                      />
                      <ArrowForwardIosIcon
                        onClick={() =>
                          history.push(`/details/${item.id}`, { item })
                        }
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </thead>
          </table>
        </>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  tasks: state.tasks.data,
});

export default connect(mapStateToProps)(Home);
