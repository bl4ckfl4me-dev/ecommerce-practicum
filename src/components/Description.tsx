import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useResize } from "../hooks";
import AuthPanel from "./AuthPanel";

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
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              1
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              nibh justo. Ut vulputate pretium lorem, sed tempus est. Donec
              pretium dolor sapien, ut dapibus enim egestas sit amet. Ut a dui
              ullamcorper, viverra mi sit amet, ornare orci. Proin nisi ex,
              congue nec est quis, commodo euismod nibh. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <AuthPanel />
          </CardFooter>
        </Card>
        <Card className="h-72 md:w-2/3 w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              2
            </Typography>
            <Typography>
              Quisque fringilla orci vitae diam maximus eleifend. Nulla
              vulputate pretium lectus in porttitor. Phasellus posuere neque
              eget iaculis scelerisque. Cras posuere convallis enim, et aliquam
              sem egestas vitae. Cras ultrices consequat risus, nec eleifend
              lacus aliquet ac. Nunc blandit mollis risus vitae porttitor. Proin
              consectetur scelerisque enim in condimentum. Phasellus sed nisl
              porttitor, viverra orci sit amet, mattis mauris. Sed volutpat
              varius tortor, pellentesque auctor metus bibendum quis. Morbi
              gravida ligula vitae eros pellentesque pulvinar. Sed interdum
              suscipit nisi ut congue. Sed et mi non ex mollis volutpat. Sed eu
              ligula mattis, facilisis felis a, tempus eros. Nullam vitae
              facilisis quam, at malesuada sapien.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <AuthPanel />
          </CardFooter>
        </Card>
      </div>
      <div
        className={`flex ${
          isLargeDevice ? "flex-row" : "flex-wrap"
        } justify-around gap-x-5 gap-y-5 mb-10 mt-5`}
      >
        <Card className="h-72 md:w-2/3 w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              3
            </Typography>
            <Typography>
              Vivamus bibendum et tellus ut sollicitudin. Nunc at faucibus enim,
              in placerat nibh. Mauris quis enim vitae ligula dignissim eleifend
              ut ut dolor. Sed dapibus eros at sem ultrices, et tristique sapien
              fringilla. Sed imperdiet neque ex, mollis sollicitudin enim
              dignissim id. Ut id lorem id erat mollis bibendum. Donec et
              iaculis lectus, id posuere arcu. Fusce a metus nisl. Suspendisse
              bibendum enim scelerisque est lobortis, id dignissim ante
              efficitur. Donec non mi tellus. Etiam accumsan sed eros a
              molestie. Curabitur et eros ac ante vestibulum suscipit tempus nec
              purus. Fusce pulvinar lectus et sapien pretium, sed rutrum libero
              vehicula. Vivamus condimentum posuere elit, nec dapibus magna
              commodo nec. Quisque pellentesque turpis eu fringilla aliquet.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <AuthPanel />
          </CardFooter>
        </Card>
        <Card className="h-72 md:w-1/3 w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              4
            </Typography>
            <Typography>
              Nunc eu consequat nisi. Cras erat sapien, sagittis in sapien quis,
              vulputate tincidunt nunc. Suspendisse ut rutrum odio. Integer
              rutrum eget purus posuere venenatis. Aliquam sit amet facilisis
              felis, non auctor dolor. Integer nec lorem sit amet est imperdiet
              dignissim. Vivamus malesuada iaculis nisi ut cursus.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <AuthPanel />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
