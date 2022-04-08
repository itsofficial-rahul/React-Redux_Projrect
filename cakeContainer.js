import React, { useEffect } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeAction";

function CakeContainer(props) {
  const url = "https://fakestoreapi.com/products";
  const fetchApi = async () => {
    const data = await fetch(url);
    const data2 = await data.json();
    console.log("hioi", data2);
  };
  useEffect(() => {
    fetchApi();
  });
  return (
    <div>
      cakeContainer
      <h1>No :{props.numofcakes}</h1>
      <button onClick={props.buyCake}>Add</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numofcakes: state.numofcakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
