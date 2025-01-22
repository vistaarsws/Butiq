import "../styles/JobApplication.css";
import { useState } from "react";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    position: "",
    additionalDetails: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const qualifications = [
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam aperiam atque. Iure eum, voluptatum nisi consequatur dicta maiores quae pariatur eaque natus sunt. Illo dolores adipisci nisi accusantium",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam aperiam atque. Iure eum, voluptatum nisi consequatur dicta maiores quae pariatur eaque natus sunt. Illo dolores adipisci nisi accusantium",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam aperiam atque. Iure eum, voluptatum nisi consequatur dicta maiores quae pariatur eaque natus sunt. Illo dolores adipisci nisi accusantium",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam aperiam atque. Iure eum, voluptatum nisi consequatur dicta maiores quae pariatur eaque natus sunt. Illo dolores adipisci nisi accusantium",
  ];
  const skills = ["Java", "React JS", "HTML", "CSS", "Javascript", "Python"];

  return (
    <div className="job-application-page">
      <div className="job-details">
        <h1>Frontend Developer</h1>
        <div>
          <h2>
            <strong>Job Type:</strong>Full Time
          </h2>
          <h2>
            <strong> Experience:</strong>3+ Yrs
          </h2>
          <h2>
            <strong>Job Location:</strong>Bhopal
          </h2>
        </div>
        <section>
          <h3>Job Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            minima, aut repellat ut ab quaerat eligendi adipisci corrupti
            consequuntur dolorum ducimus numquam? Autem voluptatibus aperiam
            cupiditate et porro voluptas quam doloremque quae cumque numquam hic
            dolorum commodi in provident amet corporis, distinctio modi
            voluptatum sint laudantium placeat perspiciatis natus ullam.
          </p>
        </section>
        <section>
          <h3>Qualifications</h3>
          <ul>
            {qualifications.map((q, index) => {
              return <li key={index}>{q}</li>;
            })}
          </ul>
        </section>
        <section>
          <h3>Skills</h3>
          <ul id="skillsContainer">
            {skills.map((s, index) => {
              return <li key={index}>{s}</li>;
            })}
          </ul>
        </section>
      </div>

      <div className="application-form">
        <h3>Apply for this Job</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <p>
              Name <span>*</span>
            </p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>
              Email <span>*</span>
            </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <p>
              Phone Number <span>*</span>
            </p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>Gender</p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            <p>
              Address <span>*</span>
            </p>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>
              City <span>*</span>
            </p>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>
              State <span>*</span>
            </p>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Zipcode
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <p>
              Resume <span>*</span>
            </p>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              required
            />
          </label>
          <label>
            Additional Details:
            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
