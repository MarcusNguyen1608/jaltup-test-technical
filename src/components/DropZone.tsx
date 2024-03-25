import { useDrop } from "react-dnd";
import { Widget } from "./Widget";
import FacebookIcon from "@/assets/facebook.svg";

interface DropZoneProps {
  children?: React.ReactNode;
  isHasData?: boolean;
  setBoxName: (boxName:string) => void;
  variant: "small" | "large";
  boxName:string
  boxValue: string | null;
}

export const ItemTypes = {
  BOX: "box",
};

export function DropZone({ boxName, setBoxName, variant, boxValue }: DropZoneProps) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => {
      setBoxName(boxName);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`bg-background p-10 rounded-3xl hover: border-dashed  min-h-[288px] ${variant==='small'?'min-w-[288px]': 'min-w-[546px]'}`}
    >
      {boxName===boxValue && (
        <Widget
          variant={variant}
          contentButton="Follow 6.5k"
          icon={FacebookIcon}
          socialName="Facebook"
          images={[
            "https://picsum.photos/400/300",
            "https://picsum.photos/400/300",
            "https://picsum.photos/400/300",
            "https://picsum.photos/400/300",
          ]}
          name={boxName}
        />
      )}
    </div>
  );
}
