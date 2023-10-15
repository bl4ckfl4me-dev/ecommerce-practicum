import { Button, IconButton } from "@material-tailwind/react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useState, useCallback, useEffect } from "react";

export default function AuthPanel() {
  const [windowWidthSize, setWindowWidthSize] = useState(window.innerWidth);
  const handleWindowResize = useCallback(() => {
    setWindowWidthSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return windowWidthSize >= 450 ? (
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
