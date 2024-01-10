"use client";
import p from "./pageNavigation.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Icones from "@/public/Data";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { pageNavigationInfo } from "@/lib/features/blog/header/pageNavigationSlice";
import { setAll } from "@/lib/features/blog/blogStateSlice";
import { useEffect, useState } from "react";

const PageNavigation = (props) => {
  const [dataFromServer, setDataFromServer] = useState();
  const [title, setTitle] = useState();
  const dataFromRedux = useAppSelector(pageNavigationInfo);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
        setTitle(dataFromServer.attributes.blogTitle);
        }
  },[dataFromServer])
   
  useEffect(() => {
    if (pageNavigationInfo) {
      setDataFromServer(dataFromRedux);
    }
  }, [dataFromRedux]);
  //pathname------------------------------------
  let pathname = usePathname();
  switch (pathname) {
    case "/blog":
      pathname = "Блог";
      break;
    case "/shop":
      pathname = "Главная";
      break;
    default:
      break;
  }
  //set-redux-state-for-back------------------------
  const dispatch = useAppDispatch();
  const clickAllBlogNews = () => {
    dispatch(setAll());
  };

  return (
    <div className={p.wrapper}>
      <div className={pathname === "Главная" ? p.pageItemActive : p.pageItem}>
        <Link href={"/shop"}>Главная</Link>
        <Image src={Icones.arrowNavigation} width={12} height={12} />
      </div>
      <div
        className={pathname === "Блог" ? p.pageItemActive : p.pageItem}
        onClick={clickAllBlogNews}
      >
        <Link href={"/blog"}>Quity-блог</Link>
        <Image src={Icones.arrowNavigation} width={12} height={12} />
      </div>
      <div className={pageNavigationInfo ? p.pageItemActive : p.pageItem}>
        {pathname === "Блог" && title}
      </div>
    </div>
  );
};
export default PageNavigation;
