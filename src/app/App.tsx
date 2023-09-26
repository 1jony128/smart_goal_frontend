import { FC } from "react";
import OrgTaskPage from "@/pages/OrgTaskPage/ui/OrgTaskPage.tsx";
import { Route, Routes } from "react-router";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <Routes>
      <Route path="/*" element={<OrgTaskPage />} />
    </Routes>
  );
};

export default App;
