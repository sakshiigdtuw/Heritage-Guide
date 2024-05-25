import { HelpCircleIcon, Menu, MessageCircleDashed, Plus } from "lucide-react";
import "./Sidebar.css";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extented, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
    // setExtended(false);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Menu onClick={() => setExtended((prev) => !prev)} className="menu" />
        <div onClick={() => newChat()} className="new-chat">
          <Plus />
          {extented ? <p>New Chat</p> : null}
        </div>

        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={item}
                >
                  <MessageCircleDashed />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
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
