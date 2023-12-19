import "./App.css";
import AdminRoutes from "./router/admin";
import DoctorRouter from "./router/doctor";
import UserRoutes from "./router/user";

function App() {
  return (
    <div>
      <UserRoutes />
      <AdminRoutes />
      <DoctorRouter />
    </div>
  );
}

export default App;
