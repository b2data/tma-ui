import {
  ImgHTMLAttributes,
  isValidElement,
  ReactNode,
  SyntheticEvent,
  useState,
} from "react";
import styles from "./Image.module.css";

import { classNames } from "@/helpers";

import { getBorderRadius } from "./utils";
import { Badge } from "../Badge";
import { Spinner } from "@/components/Spinner";

export interface ImageProps extends ImgHTMLAttributes<HTMLElement> {
  /** Specifies the size of the image, with a default of 40. Sizes are defined in pixels. */
  size?: 20 | 24 | 28 | 40 | 48 | 96 | string;
  /** An element (often an icon) displayed when the image fails to load or the `src` attribute is not provided. */
  fallbackIcon?: ReactNode;
  /** Optional children to render within the image component's container. */
  children?: ReactNode;
  /** Showing the page for image with presented content. */
  badgeContent?: string | number;
}

/**
 * Renders an image with optional fallback content. It supports custom sizing and will automatically
 * handle loading states and errors by optionally displaying a fallback icon. This component can also
 * include additional content, such as badges or overlays, as children.
 */
export const Image = ({
  size = 40,
  className,
  alt,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  style,
  fallbackIcon,
  badgeContent,
  children,
  onLoad,
  onError,
  ...restProps
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(Boolean(src));
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const hasSrc = src || srcSet?.length !== 0;
  const needShowFallbackIcon =
    (failed || !hasSrc) && isValidElement(fallbackIcon);

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    if (loaded) {
      return;
    }

    setIsLoading(false);
    setLoaded(true);
    setFailed(false);
    onLoad?.(event);
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setLoaded(false);
    setFailed(true);
    onError?.(event);
  };

  return (
    <div
      style={{
        width: size,
        minWidth: size,
        height: size,
        borderRadius: style?.borderRadius || getBorderRadius(size),
        ...style,
      }}
      className={classNames(
        styles.wrapper,
        loaded && styles["wrapper--loaded"],
        className,
      )}
      {...restProps}
    >
      {isLoading && +size >= 28 && (
        <Spinner
          size={+size <= 40 ? "small" : +size <= 80 ? "medium" : "large"}
        />
      )}
      {hasSrc && (
        <img
          alt={alt}
          className={styles.image}
          crossOrigin={crossOrigin}
          decoding={decoding}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          useMap={useMap}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      {needShowFallbackIcon && (
        <div className={styles.fallback}>{fallbackIcon}</div>
      )}
      {badgeContent && <Badge className={styles.badge}>{badgeContent}</Badge>}
      {children}
    </div>
  );
};
