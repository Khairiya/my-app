import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img34 from "./images/blouse.jpg";
import img22 from "./images/dress.jpg";
import img56 from "./images/hair.jpg";
//adding props
const Person = ({ img, name, job, children }) => {
  //using template literals
  //const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <p></p>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

//now to createa component
const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="Spider" job="Web Developer">
        <img src={img34}></img>
      </Person>
      <Person img="22" name="Seth" job="Designer">
        <img src={img22}></img>
      </Person>
      <Person img="56" name="Gibrill" job="Mobile Developer">
        <img src={img56}></img>
        <p>jkhdhjkhgdhlkdlkds</p>
      </Person>
    </section> 
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
