type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  label,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <Button
    type={type}
    onClick={onClick}
    className="bg-green=600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      {label}
    </Button>
  );
}

