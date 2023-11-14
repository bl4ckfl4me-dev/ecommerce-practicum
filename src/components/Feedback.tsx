import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useResize } from "../hooks";

export default function Feedback() {
  const { isLargeDevice } = useResize();

  return (
    <div
      className={`flex ${
        isLargeDevice ? "mx-16" : "flex-col-reverse mx-8"
      } justify-around my-10`}
    >
      <Card
        className={`w-full gap-5 flex ${
          isLargeDevice ? "flex-row" : "flex-col-reverse"
        }`}
      >
        <CardHeader
          floated={false}
          className={`w-full mx-0 my-0 ${isLargeDevice && "rounded-r-none"}`}
        >
          <YMaps>
            <Map
              width="100%"
              height="430px"
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            />
          </YMaps>
        </CardHeader>
        <CardBody className="flex flex-col max-w-md gap-y-4 pt-0">
          <Typography variant="h6">
            Оставьте заявку на получение консультации:
          </Typography>
          <form className="flex flex-col gap-y-2">
            <Input
              size="lg"
              type="text"
              label="Имя"
              crossOrigin={undefined}
              required
              className="flex flex-row"
            />
            <Input
              size="lg"
              type="tel"
              label="Телефон"
              crossOrigin={undefined}
              className="flex flex-row"
              required
            />
            <Input
              size="lg"
              type="email"
              label="Email"
              crossOrigin={undefined}
              required
              className="flex flex-row"
            />
            <Textarea label="Комментарий" />
            <Button>Отправить</Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
