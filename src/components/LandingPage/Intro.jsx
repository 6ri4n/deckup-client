import Button from "./Button";

function Intro() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-4xl">Flashcard Game</h1>
        <p className="my-6 text-sm w-auto lg:text-lg lg:my-8 xl:max-w-3xl xl:mr-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga libero
          porro, ullam voluptatem accusantium totam reprehenderit ad illo quod
          nesciunt voluptate adipisci unde autem maiores consequuntur nisi
          beatae tenetur cumque. Laborum a quos eaque numquam, sit enim eius
          culpa similique deleniti, aliquid alias repellat dolore fuga provident
          error. Nemo molestiae corrupti possimus deserunt nam sapiente ipsam
          repellendus, explicabo quis facere! lorem
        </p>
        <div className="my-4 flex flex-1 items-end">
          <Button path={"login"}>Login</Button>
          <Button path={"signup"}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
