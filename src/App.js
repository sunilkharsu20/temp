import "./App.css";


// Components
import Navbar from "./components/navBar/Navbar";
import AddNewMarks from "./components/addMarks";
import ModifyOldMarks from "./components/modifyMarks";
import GetOldMarks from "./components/getMarks";
import HomePage from "./components/homePage/homePage";
import Footer from './components/footer/footer';
import AdminLoginPage from "./components/AdminLoginPage/AdminLoginPage";
import StudentLoginPage from "./components/StudentLoginPage/StudentLoginPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import StudentCategoryList from "./components/StudentCategoryList/StudentCategoryList";
import StudentListNonSorted from "./components/StudentCategoryListNonSorted/StudentCategoryListNonSorted";

function App() {
  return (
    <Router>
      <Navbar title="GeturResult.com" />
<Routes>
  {/* Main Paths */}
  <Route path="/" element={<HomePage />} />
  <Route path="/admin_login_page" element={<AdminLoginPage />} />
  <Route path="/student_login_page" element={<StudentLoginPage />} />

  {/*  Admin All  */}
  <Route path="/adminDashboard" element={<AdminDashboard />} />
  <Route path="/addNewMarks" element={<AddNewMarks />} />
  <Route path="/get_student_list_admin" element={<StudentCategoryList />} />
  <Route path="/get_student_list_non_sorted_admin" element={<StudentListNonSorted />} />
  <Route path="/ModilfyOldMarks" element={<ModifyOldMarks />} />
  <Route path="/GetOldMarks" element={<GetOldMarks />} />

  <Route path="/add_student_admin" element={<AddStudent />} />
  {/* Default Page */}
  <Route path="*" element={<PageNotFound />} />
      
      
      
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
