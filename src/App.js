import "../src/App.css"
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Biznes from "./Components/Biznes/Biznes";
import Sosialmedia from "./Components/Sosialmedia/Sosialmedia";
import Marketing from "./Components/Marketing/Marketing";
import Website from "./Components/Website/Website";
import Erp from "./Components/Erp/Erp";
import Konsalting from "./Components/Konsalting/Konsalting";
import Frontend from "./Components/Frontend/Frontend";
import Backend from "./Components/Backend/Backend";
import Design from "./Components/Design/Design";
import About from "./Components/About/About";
import Mission from "./Components/Mission/Mission";
import Blog from "./Components/Blog/Blog";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import Section7 from "./Components/Section7/Section7";
import Footer from "./Components/Footer/Footer";
import Section8 from "./Components/Section8/Section8";
import Blog1 from "./Components/Blog1/Blog1";
import Blog2 from "./Components/Blog2/Blog2";
import Blog3 from "./Components/Blog3/Blog3";
import Blog4 from "./Components/Blog4/Blog4";
import Itessentials from "./Components/Itessentials/Itessentials"
import ScrollTop from "./Components/ScrollToTop"
import Ccnav7 from "./Components/Ccnav7/Ccnav7";
import Cybersecurity from "./Components/Cybersecurity/Cybersecurity";
import Ndglinux from "./Components/Ndglinux/Ndglinux";
import Systemadministration from "./Components/Systemadministration/Systemadministration";
import PcapPython from "./Components/PcapPython/PcapPython";
import Cliprogramming from "./Components/Cliprogramming/Cliprogramming";
import Clipadvanced from "./Components/Clipadvanced/Clipadvanced";
import Iotfundamentals from "./Components/Iotfundamentals/Iotfundamentals";
import Iotsecurity from "./Components/Iotsecurity/Iotsecurity";
import Ccnacybersecurity from "./Components/Ccnacybersecurity/Ccnacybersecurity";
import Accounting from "./Components/Accounting/Accounting";
import Sosialmediamarketing from "./Components/Sosialmediamarketing/Sosialmediamarketing";
import Autodesk3dsmax from "./Components/Autodesk3dsmax/Autodesk3dsmax";
import Autocad from "./Components/Autocad/Autocad";
import AdobePhotoshop from "./Components/AdobePhotoshop/AdobePhotoshop";
import Adobeıllustrator from "./Components/Adobeıllustrator/Adobeıllustrator";
import Coreldraw from "./Components/Coreddraw/Coreldraw";
import Microsoftoffice from "./Components/Microsoftoffice/Microsoftoffice";
import Excel from "./Components/Excel/Excel";
import Elaqe from "./Components/contact/elaqe";
function App() {
  return (

    <BrowserRouter>

      <div className="App">

        <Navbar />
        
        <ScrollTop />

        <Switch>

          <Route exact path="/">

            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />

          </Route>

          <Route path="/biznes">
            <Biznes />
          </Route>
          <Route path="/sosial">
            <Sosialmedia />
          </Route>
          <Route path="/marketing">
            <Marketing />
          </Route>
          <Route path="/website">
            <Website />
          </Route>
          <Route path="/erp">
            <Erp />
          </Route>
          <Route path="/konsalting">
            <Konsalting />
          </Route>
          <Route path="/frontend">
            <Frontend />
          </Route>
          <Route path="/backend">
            <Backend />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mission">
            <Mission />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path={"/blog1"}>
            <Blog1 />
          </Route>
          <Route path={"/blog2"}>
            <Blog2 />
          </Route>
          <Route path={"/blog3"}>
            <Blog3 />
          </Route>
          <Route path={"/blog4"}>
            <Blog4 />
          </Route>
          <Route path={"/itessentials"}>
            <Itessentials />
          </Route>
          <Route path={"/ccnav7"}>
            <Ccnav7 />
          </Route>
          <Route path={"/cybersecurity"} >
            <Cybersecurity />
          </Route>
          <Route path={"/ndglinux"}>
            <Ndglinux />
          </Route>
          <Route path={"/systemadministration"}>
            <Systemadministration />
          </Route>
          <Route path={"/pcappython"}>
            <PcapPython />
          </Route>
          <Route path={"/cliprogramming"}>
            <Cliprogramming />
          </Route>
          <Route path={"/clipadvanced"}>
            <Clipadvanced />
          </Route>
          <Route path={"/iotfundamentals"}>
            <Iotfundamentals />
          </Route>
          <Route path={"/iotsecurity"}>
            <Iotsecurity />
          </Route>
          <Route path={"/ccnacybersecurity"}>
            <Ccnacybersecurity />
          </Route>
          <Route path={"/accounting"}>
            <Accounting />
          </Route>
          <Route path={"/sosialmediamarketing"}>
            <Sosialmediamarketing />
          </Route>
          <Route path={"/autodesk3dsmax"}>
            <Autodesk3dsmax />
          </Route>
          <Route path={"/autocad"}>
            <Autocad />
          </Route>
          <Route path={"/adobephotoshop"}>
            <AdobePhotoshop />
          </Route>
          <Route path={"/adobeıllustrator"}>
            <Adobeıllustrator />
          </Route>
          <Route path={"/coreldraw"}>
            <Coreldraw />
          </Route>
          <Route path={"/microsoftoffice"}>
            <Microsoftoffice />
          </Route>
          <Route path={"/excel"}>
           <Excel/> 
          </Route>
          <Route path={'/elaqe'}>
            <Elaqe/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
