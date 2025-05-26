import { useState } from "react"
import ActivityChart from "./components/DashboardMainContent/ActivityFeed/ActivityChart"
import AnatomySection from "./components/DashboardMainContent/AnatomySection/AnatomySection"
import CalendarView from "./components/DashboardMainContent/CalendarView/CalendarView"
import UpcomingSchedule from "./components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import "./styles/App.css"


function App() {

  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (

    <>
      <Header toggleSidebar={toggleSidebar}/>
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar isVisible={sidebar}/>
        <main className="main-dash">
          <div className="dash-left">
            <div style={{ padding: "2em" }}>
              <h1>DashBoard</h1>
              <AnatomySection />
              <ActivityChart />
            </div>
          </div>
          <div className="dash-right">
            <div style={{ padding: "2em" }}>
              <CalendarView />
              <UpcomingSchedule />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
