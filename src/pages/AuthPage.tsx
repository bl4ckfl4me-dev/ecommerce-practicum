import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchTokens, fetchUser } from "../store/userSlice";
import { redirect } from "react-router-dom";

const AuthPage = () => {
  const handleAuthRequest = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    isLoginRoute ? loginHandler() : sentRegistryRequst();
  };
  const isLoginRoute = location.pathname === LOGIN_ROUTE;
  const dispatch = useAppDispatch();
  const { user, accessToken, refreshToken } = useAppSelector(
    (state) => state.user
  );
  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    dispatch(fetchUser({ username, refreshToken, accessToken }));
    console.log(user);
    redirect(HOME_ROUTE);
  }, [accessToken]);

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

  const loginHandler = () => {
    dispatch(fetchTokens({ username, password }));
  };
  const sentRegistryRequst = () => {};

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex md:w-96 sm:w-2/3 h-screen max-h-fit justify-center mx-auto px-5"
    >
      <Typography as="span" variant="h4" color="blue-gray">
        {isLoginRoute ? "Авторизация" : "Регистрация"}
      </Typography>
      <Typography as="span" color="gray" className="mt-1 font-normal">
        Введите данные для {isLoginRoute ? " входа" : " регистрации"}
      </Typography>
      <form
        className="mt-8 mb-2 w-auto max-w-screen-lg"
        onSubmit={handleAuthRequest}
      >
        <div className="mb-4 flex flex-col gap-6">
          {formInputs.map(
            (input) =>
              input.isLoginInput && (
                <Input
                  key={input.label}
                  size="lg"
                  crossOrigin={undefined}
                  type={input.type}
                  label={input.label}
                  value={input.value}
                  onChange={input.onChange}
                  required={input.required}
                  error={input.error}
                />
              )
          )}
        </div>
        <Checkbox
          label={
            <Typography
              as="span"
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
        <Typography
          as="span"
          color="gray"
          className="mt-5 text-center font-normal"
        >
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
