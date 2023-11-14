import { Card, Typography } from "@material-tailwind/react";
import { useResize } from "../hooks";

export default function Description() {
  const { isLargeDevice } = useResize();

  return (
    <div className={isLargeDevice ? "mx-16" : "mx-8"}>
      <div
        className={`flex ${
          isLargeDevice ? "flex-row" : "flex-wrap"
        } justify-around gap-x-5 gap-y-5 mt-10`}
      >
        <Card className="h-72 md:w-1/3 w-full">
          <Typography>card 1</Typography>
        </Card>
        <Card className="h-72 md:w-2/3 w-full">
          <Typography>card 2</Typography>
        </Card>
      </div>
      <div
        className={`flex ${
          isLargeDevice ? "flex-row" : "flex-wrap"
        } justify-around gap-x-5 gap-y-5 mb-10 mt-5`}
      >
        <Card className="h-72 md:w-2/3 w-full">
          <Typography>card 3</Typography>
        </Card>
        <Card className="h-72 md:w-1/3 w-full">
          <Typography>card 4</Typography>
        </Card>
      </div>
    </div>
  );
}
