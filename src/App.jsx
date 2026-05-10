import ContentPage from "./components/ContnetPage";
import { CoverPage } from "./components/CoverPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TableOfContent } from "./components/TableContent";

const App = () => {
  return (
    <div className="min-h-screen bg-[#7c4927] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="book-container">
          <Header />
          <CoverPage />
          <TableOfContent />
          <ContentPage />
        </div>
      </div>
    </div>
  );
};
export default App;
