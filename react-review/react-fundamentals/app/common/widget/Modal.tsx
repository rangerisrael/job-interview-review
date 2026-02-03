import { cn } from "@/app/utils/cn";
import React from "react";

type PopupModalProps = {
  children: React.ReactNode;
  classes?: string;
  onClose: () => void;
  position?: `items-${"start" | "end" | "center"}`;
};

const PopupModal: React.FC<PopupModalProps> = ({
  children,
  classes,
  position = "items-center",
  onClose,
}) => {
  return (
    <div
      className={cn(
        `fixed overflow-hidden top-0 left-0 right-0 bottom-0 w-screen h-screen z-0 flex justify-center ${position}`,
      )}
    >
      {/* content */}

      <div
        className={cn(
          `bg-white w-50 h-50 relative z-50 flex flex-col ${classes}`,
        )}
      >
        <div className="self-end m-3 text-zinc-500 font-bold rounded-full bg-slate-200 w-5 h-5">
          <span
            className="flex justify-center cursor-pointer"
            onClick={onClose}
          >
            {" "}
            &times;
          </span>
        </div>
        {children}
      </div>
      {/*  */}

      {/* overlay */}
      <div
        className="absolute bg-black/50 top-0 right-0 left-0 bottom-0 z-40"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default PopupModal;
