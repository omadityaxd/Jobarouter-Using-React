import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details </h2>
      <p>Job Title : {career.title}</p>
      <p>Job Salaray : {career.salary}</p>
      <p>Job Location : {career.location}</p>
      <div className="details">
        <h2>Job Details</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          blanditiis commodi vero minus quam ducimus ut doloribus minima nemo
          laboriosam voluptatum ad quaerat, magni explicabo exercitationem rem,
          nobis cum reprehenderit!
        </p>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could Not Find That Job");
  }
  return res.json();
};
