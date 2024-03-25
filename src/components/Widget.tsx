import { Button, Card } from ".";
import { useDrag } from "react-dnd";

type WidgetVariants = "small" | "large";

export interface BoxProps {
  name: string;
}

interface WidgetProps extends BoxProps {
  icon: string;
  socialName: string;
  contentButton: string;
  images: string[];
  variant?: WidgetVariants;
}




export const ItemTypes = {
  BOX: "box",
};


export function Widget({
  icon,
  socialName,
  contentButton,
  images,
  name,
  variant
}: WidgetProps) {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <Card ref={drag} className={`flex justify-between h-52 min-w-52 gap-20`}>
      <div className="flex flex-col items-start ">
        <div className="flex flex-col gap-2">
          <img height={50} width={50} src={icon} />
          <p className="font-bold">{socialName}</p>
        </div>
        <Button className="mt-auto">{contentButton}</Button>
      </div>
      {variant === "large" && (
        <div className="grid grid-cols-2 gap-4 w-52">
          {images.map((image) => (
            <img
              key={image}
              className="w-25 h-18 object-cover overflow-hidden rounded-md"
              src={image}
            />
          ))}
        </div>
      )}
    </Card>
  );
}
