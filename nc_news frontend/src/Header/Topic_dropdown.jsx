import { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GetAllTopic } from "../util/api";

export default function Topic_dropdown() {
  const [topicArr, setTopicArr] = useState([]);
  useEffect(() => {
    GetAllTopic().then((data) => setTopicArr(data));
  }, []);
  console.log(topicArr)
  return (
    <>
      <NavDropdown title="Topic" id="collapsible-nav-dropdown">
        {topicArr.map(({ slug, description }) => {
          console.log(slug, description);
          return (
            <>
              <NavDropdown.Item href={`/topic/${slug}`} key={`topic_${slug}`} title={description}>
                {slug}
              </NavDropdown.Item>
            </>
          );
        })}
      </NavDropdown>
    </>
  );
}
