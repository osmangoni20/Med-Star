import Image from "next/image";
import style from "../../../styles/Sass/common/model/customModel.module.scss";
import useFirebase from "../../hooks/useFirebase";
import cancel from "/assets/image/cancel.png";
import checked from "/assets/image/checked.png";
import userImage from "/assets/image/default_profile.png";
const CustomModel = ({ showModel, error, setModel, modelData }: any) => {
  const { user }: { user: any } = useFirebase();
  console.log(modelData);
  return (
    showModel && (
      <div>
        <div className={style.popup_container}>
          <div className={style.inner_successOrErrorPopup}>
            <div className="flex justify-center">
              {modelData.wrongType && (
                <div className="text-center">
                  <Image
                    className="text-center"
                    height={60}
                    width={60}
                    src={cancel}
                    alt=""
                  ></Image>
                  <h3>Sorry</h3>
                  <p className={style.text}>{modelData.text1}</p>
                  <p className={style.text}>{modelData.text2}</p>
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
                  <Image
                    className="text-center"
                    height={60}
                    width={60}
                    src={checked}
                    alt=""
                  ></Image>
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
                          src={user?.photoURL || userImage}
                          alt={""}
                          height={40}
                          width={40}
                        />
                  <h1>Welcome {user.displayName}</h1>
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
