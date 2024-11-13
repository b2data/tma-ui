import { ImageProps } from "../Image";
import { Typography, TypographyProps } from "../Typography";

export interface AvatarAcronymProps extends Omit<TypographyProps, "size"> {
  size: ImageProps["size"];
}

export const AvatarAcronym = ({ size, ...restProps }: AvatarAcronymProps) => {
  if (!size) {
    return null;
  }
  const currentSize =
    typeof size === "string" ? parseInt(size.replace(/[^0-9]/g, ""), 10) : size;

  if (currentSize <= 28) {
    return (
      <Typography
        variant="caption"
        small={currentSize <= 24}
        weight="light"
        caps
        {...restProps}
      />
    );
  }

  if (currentSize < 40) {
    return <Typography variant="headline" caps {...restProps} />;
  }

  if (currentSize < 48) {
    return <Typography variant="h4" weight="light" caps {...restProps} />;
  }

  return <Typography variant="h1" weight="light" caps {...restProps} />;
};
