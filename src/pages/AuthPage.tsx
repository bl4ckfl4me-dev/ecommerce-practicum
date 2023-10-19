import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useState, useContext } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const AuthPage = observer(() => {
  const handleAuthRequest = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    isLoginRoute ? sentLoginRequest() : sentRegistryRequst();
  };
  const isLoginRoute = location.pathname === LOGIN_ROUTE;
  const { userStore } = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sentLoginRequest = () => {
    // fix it when backend server will be ready
    if (email === "root@root" && password == "root") {
      //userStore.setUser(userStore.getUser()); // add real user info from server token
      userStore.setIsAuth(true);
      navigate(HOME_ROUTE);
    }
  };
  const sentRegistryRequst = () => {
    if (confirmPassword === password) {
      // wait on backend confirmation
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex md:w-96 h-screen max-h-fit justify-center mx-auto px-5"
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
          {!isLoginRoute && (
            <Input
              size="lg"
              label="Имя"
              crossOrigin={undefined}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <Input
            size="lg"
            type="email"
            label="Email"
            crossOrigin={undefined}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            size="lg"
            label="Пароль"
            crossOrigin={undefined}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLoginRoute && (
            <Input
              type="password"
              size="lg"
              label="Подтвердите пароль"
              crossOrigin={undefined}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPassword !== password}
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
});

export default AuthPage;
