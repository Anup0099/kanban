import React from "react";
import dashed from "../assets/dashed-line.png";
import progress from "../assets/contrast.png";
import tick from "../assets/check.png";
import cancel from "../assets/cancel.png";
import "./Card.css";


const Card = ({ ticket, type }) => {
  const { id, title, priority,status, name, available, tag } = ticket;

  let avatar = name.split(" ").map((n) => n[0]).join("");
  avatar = avatar.length > 2 ? avatar.slice(0, 2) : avatar;
  avatar = avatar.toUpperCase();

  return (
    <div className="card">
      <div className="card_header">
        <div className="card_ticket_id">{id}</div>
        {type !== 'user' && <div className="card_user_avatar">
          <span>{avatar}</span>
          <div className="avatar_user-available" style={{ background: available ? "#f2d064" : "#c7c8cc" }}></div>
        </div>}
      </div>
      {type === "status" && <div className="card_title">{title}</div>}
      {type !== "status" && <div style={{"display":"flex", "gap":"10px",alignItems:"center"}}>
        <img src={status==='Backlog'?'https://img.icons8.com/ios-filled/24/b6b9bc/spinner--v3.png':status === 'Todo'? "https://img.icons8.com/ios-filled/20/b6b9bc/circled.png": status === 'In progress' ? progress : status === 'Done'? tick: cancel} alt="" />
        <div className="card_title">{title}</div>
      </div>}
      <div className="card_footer">
        {type !== "priority" && <div className="card_user_available">
          {priority === 4 ? <div className="urgent"><img src="https://img.icons8.com/ios-glyphs/18/ffffff/exclamation-mark.png" alt="" /></div> : priority === 3 ? <img src="https://img.icons8.com/material-outlined/24/high-connection.png" alt="" /> : priority === 2 ? <img src="https://img.icons8.com/plumpy/24/medium-connection.png" alt="" /> : priority === 1 ? <img src="https://img.icons8.com/plumpy/24/low-connection.png" alt="" /> : <img style={{ color: '#e2e3e4' }} src={dashed} alt="" />}
        </div>}
        <div className="card_ticket_tag">
          <div style={{ width: "12px", height: "12px", borderRadius: "100%", background: "#b9b9be" }}></div>
          <div>{tag}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
