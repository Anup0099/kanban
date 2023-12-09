import React from "react";
import "./Priority.css";
import dashed from "../assets/dashed-line.png";
import Card from "./Card";

const Priority = ({ data, type }) => {
    console.log(data)
    return (
        <div className="container">
            <div className="hero_wrap_priority">
                {data?.map((value) => (
                    <div className="hero_priority">
                        <div className="hero_header">
                            <div className="hero_wrap_left">
                                {value.priority === "4" ? <div className="urgent" style={{background:"orangered"}}><img src="https://img.icons8.com/ios-glyphs/18/ffffff/exclamation-mark.png" alt="" /></div> : value.priority === "3" ? <img src="https://img.icons8.com/material-outlined/24/high-connection.png" alt="" /> : value.priority === "2" ? <img src="https://img.icons8.com/plumpy/24/medium-connection.png" alt="" /> : value.priority === "1" ? <img src="https://img.icons8.com/plumpy/24/low-connection.png" alt="" /> : <img style={{ color: '#e2e3e4' }} src={dashed} alt="" />}

                                <span>{value.priority === "0" ? "No Priority" : value.priority === "1" ? "Low" : value.priority === "2" ? "Medium" : value.priority === "3" ? "High" : "Urgent"}</span>
                                <span>{value?.tickets.length}</span>
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
                        {value?.tickets.map((ticket) => {
                            return <Card ticket={ticket} type={type} />
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Priority;