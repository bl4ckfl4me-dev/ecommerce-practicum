import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { USER_ROUTE } from "../utils/consts";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { useResize } from "../hooks/useResize";

const profileMenuItems = [
  {
    label: "Мой профиль",
    icon: UserCircleIcon,
    link: USER_ROUTE,
  },
  {
    label: "Настройки",
    icon: Cog6ToothIcon,
    link: "#",
  },
  {
    label: "Входящие",
    icon: InboxArrowDownIcon,
    link: "#",
  },
  {
    label: "Помощь",
    icon: LifebuoyIcon,
    link: "#",
  },
  {
    label: "Выйти",
    icon: PowerIcon,
    link: "#",
  },
];

const ProfileMenu = observer(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userStore } = useContext(Context);
  const { isLargeDevice } = useResize();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size={isLargeDevice ? "md" : "sm"}
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <a href={link + "/" + userStore.getUser().id}>
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </a>
          );
        })}
      </MenuList>
    </Menu>
  );
});

export default ProfileMenu;
