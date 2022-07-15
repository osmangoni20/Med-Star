import style from '../../../styles/Sass/common/model/dynamicModel.module.scss';
import cancel from '../image/cancel.png';
import checked from '../image/checked.png';
import userImage from '../image/personlogo.jpg';
const CustomModel = ({showModel,error,setModel,modelData}) => {
    console.log(showModel,modelData,error)
    return (
        showModel&&<div>
            <div className={style.popup_container}>
                <div className={style.inner_successOrErrorPopup}>
                <div className='flex justify-center'>

                {modelData.wrongType&&<div>
                <img className='text-center' src={cancel} alt=""></img>
                <h3>Sorry</h3>
                <p>{modelData.text1}</p>
                <button onClick={()=>setModel(false)} className={style.wrong_button}>OK</button>
                </div>
                }

                {
                    modelData.successType&&<div className='text-center'>
                    <img className='text-center' src={checked} alt=""></img>
                <h2>Success</h2>
                <p className={style.text}>{modelData.text1}</p>
                <p className={style.text}>{modelData.text2}</p>
                <button onClick={()=>setModel(false)} className={style.success_button}>OK</button>
                   
                </div>}

                {
                    modelData.welcomeType&&<div className='text-center'>
                    <img className='text-center' src={modelData.image||userImage} alt=""></img>
                <h1>Welcome</h1>
                <p className={style.text}>{modelData.text1}</p>
                <p className={style.text}>{modelData.text2}</p>
                <button onClick={()=>setModel(false)} className={style.success_button}>Start Exploring</button>
                   
                </div>}
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomModel;