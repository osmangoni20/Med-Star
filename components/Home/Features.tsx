import { BsStar } from "react-icons/bs";
import style from "../../styles/Sass/Components/Home/Features.module.scss";
import SimpleButton from "../Custom/Button/SimpleButton";
const featuresList = [
  {
    id: 1,
    type: "Doctor",
    featuresData: [
      {
        id: 1,
        content: "Our Service is very Good",
      },
      {
        id: 2,
        content: "Our Service is very Good",
      },
      {
        id: 3,
        content: "Our Service is very Good",
      },
      {
        id: 4,
        content: "Our Service is very Good",
      },
      {
        id: 5,
        content: "Our Service is very Good",
      },
    ],
    buttonName: "Call Doctor",
  },
  {
    id: 2,
    type: "Lab",
    buttonName: "Lab Test",
    featuresData: [
      {
        id: 1,
        content: "Our Service is very Good",
      },
      {
        id: 2,
        content: "Our Service is very Good",
      },
      {
        id: 3,
        content: "Our Service is very Good",
      },
      {
        id: 4,
        content: "Our Service is very Good",
      },
      {
        id: 5,
        content: "Our Service is very Good",
      },
    ],
  },
  {
    id: 4,
    type: "Ambulance",
    buttonName: "Call Ambulance",
    featuresData: [
      {
        id: 1,
        content: "Our Service is very Good",
      },
      {
        id: 2,
        content: "Our Service is very Good",
      },
      {
        id: 3,
        content: "Our Service is very Good",
      },
      {
        id: 4,
        content: "Our Service is very Good",
      },
      {
        id: 5,
        content: "Our Service is very Good",
      },
    ],
  },
  {
    id: 3,
    type: "Blood",
    buttonName: "Find Blood",
    featuresData: [
      {
        id: 1,
        content: "Our Service is very Good",
      },
      {
        id: 2,
        content: "Our Service is very Good",
      },
      {
        id: 3,
        content: "Our Service is very Good",
      },
      {
        id: 4,
        content: "Our Service is very Good",
      },
      {
        id: 5,
        content: "Our Service is very Good",
      },
    ],
  },
];

const Features = () => {
  return (
    <div className={style.features}>
      <h2 className={`${style.title} text-center`}>Our Facilities</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-5">
        {featuresList.map((feature) => {
          return (
            <div key={feature.id} className="card w-84 bg-base-100 shadow-xl">
              <div className="card-body  pl-5">
                <h3 className="text-center text-2xl font-bold">
                  {feature.type}
                </h3>
                {feature.featuresData.map((data) => (
                  <div className={`${style.service}`} key={data.id}>
                    {/* <p className={`${style.dot} mr-3`}></p> */}
                    <BsStar className="mr-3" />
                    <p>{data.content}</p>
                  </div>
                ))}
                <div className="card-actions justify-center">
                  <SimpleButton>{feature.buttonName}</SimpleButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
