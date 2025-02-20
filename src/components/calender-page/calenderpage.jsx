// import './App.css'; // Ensure this CSS contains the global styles
import Timeline from './Timeline/Timeline.jsx';
import DescBox from "./desc-box/desc-box.jsx";



function CalenderPage() {
  return (
    <>
      <DescBox />
      {/* Space between Logo-dashboard and Timeline */}
      <div style={{ marginTop: '70px' }}>
        {/* Timeline Component */}
        <Timeline />
      </div>
    </>
  );
}

export default CalenderPage;