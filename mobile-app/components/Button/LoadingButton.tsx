import React, { forwardRef } from "react";
import { Button, ButtonProps } from "./Button";

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export const LoadingButton = forwardRef<any, LoadingButtonProps>(
  ({ isLoading, ...props }: LoadingButtonProps, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        isDisabled={props.isDisabled || isLoading}
        label={isLoading ? "Loading..." : props.label}
      />
    );
  }
);
