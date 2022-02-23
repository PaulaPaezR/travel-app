import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {WelcomePage} from "./pages/WelcomePage";
import {InfoCountryPage} from "./pages/InfoCountryPage";

export function App(){
  return(
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/welcome" element={<WelcomePage/>} />
            <Route path="/info-country" element={(localStorage.getItem('dataForm') ? <InfoCountryPage/> : <Navigate replace to='/'/>)} />
            <Route path="*" element={<Navigate replace to='/'/>} />
          </Routes>
      </BrowserRouter>
  )
}
