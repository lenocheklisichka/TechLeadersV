export type RadioProps = {
  name: string;
  value: string;
  label?: string;
  isDisabled?: boolean;
  className?: string;
  color?: "primary" | "secondary";

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}