import "./App.css";

import RenderBlock from "render-block-v2";

function App() {
  return (
    <div className=" p-2 sm:p-10 min-h-screen min-w-screen bg-cyan-900 text-cyan-200">
      {/* <h1 className="  text-center text-3xl">Creating npm packages</h1> */}
      <div className=" flex flex-wrap justify-center m-14 ">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <RenderBlock
              key={index}
              imgSrc="https://assets-prd.ignimgs.com/2022/04/20/ironman-1650492870282.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
              height="15rem"
              width="15rem"
            />
          ))}
      </div>
      <div className=" flex flex-wrap justify-center m-14 ">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <RenderBlock
              key={index}
              imgSrc="https://res.cloudinary.com/dlvq8n2ca/image/upload/v1694854527/kckqxyoamncconejcjxx.png"
              height="15rem"
              width="15rem"
            />
          ))}
      </div>
    </div>
  );
}

export default App;
