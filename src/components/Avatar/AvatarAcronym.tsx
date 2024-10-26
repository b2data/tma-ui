import { ImageProps } from "../Image";
import { Typography, TypographyProps } from "../Typography";

export interface AvatarAcronymProps extends Omit<TypographyProps, "size"> {
  size: ImageProps["size"];
}

export const AvatarAcronym = ({ size, ...restProps }: AvatarAcronymProps) => {
  if (!size || typeof size === "string") {
    return null;
  }

  if (size <= 28) {
    return (
      <Typography
        variant="caption"
        small={size <= 24}
        weight="light"
        caps
        {...restProps}
      />
    );
  }

  if (size === 40) {
    return <Typography variant="headline" caps {...restProps} />;
  }

  if (size === 48) {
    return <Typography variant="h4" weight="light" caps {...restProps} />;
  }

  return <Typography variant="h1" weight="light" caps {...restProps} />;
};
