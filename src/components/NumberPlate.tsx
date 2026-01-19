import { formatNumberPlate } from "../utils/utils";

type NumberPlateProps = {
  vrm?: string | undefined;
  motion?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const NumberPlate = ({ size, motion, vrm }: NumberPlateProps) => {
  let options = {
    plateWidth: "w-[14rem]",
    textSize: "text-2xl",
    borderWidth: "border-6",
  };

  switch (size) {
    case "xs":
      options = {
        plateWidth: "w-[8rem]",
        textSize: "text-md",
        borderWidth: "border-4",
      };
      break;
    case "sm":
      options = {
        plateWidth: "w-[10rem]",
        textSize: "text-lg",
        borderWidth: "border-4",
      };
      break;
    case "lg":
      options = {
        plateWidth: "w-[16rem]",
        textSize: "text-3xl",
        borderWidth: "border-6",
      };
      break;
    case "xl":
      options = {
        plateWidth: "w-[18rem]",
        textSize: "text-4xl",
        borderWidth: "border-8",
      };

      break;
  }
  return (
    <div
      className={`relative ${options.plateWidth} ${options.borderWidth} border-black rounded-xl text-nowrap
        text-black px-6 py-2
        ${motion ? "bg-yellow-400" : "bg-white"}`}
    >
      <div>
        <div className="absolute inset-y-0 left-0 bg-blue-600 w-8 flex flex-col"></div>
        <p className={`pl-4 font-extrabold ${options.textSize} text-right`}>
          {vrm && formatNumberPlate(vrm)}
        </p>
      </div>
    </div>
  );
};

export default NumberPlate;
