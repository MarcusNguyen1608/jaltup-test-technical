import { useDrop } from "react-dnd";
import { Widget } from "./Widget";
import FacebookIcon from "@/assets/facebook.svg";
import { useState } from "react";

interface DropZoneProps {
  children?: React.ReactNode;
  isHasData?: boolean;
  setValue: () => void;
  variant: "small" | "large";
}

export const ItemTypes = {
  BOX: "box",
};

export function DropZone({ isHasData, setValue, variant }: DropZoneProps) {
  const [boxName, setBoxName] = useState<string | null>(null);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item: { name: string }) => {
      setBoxName(item.name);
      setValue();
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
      {isHasData && boxName && (
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
