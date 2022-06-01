import style from "../../styles/Sass/main.module.sass";

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
    <div>
      <h2>Features</h2>
      <div className={style.features}>
        {featuresList.map((feature) => {
          return (
            <div key={feature.id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center">Card title!</h2>
                {feature.featuresData.map((data) => (
                  <p key={data.id}>{data.content}</p>
                ))}
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">
                    {feature.buttonName}
                  </button>
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
