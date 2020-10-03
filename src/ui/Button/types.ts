export type ButtonProps = {
  fullWidth?: boolean;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "inline";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit";
  className?: string;

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
