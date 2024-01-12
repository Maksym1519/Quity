import "./headerProfile.scss";
import Logo from "../../../public/main-logo.svg";
import Telegram from '../../../public/telegram 1.svg';
import WhatsUp from '../../../public/whatsapp 1.svg';
import Viber from '../../../public/viber 1.svg';
import Image from "next/image";
import Link from "next/link";
//components----------------------------------------------------------------
import ProfileNavigation from "./ProfileNavigation";
import Icones from "@/public/Data";

const HeaderProfile = (props) => {
  const styled = {
    fontFamily: props.fontFamily
  }
  return (
    <div className="headerProfile__wrapper" style={styled}>
      <div className="navigation">
        <div className="image__wrapper logo__wrapper">
          <Image src={Icones.logo} width={101} height={31} className="logo" alt="logo"/>
        </div>
        <div className="miningEquipment">
         <Link href="#" style={{ textDecoration: 'none' }}>Оборудование<br/> для майнинга</Link>
        </div>
      <ProfileNavigation />
      </div>
      <div className="socialMedia__wrapper">
        <span className="text">Получите консультацию <br/>в мессенджерах</span>
        <div className="image__wrapper">
            <Image src={Icones.whatsUp} width={32} height={32} alt="icon"/>
        </div>
        <div className="image__wrapper">
            <Image src={Icones.viber} width={32} height={32} alt="icon"/>
        </div>
        <div className="image__wrapper">
            <Image src={Icones.telegram} width={32} height={32} alt="icon"/>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
