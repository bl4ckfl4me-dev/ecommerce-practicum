import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { useResize } from "../hooks/useResize";

export default function UserPage() {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const { isLargeDevice } = useResize();

  return (
    <div
      className={
        isLargeDevice
          ? "h-screen flex flex-row my-5"
          : "h-screen flex flex-col -mt-7 items-center"
      }
    >
      <Card
        className={
          isLargeDevice
            ? "lg:w-96 w-60"
            : "w-full h-44 my-6 flex-row items-center"
        }
      >
        <CardHeader
          floated={false}
          className={isLargeDevice ? "-mt-0.5" : " w-32"}
        >
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="avatar"
          />
        </CardHeader>
        <CardBody>
          <Typography>FirstName SecondName</Typography>
          <Typography>Student</Typography>
        </CardBody>
      </Card>
      <Card className={isLargeDevice ? "w-full mr-5" : "w-full"}>
        <Tabs value="dashboard">
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {isLargeDevice && label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Card>
    </div>
  );
}
