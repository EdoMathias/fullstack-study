type Image = {
  url: string;
  width: number;
  height: number;
};

export default function Image({ url, width, height }: Image) {
  return <img src={url} width={width} height={height}></img>;
}
