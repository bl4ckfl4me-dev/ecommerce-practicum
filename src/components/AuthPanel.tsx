import { Button, IconButton } from "@material-tailwind/react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useResize } from "../hooks/useResize";

export default function AuthPanel() {
  const { isLargeDevice } = useResize();

  return isLargeDevice ? (
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
  ) : (
    <a href={LOGIN_ROUTE}>
      <IconButton variant="outlined" className="rounded-full">
        <i className="fa fa-2x fa-user-o" aria-hidden="true" />
      </IconButton>
    </a>
  );
}
