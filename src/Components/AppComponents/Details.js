import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
function Details(props) {
  let location = useLocation();
  const items = location.state.item;
  return (
    <div>
      <h1>Details Page</h1>
      <h2>Title: {items.title}</h2>
      <h2>Date: {items.date}</h2>
      <h2>Descriptions: {items.descrp}</h2>
    </div>
  );
}
const mapStateToProps = (state) => ({
  tasks: state.tasks.data,
});

export default connect(mapStateToProps)(Details);
