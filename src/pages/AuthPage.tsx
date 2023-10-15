import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export default function AuthPage() {
  const isLoginRoute = location.pathname === LOGIN_ROUTE;

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
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          {!isLoginRoute && (
            <Input size="lg" label="Имя" crossOrigin={undefined} />
          )}
          <Input size="lg" label="Email" crossOrigin={undefined} />
          <Input
            type="password"
            size="lg"
            label="Пароль"
            crossOrigin={undefined}
          />
          {!isLoginRoute && (
            <Input
              type="password"
              size="lg"
              label="Подтвердите пароль"
              crossOrigin={undefined}
            />
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
          crossOrigin={undefined}
        />
        <Button className="mt-6" fullWidth>
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
