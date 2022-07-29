import Image from "next/image";
import style from "../../../../styles/Sass/Components/DashboardPart/Dashboard/_recentMessage.module.scss";
import doc from "/assets/image/2doctor.png";

interface Message {
  _id: string;
  img: string;
  name: string;
  seen: boolean;
  message: string;
  date: string;
}
[];

const RecentMessage = ({ messageData }: any) => {
  return (
    <div className={style.recentMessage}>
      <h3>Recent Message</h3>
      <div className={style.recentMessageBody}>
        {messageData?.slice(0, 3).map((msg: Message, index: number) => (
          <div key={index} className={style.messageCard}>
            <div className="flex  gap-3">
              <span
                style={{
                  background: "linear-gradient(80deg, #43D3BF 20%, #61D6C8)",
                }}
                className={style.cardIcon}
              >
                <Image src={doc} height={25} width={25} alt="" />
              </span>
              <div>
                <h4>{msg.name}</h4>
                <p className={style.message}>{msg.message.slice(0, 50)}</p>
                <p className={style.time}>{msg.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMessage;
