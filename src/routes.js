// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
// core components/views for instructor layout
import StudentDashboardPage from "views/StudentDashboard/StudentDashboard.jsx";
import InstructorDashboardPage from "views/InstructorDashboard/InstructorDashboard.jsx";
import StudentCoursesList from "views/StudentCoursesList/StudentCoursesList.jsx";
import StudentExam from "views/StudentExam/StudentExam.jsx";
import InstructorCoursesList from "views/InstructorCoursesList/InstructorCoursesList.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import QuestionBank from "views/QuestionBank/QuestionBank.jsx";


const dashboardRoutes = [

//STUDENT'S DASHBOARD
  // {
  //  path: "/dashboard",
  //  name: "Dashboard",
  //  rtlName: "لوحة القيادة",
  //  icon: Dashboard,
  //  component: StudentDashboardPage,
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
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/instructor"
  // },

  //STUDENT'S COURSESLIST
//   {
//     path: "/CoursesList",
//     name: "Courses List",
//     rtlName: "قائمة الجدول",
//     icon: "content_paste",
//     component: StudentCoursesList,
//     layout: "/admin"

// },

//STUDENT'S EXAM
{
  path: "/Exam",
  name: "Exam",
  rtlName: "قائمة الجدول",
  icon: "content_paste",
  component: StudentExam,
  layout: "/admin"

},


 //INSTRUCTOR'S COURSESLIST
//  {
//   path: "/CoursesList",
//   name: "Courses List",
//   rtlName: "قائمة الجدول",
//   icon: "content_paste",
//   component: InstructorCoursesList,
//   layout: "/admin"

// },

//INSTRUCTOR'S QB
  {
    path: "/QuestionBank",
    name: "Question Bank",
    rtlName: "بنك الأسئلة",
    icon: "content_paste",
    component: QuestionBank,
    layout: "/admin"
  }
  //{
  //  path: "/icons",
  //  name: "Icons",
  //  rtlName: "الرموز",
  //  icon: BubbleChart,
  //  component: Icons,
  //  layout: "/instructor"
  //},
  //{
  //  path: "/notifications",
  //  name: "Notifications",
  //  rtlName: "إخطارات",
  //  icon: Notifications,
  //  component: NotificationsPage,
  //  layout: "/instructor"
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
