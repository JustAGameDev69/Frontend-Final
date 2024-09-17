import { Spinner } from "@material-tailwind/react";

export function Loading({ className }) {
  return (
    <Spinner
      color="red"
      className={`h-12 w-12 mr-auto ml-auto ${className ? className : ""}`}
    />
  );
}
