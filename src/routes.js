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
import Reports from "views/Reports/Reports.jsx";
import InstructorCoursesList from "views/InstructorCoursesList/InstructorCoursesList.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import QuestionBank from "views/QuestionBank/QuestionBank.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx"
import CreateExam from "./views/CreateExam/CreateExam";
import AddQuestionPage from "./views/AddQuestionPage/AddQuestionPage.jsx";
import AdminDashboard from "./views/Admin/AdminDashboard.jsx";
import AddStudent from "./views/Admin/AddStudent.jsx";
import AddInstructor from "./views/Admin/AddInstructor.jsx";


const dashboardRoutes = [

// ADMIN DASHBOARD
{
  path: "/dashboard",
  name: "Dashboard",
  rtlName: "لوحة القيادة",
  icon: Dashboard,
  component: AdminDashboard,
  layout: "/admin"
  },

  // ADMIN ADD STUDENT
{
  path: "/addstudent",
  name: "Add Student",
  rtlName: "لوحة القيادة",
  icon: Dashboard,
  component: AddStudent,
  layout: "/admin"
  },

   // ADMIN ADD INSTRUCTOR
{
  path: "/addinstructor",
  name: "Add Instructor",
  rtlName: "لوحة القيادة",
  icon: Dashboard,
  component: AddInstructor,
  layout: "/admin"
  },

  // LOGIN PAGE
  // {
  //  path: "/login",
  //  name: "Login",
  //  rtlName: "لوحة القيادة",
  //  icon: Dashboard,
  //  component: LoginPage,
  //  layout: "/admin"
  //  },

// STUDENT'S DASHBOARD
{
   path: "/Studentdashboard",
   name: "Dashboard",
   rtlName: "لوحة القيادة",
   icon: Dashboard,
   component: StudentDashboardPage,
   layout: "/admin"
   },

// STUDENT'S COURSESLIST
  {
    path: "/CoursesList",
    name: "Courses List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StudentCoursesList,
    layout: "/admin"

},

// STUDENT'S EXAM
{
  path: "/Exam",
  name: "Exam",
  rtlName: "قائمة الجدول",
  icon: "content_paste",
  component: StudentExam,
  layout: "/admin"

},


// STUDENT'S REPORTS
{
  path: "/Report",
  name: "Report",
  rtlName: "قائمة الجدول",
  icon: "content_paste",
  component: Reports,
  layout: "/admin"

},
 

//INSTRUCTOR'S DASHBOARD
    {
        path: "/Instructordashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: InstructorDashboardPage,
        layout: "/admin"
    },

    //INSTRUCTOR'S QB
  {
    path: "/QuestionBank",
    name: "Question Bank",
    rtlName: "بنك الأسئلة",
    icon: "content_paste",
    component: QuestionBank,
    layout: "/admin"
  },

    // ADD NEW QUESTION IN QB
    {
      path: "/AddQuestions",
      name: "Add Questions",
      rtlName: "بنك الأسئلة",
      icon: "content_paste",
      component: AddQuestionPage,
      layout: "/admin"
    },

    //INSTRUCTOR CREATE A NEW EXAM
  {
    path: "/createexam",
    name: "Create Exam",
    rtlName: "وضع اختبار",
    icon: "content_paste",
    component: CreateExam,
    layout: "/admin"
    },


];

export default dashboardRoutes;
