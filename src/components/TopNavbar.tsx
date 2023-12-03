import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import ProfileMenu from "./ProfileMenu";
import NavList from "./NavList";
import React, { useContext } from "react";
import AuthPanel from "./AuthPanel";
import { observer } from "mobx-react-lite";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { UserContext } from "./UserContext";

const TopNavbar = observer(() => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const user = useContext(UserContext).user;
  const isLoginRoute =
    location.pathname === LOGIN_ROUTE ||
    location.pathname === REGISTRATION_ROUTE;

  return (
    <Navbar className="mx-auto max-w-full p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex justify-between items-center text-blue-gray-900">
        <Typography
          as="a"
          href={HOME_ROUTE}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Online School
        </Typography>
        {user.isAuth && (
          <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>
        )}

        {user.isAuth ? (
          <>
            <IconButton
              size="sm"
              color="blue-gray"
              variant="text"
              onClick={() => setIsNavOpen((cur) => !cur)}
              className="ml-auto mr-2 lg:hidden"
            >
              <Bars2Icon className="h-6 w-6" />
            </IconButton>
            <ProfileMenu />
          </>
        ) : (
          !isLoginRoute && <AuthPanel />
        )}
      </div>
      <Collapse open={isNavOpen}>
        <NavList />
      </Collapse>
    </Navbar>
  );
});

export default TopNavbar;
