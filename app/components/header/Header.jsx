"use client";
import Link from "next/link";
import "./header.scss";
import Image from "next/image";
//components--------------------------------------------------------------
import HeaderProfile from "../headerProfile/HeaderProfile";
import Navigation from "../navigation/Navigation";
import Icones from "../../../public/Data";
import { useAppSelector } from "@/lib/hooks";
import { useSelector } from "react-redux";

const Header = () => {
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  return (
    <header className="wrapper">
      <div className="container">
        <div className="navigation__wrapper">
          <Navigation />
          {isMobile ? (<div className="burgerMenu">-vfvfv</div>) : ("")}

          <div className="contacts">
            <div className="phoneNumber__wrapper">
              <span>+38 (097) 123 45 67</span>
              <Image
                src={Icones.warning}
                width={12}
                height={12}
                alt="warning"
              />
            </div>
            <div className="backCall">Обратный звонок</div>
            <div className="profile__wrapper">
              <span className="userName">User</span>
              <div className="avatar__wrapper">
                <Image
                  src={Icones.emptyAvatar}
                  width={30}
                  height={30}
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="headerFunctions__wrapper">
          <HeaderProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
