function PixelArt() {
  const pixelSize = 10; // 각 픽셀의 크기

  const fill = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  const numRows = fill.length;
  const numCols = fill[0].length;
  return (
    <svg
      width={numCols * pixelSize}
      height={numRows * pixelSize}
      style={{ backgroundColor: "grey" }}
    >
      {fill.map((items, rowIndex) =>
        items.map((item, colIndex) => (
          <rect
            key={`${rowIndex}-${colIndex}`}
            x={colIndex * pixelSize}
            y={rowIndex * pixelSize}
            width={item * pixelSize}
            height={item * pixelSize}
            fill="black"
          />
        ))
      )}
    </svg>
  );
}

export default PixelArt;
