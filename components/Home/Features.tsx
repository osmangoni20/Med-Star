import Link from "next/link";
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
        content: "We have  qualified doctors",
      },
      {
        id: 2,
        content: "The doctors are available  24 hours",
      },
      {
        id: 3,
        content: "Prescribe  medicines by communicating on online.",
      },

      {
        id: 5,
        content: "Our doctors help those whom are poor",
      },
    ],
    buttonName: "Call Doctor",
    link: "/doctor",
  },

  {
    id: 2,
    type: "Lab",
    buttonName: "Lab Test",
    link: "/lab_test",
    featuresData: [
      {
        id: 1,
        content: "We got the advanced and updated   equipments of lab.",
      },
      {
        id: 2,
        content: "Our lab test  costs are too  small for patiant",
      },
      {
        id: 3,
        content: "We check all the equipments before applying in body",
      },
      {
        id: 4,
        content: "Our Lab a neat and clean lab",
      },
    ],
  },

  {
    id: 4,
    type: "Ambulance",
    buttonName: "Call Ambulance",
    link: "ambulance",
    featuresData: [
      {
        id: 1,
        content: "We provide 24 Hour  ambulance service",
      },
      {
        id: 2,
        content: "We have the most advanced vehicles as ambulance",
      },
      {
        id: 3,
        content: "Oxygen supply system in ",
      },
      {
        id: 4,
        content: "Our Ambulance Drivers are efficient ",
      },
    ],
  },

  {
    id: 3,
    type: "Blood",
    buttonName: "Find Blood",
    link: "find_blood",
    featuresData: [
      {
        id: 1,
        content: "We have our own blood bank",
      },
      {
        id: 2,
        content: "We keep all kind of bloods on our blood bank",
      },
      {
        id: 3,
        content: "Sometimes we provide donors as well",
      },
      {
        id: 4,
        content: "We got 24 hour blood providing service",
      },
    ],
  },
];

const Features = () => {
  return (
    <div className={style.features}>
      <div className={`${style.title} text-center`}>
        <h2>Our Facilities</h2>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-5">
        {featuresList.map((feature) => {
          return (
            <div
              key={feature.id}
              className={`${style.featuresCard}  card w-84 bg-base-100 shadow-xl`}
            >
              <div
                className={` flex items-center card-body pt-5 pb-2 pl-3 pr-1`}
              >
                <div>
                  <h3 className="text-center  text-2xl font-bold">
                    {feature.type}
                  </h3>

                  {feature.featuresData.map((data) => (
                    <li className={`${style.service}`} key={data.id}>
                      {/* <p className={`${style.dot} mr-3`}></p> */}
                      <div className={`${style.icon}`}>
                        <BsStar />
                      </div>
                      <p className="pl-3">{data.content}</p>
                    </li>
                  ))}

                  <div className="card-actions justify-center">
                    <Link href={`/${feature.link}`}>
                      <a>
                        <SimpleButton>{feature.buttonName}</SimpleButton>
                      </a>
                    </Link>
                  </div>
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
