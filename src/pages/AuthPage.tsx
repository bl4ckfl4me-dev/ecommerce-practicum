import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useState } from "react";

const AuthPage = () => {
  const handleAuthRequest = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    isLoginRoute ? sentLoginRequest() : sentRegistryRequst();
  };
  const isLoginRoute = location.pathname === LOGIN_ROUTE;

  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formInputs = [
    {
      type: "email",
      label: "Email",
      value: email,
      onChange: (e: any) => setEmail(e.target.value),
      required: true,
      isLoginInput: false,
    },
    {
      type: "text",
      label: "Имя пользователя",
      value: username,
      onChange: (e: any) => setUsername(e.target.value),
      required: true,
      isLoginInput: true,
    },
    {
      type: "text",
      label: "ФИО",
      value: full_name,
      onChange: (e: any) => setFullName(e.target.value),
      required: true,
      isLoginInput: false,
    },
    {
      type: "password",
      label: "Пароль",
      value: password,
      onChange: (e: any) => setPassword(e.target.value),
      required: true,
      isLoginInput: true,
    },
    {
      type: "password",
      label: "Подтвердите пароль",
      value: confirmPassword,
      onChange: (e: any) => setConfirmPassword(e.target.value),
      required: true,
      isLoginInput: false,
      error: confirmPassword !== password,
    },
  ];

  //  TODO: replace api fetching into another place
  const sentLoginRequest = () => {
    fetch("http://localhost:8000/token", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: `grant_type=&username=${username}&password=${password}`,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const sentRegistryRequst = () => {
    if (confirmPassword === password) {
      fetch("http://localhost:8000/user/public/add", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          email,
          username,
          full_name,
          password,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex md:w-96 sm:w-2/3 h-screen max-h-fit justify-center mx-auto px-5"
    >
      <Typography variant="h4" color="blue-gray">
        {isLoginRoute ? "Авторизация" : "Регистрация"}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Введите данные для {isLoginRoute ? " входа" : " регистрации"}
      </Typography>
      <form
        className="mt-8 mb-2 w-auto max-w-screen-lg"
        onSubmit={handleAuthRequest}
      >
        <div className="mb-4 flex flex-col gap-6">
          {formInputs.map(
            (input) =>
              isLoginRoute === input.isLoginInput && (
                <Input size="lg" crossOrigin={undefined} {...input} />
              )
          )}
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              {isLoginRoute ? (
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  Сохранить пароль
                </a>
              ) : (
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  Я принимаю условиями использования
                </a>
              )}
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          required={!isLoginRoute}
          crossOrigin={undefined}
        />
        <Button className="mt-6" fullWidth type="submit">
          {isLoginRoute ? "Войти" : "Зарегистрироваться"}
        </Button>
        <Typography color="gray" className="mt-5 text-center font-normal">
          {isLoginRoute ? (
            <div className="my-1">
              <>
                Еще нет аккаунта?{" "}
                <a
                  href={REGISTRATION_ROUTE}
                  className="font-medium text-gray-900"
                >
                  Зарегистрироваться
                </a>
              </>
              <br />
              <div>
                Забыли пароль?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Сбросить
                </a>
              </div>
            </div>
          ) : (
            <div>
              Уже есть аккаунт?{" "}
              <a href={LOGIN_ROUTE} className="font-medium text-gray-900">
                Войти
              </a>
            </div>
          )}
        </Typography>
      </form>
    </Card>
  );
};

export default AuthPage;
