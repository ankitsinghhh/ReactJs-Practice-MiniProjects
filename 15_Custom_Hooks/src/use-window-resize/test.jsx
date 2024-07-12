import useWindowResize from "./index";

export default function UseWindowResizeTest() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
}
