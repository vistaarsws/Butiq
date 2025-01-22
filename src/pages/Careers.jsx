import CareerCard from "../components/Card/CareerCard/CareerCard";
import "../styles/Careers.css";
import { useState } from "react";

export default function Careers() {
  const [hoverState, setHoverState] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const openPositions = [
    {
      positionName: "Brand Solutions Manager",
      experienceRequired: "Min 1 year of exp",
      employmentType: "Internship",
      departmentName: "Marketing",
    },
    {
      positionName: "Graphic Designer",
      experienceRequired: "1-3 years",
      employmentType: "Full Time",
      departmentName: "Design",
    },
    {
      positionName: "Brand Strategist",
      experienceRequired: "2-4 years",
      employmentType: "Full Time",
      departmentName: "Marketing",
    },
    {
      positionName: "Art Director",
      experienceRequired: "8+ years",
      employmentType: "Full Time",
      departmentName: "Design",
    },
  ];

  const highlightTextHandler = (textIndex) => {
    const newHoverState = {
      1: false,
      2: false,
      3: false,
      4: false,
    };
    newHoverState[textIndex] = true;

    setHoverState(newHoverState);
  };

  return (
    <div className="careersContainer">
      <section>
        <div>
          <h1
            className={`${hoverState[0] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(0)}
          >
            MAFIA
          </h1>
          <h1
            className={`${hoverState[1] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(1)}
          >
            HOW
          </h1>
          <h1
            className={`${hoverState[2] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(2)}
          >
            WHY
          </h1>
          <h1
            className={`${hoverState[3] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(3)}
          >
            WHAT
          </h1>
        </div>
        <div>
          <div>
            {hoverState[0] && (
              <p>
                Would you be the good old Thakur who’s remembered only in
                Gabbar’s dialogues or would you rather be Gabbar himself whose
                name is scary enough to put children to sleep, and whose iconic
                character is sought after by heroes even till date?
              </p>
            )}
            {hoverState[1] && (
              <p>
                Cause we know how frustrating it is to sit for long hours in
                boring corporate office cubicles, doing the same thing over and
                over again, and still going unnoticed, forget getting
                recognition!
              </p>
            )}
            {hoverState[2] && (
              <p>
                Since we value individuality, creativity, originality and a lil
                bit of a lot of quirkiness, we promise we will value that… at
                times more than we value you!
              </p>
            )}
            {hoverState[3] && (
              <p>
                If you don&apos;t want to be a dead fish going with the flow,
                why won&apos;t you drop us a mail? We will get back to you and
                see what you have got to show.
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="relative">
        <h2>Open Positions</h2>

        <div>
          {openPositions.map((e, index) => {
            return (
              <>
                <CareerCard
                  key={index}
                  jobId={index}
                  positionName={e.positionName}
                  experienceRequired={e.experienceRequired}
                  employmentType={e.employmentType}
                  departmentName={e.departmentName}
                />
                <hr />
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
