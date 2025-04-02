export const SvgIcon = ({
  path,
  size = 24,
  className,
}: {
  path: string;
  size?: number;
  className?: string;
}) => {
  return (
    <div
      className={`svg-icon ${className}`}
      style={{
        WebkitMaskImage: `url("${path}")`,
        maskImage: `url("${path}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        width: size,
        height: size,
      }}
    />
  );
};
