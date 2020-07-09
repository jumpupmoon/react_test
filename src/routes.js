/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import Description from "@material-ui/icons/Description";
import LocalHospital from "@material-ui/icons/LocalHospital";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/hospital/mainHospital.js"; //시작화면 mainHospital.js로 수정
import searchDescription from "views/hospital/searchDescription.js"; //연결링크 수정
import wirteDescription from "views/hospital/wirteDescription.js"; //연결링크 수정
import manageHospital from "views/hospital/manageHospital.js"; //연결링크 수정
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "메인화면", //메뉴명 수정
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/searchDescription",
    name: "처방전 조회", //메뉴명 수정
    rtlName: "ملف تعريفي للمستخدم",
    icon: Search,
    component: searchDescription,
    layout: "/admin",
  },
  {
    path: "/wirteDescription",
    name: "처방전 발급", //메뉴명 수정
    rtlName: "قائمة الجدول",
    icon: Description,
    component: wirteDescription,
    layout: "/admin",
  },
  {
    path: "/manageHospital",
    name: "병원 관리", //메뉴명 수정
    rtlName: "طباعة",
    icon: LocalHospital,
    component: manageHospital,
    layout: "/admin",
  },
  // 왼쪽 네비 바 필요 없는 부분 삭제
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
  // 왼쪽 네비 바 필요 없는 부분 삭제
];

export default dashboardRoutes;
