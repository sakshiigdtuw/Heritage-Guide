import { HelpCircleIcon, Menu, MessageCircleDashed, Plus } from "lucide-react";
import "./Sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [extented, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <Menu onClick={() => setExtended((prev) => !prev)} className="menu" />
        <div className="new-chat">
          <Plus />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <MessageCircleDashed />
              <p>What is flora?</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <HelpCircleIcon />
          {extented ? <p>Help</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
