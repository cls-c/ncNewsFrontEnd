import { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GetAllTopic } from "../util/api";
import { useNavigate } from "react-router-dom";

export default function Topic_dropdown() {
  const [topicArr, setTopicArr] = useState([]);
  useEffect(() => {
    GetAllTopic().then((data) => setTopicArr(data));
  }, []);
  const navigate = useNavigate();
  function  handleClick(e){
    e.preventDefault();
    console.log(e.target.getAttribute("value"))
    navigate(`/topic/${e.target.getAttribute("value")}`);


  }


  return (
    <>
      <NavDropdown title="Topic" id="collapsible-nav-dropdown">
        {topicArr.map(({ slug, description }) => {
          return (
            <>
              <NavDropdown.Item value={slug} key={`topic_${slug}`} title={description} onClick={handleClick}>
                {slug}
              </NavDropdown.Item>
            </>
          );
        })}
      </NavDropdown>
    </>
  );
}
