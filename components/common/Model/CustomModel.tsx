import Image from "next/image";
import style from "../../../styles/Sass/common/model/customModel.module.scss";
import useFirebase from "../../hooks/useFirebase";
import cancel from "/assets/image/cancel.png";
import checked from "/assets/image/checked.png";
import userImage from "/assets/image/default_profile.png";
const CustomModel = ({
  showModel,
  error,
  setModel,
  modelData,
}: {
  showModel: boolean;
  error: string;
  setModel: any;
  modelData: any;
}) => {
  const { user }: { user: any } = useFirebase();

  return (
    showModel && (
      <div>
        <div className={style.popup_container}>
          <div className={style.inner_successOrErrorPopup}>
            <div className="flex justify-center">
              {modelData.wrongType && (
                <div>
                  <Image className="text-center" src={cancel} alt=""></Image>
                  <h3>Sorry</h3>
                  <p>{modelData.text1}</p>
                  <button
                    onClick={() => setModel(false)}
                    className={style.wrong_button}
                  >
                    OK
                  </button>
                </div>
              )}

              {modelData.successType && (
                <div className="text-center">
                  <Image className="text-center" src={checked} alt=""></Image>
                  <h2>Success</h2>
                  <p className={style.text}>{modelData.text1}</p>
                  <p className={style.text}>{modelData.text2}</p>
                  <button
                    onClick={() => setModel(false)}
                    className={style.success_button}
                  >
                    OK
                  </button>
                </div>
              )}

              {modelData.welcomeType && (
                <div className="text-center">
                  <Image
                    className="text-center"
                    src={modelData.image || userImage}
                    alt=""
                  ></Image>
                  <h1>Welcome {user.firstName}</h1>
                  <p className={style.text}>{modelData.text1}</p>
                  <p className={style.text}>{modelData.text2}</p>
                  <button
                    onClick={() => setModel(false)}
                    className={style.welcome_button}
                  >
                    Start Exploring
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomModel;
