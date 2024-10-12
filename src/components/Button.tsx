type buttonProps = {
  // ? means optional property
  buttonType?: "primary" | "secondary";
  // Content inside the button (text, JSX, etc.)
  children: React.ReactNode;
};

// Destructuring in the parameter-level
export default function Button({ buttonType, children }: buttonProps) {
  return (
    <button
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}
