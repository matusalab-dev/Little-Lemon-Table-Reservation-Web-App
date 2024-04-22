const LazyLoadedImage = ({
  src,
  alt,
  className,
  height,
  width,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default LazyLoadedImage;
