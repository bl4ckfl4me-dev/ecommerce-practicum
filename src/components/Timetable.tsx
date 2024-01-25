import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Преподаватель", "Предмет", "Время"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Математика",
    date: "09:00",
  },
  {
    name: "Alexa Liras",
    job: "Программирование",
    date: "10:40",
  },
  {
    name: "Laurent Perrier",
    job: "Экономика",
    date: "11:50",
  },
  {
    name: "Michael Levi",
    job: "Программирование",
    date: "13:00",
  },
  {
    name: "Richard Gran",
    job: "Математика",
    date: "15:00",
  },
];

export function Timetable() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center w-6/12 m-2">
        <Typography className="">Расписание сегодня</Typography>
        <Card className="h-full w-full overflow-auto m-2">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
      <div className="flex flex-col justify-center items-center w-6/12 m-2">
        <Typography className="">Расписание на неделю</Typography>
        <Card className="h-full w-full overflow-auto m-2">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
