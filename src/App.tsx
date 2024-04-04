import { AttendeeList } from "./components/AttendeeList";
import { Header } from "./components/Header";

export const App = () => {
  console.log(1 + 1);

  return (
    <div className="container mx-auto py-5 flex flex-col gap-5">
      <Header />

      <AttendeeList />
    </div>
  );
};
