import Button from "react-bootstrap/Button";

export type MyButtonProps = {
  variant: "primary" | "secondary" | "success" | "danger";
  isOutline: boolean;
  size: "lg" | "sm" | undefined;
  isActive: boolean;
  disabled: boolean;
  label: string;
};

const MyButton: React.FC<MyButtonProps> = ({
  variant,
  isOutline,
  size,
  isActive,
  disabled,
  label,
}) => {
  const determinedVariant = isOutline ? `outline-${variant}` : variant;
  return (
    <Button
      disabled={disabled}
      active={isActive}
      size={size}
      variant={determinedVariant}
    >
      {label}
    </Button>
  );
};

export default MyButton;
