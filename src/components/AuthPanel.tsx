import { Button } from "@material-tailwind/react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export default function AuthPanel() {
  return (
    <div className="flex w-max gap-2">
      <a href={LOGIN_ROUTE}>
        <Button variant="filled" size="sm">
          Войти
        </Button>
      </a>
      <a href={REGISTRATION_ROUTE}>
        <Button variant="outlined" size="sm">
          Зарегистрироваться
        </Button>
      </a>
    </div>
  );
}
