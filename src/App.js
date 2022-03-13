import CardList from "./components/CardList";

function App() {
  return (
    <div className="mt-8 p-8 h-[100vh]">
      <div className="max-w-3xl rounded-xl bg-dark border-2 border-secondary mx-auto mt-10 p-3 md:p-8">
        <h1 className="text-2xl pb-2 font-semibold text-primary ">
          Pixels Converter
        </h1>
        <p className="text-white break-words">
          Pixels Converter is a FREE online tool you can use to convert pixels
          into css units such as em, rem and pt. You can also convert pixels to
          other absolute measurements such as inch, centimeter and millimeter.
        </p>
      </div>
      <div className="mt-11 max-w-3xl mx-auto">
        <CardList />
      </div>
    </div>
  );
}

export default App;
