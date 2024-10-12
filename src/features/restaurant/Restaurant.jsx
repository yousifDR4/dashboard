import { Outlet } from "react-router-dom";
import EditResturantForm from "./components/EditResturantForm";

export default function Restaurant() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
