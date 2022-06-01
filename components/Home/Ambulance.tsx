import { FaAmbulance } from "react-icons/fa";
const AmbulanceList = [
  {
    id: 1,
    name: "AC Ambulance",
    description:
      "An AC ambulance is just an ordinary ambulance which delivers exceptional high-end service. An AC ambulance is equipped with an AC, which ensures the patient and their loved ones accompanying them to the hospital are cooled. The air conditioning makes the conditions in the ambulance more relaxing especially for patients who have suffered shock or burns and scalds.",
  },
  {
    id: 2,
    name: "Non-AC Ambulance",
    description:
      "A non-AC ambulance is the cheapest ambulance service in our array of services. A non-AC ambulance is our service ambulance for the less privileged who just need a quick means to get their patient to the hospital. The ambulance also comes with a comfy bed and two pillows. We do not discriminate when it comes to offering quality service.",
  },
  {
    id: 3,
    name: "Freezer Van Ambulance",
    description:
      "A freezer ambulance resembles a mortuary ambulance, but it's more advanced. There are instances when a dead body will need to be transported for a long distance for burial. Also, if the loved ones are not close enough to pay their last respects to the dead or say their goodbyes, the body will need to be kept in an optimal condition until they arrive.",
  },
];
const Ambulance = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        {AmbulanceList.map((Amb) => {
          return (
            <div key={Amb.id}>
              <FaAmbulance size={"2x"} />
              <h2>{Amb.name}</h2>
              <p>{Amb.description}</p>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default Ambulance;
