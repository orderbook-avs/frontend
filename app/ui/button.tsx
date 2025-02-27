"use client";

export const PrimaryButton = ({
  text,
  onClick,
  small = false,
}: {
  text: string;
  onClick: () => void;
  small?: boolean;
}) => {
  return (
    <button
      className={`z-20 relative bg-button-primary cursor-pointer text-black px-8 rounded-full font-inriaSans ${
        small ? "py-1.5" : "py-2"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const SecondaryButton = ({
  text,
  onClick,
  fullWidth = false,
  fullHeight = false,
  children,
}: {
  text: string;
  onClick: () => void;
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <button
      className={`z-20 relative flex justify-center items-center bg-button-secondary cursor-pointer text-black px-8 py-2 rounded-full font-inriaSans ${
        fullWidth ? "w-full" : ""
      } ${fullHeight ? "h-full" : ""}`}
      onClick={onClick}
    >
      {children ? children : text}
    </button>
  );
};
