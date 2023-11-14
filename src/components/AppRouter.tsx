import { Routes, Route, Navigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";
import { authRoutes, publicRoutes } from "../utils/routes";
import { useAppSelector } from "../hooks";

const AppRouter = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Routes>
      {user.isLoggedIn &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
