import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useState } from "react";

export default function AuthPage() {
  const isLoginRoute = location.pathname === LOGIN_ROUTE;
  const [passwd, setPasswd] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const confirmIsPasswd = passwd !== confirmPass;

  function logIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const responseBody: { [key: string]: unknown } = {};
    formData.forEach(
      (value, property: string) => (responseBody[property] = value)
    );
    console.log(responseBody);

    // отправляем запрос, по завершении которого мб запоминаем в наш контекст и кидаем на главную для авторизованных, 
    // или мб прокидываем что-то (ящик уже занят, имя (если должно быть уникальным) неуникально и т.д.)
  }

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex mt-6 w-96 justify-center mx-auto"
    >
      <Typography variant="h4" color="blue-gray">
        {isLoginRoute ? "Авторизация" : "Регистрация"}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Введите данные для {isLoginRoute ? " входа" : " регистрации"}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={logIn}>
        <div className="mb-4 flex flex-col gap-6">
          {!isLoginRoute && (
            <Input size="lg" label="Имя" name="name" crossOrigin />
          )}
          <Input size="lg" label="Email" name="email" crossOrigin />
          <Input
            value={passwd}
            type="password"
            name="password"
            size="lg"
            label="Пароль"
            crossOrigin
            onChange={(e) => setPasswd(e.target.value)}
          />
          {!isLoginRoute && (
            <div>
              <Input
                error={confirmIsPasswd}
                type="password"
                size="lg"
                label="Подтвердите пароль"
                crossOrigin
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              {confirmIsPasswd && "Пароли должны совпадать"}
            </div>
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
          crossOrigin
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
}
