// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import InstructorDashboardPage from "views/InstructorDashboard/InstructorDashboard.jsx";
import CoursesList from "views/CoursesList/CoursesList.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import QuestionBank from "views/QuestionBank/QuestionBank.jsx";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [

//STUDENT'S DASHBOARD
  //{
  //  path: "/dashboard",
  //  name: "Dashboard",
  //  rtlName: "لوحة القيادة",
  //  icon: Dashboard,
  //  component: DashboardPage,
  //  layout: "/admin"
  //  },

//INSTRUCTOR'S DASHBOARD
    {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: InstructorDashboardPage,
        layout: "/admin"
    },
//optional
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/CoursesList",
    name: "Courses List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CoursesList,

},
  {
    path: "/QuestionBank",
    name: "Question Bank",
    rtlName: "بنك الأسئلة",
    icon: "list_alt",
    component: QuestionBank,
    layout: "/admin"
  }
  //{
  //  path: "/icons",
  //  name: "Icons",
  //  rtlName: "الرموز",
  //  icon: BubbleChart,
  //  component: Icons,
  //  layout: "/admin"
  //},
  //{
  //  path: "/notifications",
  //  name: "Notifications",
  //  rtlName: "إخطارات",
  //  icon: Notifications,
  //  component: NotificationsPage,
  //  layout: "/admin"
  //},
  //{
  //  path: "/rtl-page",
  //  name: "RTL Support",
  //  rtlName: "دعم لغات من اليمين لليسار",
  //  icon: Language,
  //  component: RTLPage,
  //  layout: "/rtl"
  //}
];

export default dashboardRoutes;
