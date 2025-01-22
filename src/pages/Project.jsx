import { useLocation } from "react-router-dom";
import { ourWork } from "../utils/Constant";

export default function Project() {
  const location = useLocation();
  console.log(ourWork);
  const selectedProject = location.pathname.split("/").pop();

  console.log(ourWork.works[selectedProject]);

  return (
    <div>
      <article>
        <figure>
          <img src={""} e alt="" />
        </figure>
        <p></p>
      </article>
      <video src=""></video>
    </div>
  );
}
