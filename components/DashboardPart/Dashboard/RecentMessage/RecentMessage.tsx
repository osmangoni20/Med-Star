import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../../../../styles/Sass/Components/DashboardPart/Dashboard/_recentMessage.module.scss";
import doc from "/assets/image/doctor1.jpg";
const AllMessage = [
  {
    id: 1,
    img: "",
    name: "Mohammad Osamn Goni",
    message: "It is New Message For You",
    submitTime: "6",
  },
  {
    id: 2,
    img: "",
    name: "Mohammad Osamn Goni",
    message: "It is New Message For You",
    submitTime: "3",
  },
  {
    id: 3,
    img: "",
    name: "Mohammad Osamn Goni",
    message: "It is New Message For You",
    submitTime: "6",
  },
];
const RecentMessage = () => {
  const [message, setMessage] = useState<any>([]);
  useEffect(() => {
    setMessage(AllMessage);
  });
  return (
    <div className={style.recentMessage}>
      <h3>Recent Message</h3>
      <div className={style.recentMessageBody}>
        {message.map((msg: any) => (
          <div className={style.messageCard}>
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
                <p className={style.message}>{msg.message}</p>
                <p className={style.time}>{msg.submitTime} Minutes ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMessage;
