import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Carousel } from "./components/Carousel";
import { LibraryServices } from "./components/LibraryServices";
import { Heros } from "./components/Hero";

function App() {
  return (
    <div>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </div>
  );
}

export default App;
