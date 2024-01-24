import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchTokens, fetchUser } from "../store/userSlice";
import { redirect } from "react-router-dom";

const AuthPage = () => {
  const handleAuthRequest: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    isLoginRoute ? loginHandler(e) : sentRegistryRequst(e);
  };
  const [err, setErr] = useState("");
  const isLoginRoute = location.pathname === LOGIN_ROUTE;
  const dispatch = useAppDispatch();
  const { accessToken, refreshToken } = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(fetchUser({ username, refreshToken, accessToken }));
  //   redirect(HOME_ROUTE);
  // }, [accessToken, dispatch, refreshToken, username]);

  const formInputs = [
    {
      type: "email",
      name: "email",
      label: "Email",
      required: true,
      isLoginInput: true,
    },
    {
      type: "text",
      label: "Имя пользователя",
      name: "user",
      required: true,
      isLoginInput: false,
    },
    {
      type: "text",
      label: "ФИО",
      name: "name",
      required: true,
      isLoginInput: false,
    },
    {
      type: "password",
      label: "Пароль",
      name: "password",
      required: true,
      isLoginInput: true,
    },
  ];

  const loginHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (username && password) {
      dispatch(fetchTokens({ username, password }))
        .then(() => {
          setErr("");
          return dispatch(fetchUser({ username, refreshToken, accessToken }));
        })
        .then(() => {
          redirect(HOME_ROUTE);
        })
        .catch(() => {
          setErr("Нет такого пользователя");
        });
    }
  };
  const sentRegistryRequst: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPass = formData.get("confirmPass")?.toString();
    if (confirmPass !== password) {
      setErr("Пароли не совпадают");
    }
    if (username && password) {
      dispatch(fetchTokens({ username, password }))
        .then(() => {
          setErr("");
          return dispatch(fetchUser({ username, refreshToken, accessToken }));
        })
        .then(() => {
          redirect(HOME_ROUTE);
        })
        .catch(() => {
          setErr("Невозможно зарегистрироваться - пользователь уже существует");
        });
    }
  };

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
          {formInputs.map((input) =>
            isLoginRoute ? (
              input.isLoginInput && (
                <Input
                  key={input.label}
                  name={input.name}
                  size="lg"
                  crossOrigin={undefined}
                  type={input.type}
                  label={input.label}
                  required={input.required}
                />
              )
            ) : (
              <Input
                key={input.label}
                name={input.name}
                size="lg"
                crossOrigin={undefined}
                type={input.type}
                label={input.label}
                required={input.required}
              />
            )
          )}
          {!isLoginRoute && (
            <Input
              size="lg"
              crossOrigin={undefined}
              type={"password"}
              label={"Подтвердите пароль"}
              required={true}
              error={err !== ""}
            />
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
        {err !== "" && <Typography>{err}</Typography>}
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
