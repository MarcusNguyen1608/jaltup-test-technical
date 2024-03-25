import { DropZone } from "./components";
import FacebookIcon from "@/assets/facebook.svg";
import { Widget } from "./components/Widget";
import { useState } from "react";

function App() {
  const [boxValue, setBoxValue] = useState<string | null>(null);

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-12 flex-col">
      <div className="flex gap-12">
        <DropZone
          variant="small"
          isHasData={boxValue === "box1"}
          setValue={() => setBoxValue("box1")}
        />
        <DropZone
          variant="large"
          isHasData={boxValue === "box2"}
          setValue={() => setBoxValue("box2")}
        />
      </div>
      {boxValue === null && (
        <Widget
          contentButton="Follow 6.5k"
          icon={FacebookIcon}
          socialName="Facebook"
          images={[
            "https://picsum.photos/400/300",
            "https://picsum.photos/400/300",
            "https://picsum.photos/400/300",
            "https://picsum.photos/400/300",
          ]}
          name="box1"
        />
      )}
    </div>
  );
}

export default App;
