import React from "react";
import "./User.css";
import Card from "./Card";

const User = ({ data, type }) => {
    return (
        <div className="container">
            <div className="hero_wrap">
                {data?.map((user) => (
                    <div className="hero_user">
                        <div className="hero_header">
                            <div className="hero_wrap_left">
                                <div className="card_user_avatar">
                                    <span>{user.avatar}</span>
                                    <div className="avatar_user-available" style={{ background: user.available ? "#f2d064" : "#c7c8cc" }}></div>
                                </div>
                                <span>{user.name}</span>
                                <span>{user?.tickets.length}</span>
                            </div>
                            <div className="hero_wrap_right">
                                <img style={{ width: "15px", height: "15px" }}
                                    width="20"
                                    height="20"
                                    src="https://img.icons8.com/android/20/b6b9bc/plus.png"
                                    alt="plus"
                                />
                                <img style={{ width: "15px", color: "#c3c4c8", height: "15px" }}
                                    width="30"
                                    height="30"
                                    src="https://img.icons8.com/ios-glyphs/30/b6b9bc/ellipsis.png"
                                    alt="ellipsis"
                                />
                            </div>
                        </div>
                        {user?.tickets.map((ticket) => {
                            return <Card ticket={ticket} type={type} />
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;