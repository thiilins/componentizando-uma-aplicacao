import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";
import { MainProvider } from "./hooks/useMain";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <MainProvider>
        <SideBar />
        <Content />
      </MainProvider>
    </div>
  );
}
