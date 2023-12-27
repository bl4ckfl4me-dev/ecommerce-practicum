import React, { useState } from "react";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const navListMenuItems = [
  {
    title: "Курсы и программы",
    description:
      "Выберите свой путь обучения: наши курсы и программы” Описание: “Ознакомьтесь с нашими разнообразными курсами и программами, чтобы найти то, что подходит именно вам. От базовых уровней до продвинутых специализаций - есть что-то для каждого.",
  },
  {
    title: "Учителя и отзывы",
    description:
      "Оцените опыт наших учителей и успехи выпускников” Описание: “Познакомьтесь с учителями нашей онлайн-школы и узнайте, почему они считаются экспертами в своих областях. Прочтите отзывы от наших довольных выпускников, чтобы убедиться в качестве обучения.",
  },
  {
    title: "Поддержка и контакты",
    description:
      "Получите помощь и поддержку на своем пути обучения” Описание: “Не стесняйтесь обращаться к нашей дружелюбной и опытной команде поддержки. Мы всегда готовы помочь вам в любых вопросах, связанных с обучением. Свяжитесь с нами по указанным контактам.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Навигация{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Навигация{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>
  );
}

const navListItems = [
  {
    label: "Профиль",
    icon: UserCircleIcon,
  },
  {
    label: "Учебный план",
    icon: CubeTransparentIcon,
  },
  {
    label: "О Нас",
    icon: CodeBracketSquareIcon,
  },
];

export default function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
