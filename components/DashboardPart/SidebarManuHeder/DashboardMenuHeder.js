import { Link } from 'react-router-dom';
import style from '../../../styles/Sass/Components/DashboardPart/_dashboardHeader.module.scss';
const DashboardMenuHeder = ({menuHeader}) => {
    return (
       <div className={`${style.menuHeder} flex justify-between items-center `}>
           <h5>{menuHeader}</h5>
           <Link to={'/'}>
           <h5>Home</h5>
           </Link>
       </div>
    );
};

export default DashboardMenuHeder;