import { DatePickerRange } from "./components/DatePickerRange";

function App() {
  return (
    <main className="flex space-y-10 flex-col py-10 px-10 items-center">
      <h1 className="text-xl font-bold text-gray-800">
        Add{" "}
        <a
          href="https://ui.shadcn.com/docs/installation/vite"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shadcn/ui
        </a>{" "}
        to Vite.
      </h1>
      <DatePickerRange />
    </main>
  );
}

export default App;
