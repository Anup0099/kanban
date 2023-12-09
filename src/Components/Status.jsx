import React from "react";
import "./Status.css";
import progress from "../assets/contrast.png";
import tick from "../assets/check.png";
import cancel from "../assets/cancel.png";
import Card from "./Card";

const Status = ({data, type}) => {
    return (
        <div className="container">
            <div className="hero_wrap">
                <div className="hero_backlog">
                    <div className="hero_header">
                        <div className="hero_wrap_left">
                            <img style={{ width: "18px", height: '18px', marginTop: "3px" }} src="https://img.icons8.com/ios-filled/30/b6b9bc/spinner--v3.png" alt="backlog" />
                            <span>Backlog</span>
                            <span>{data?.backlog.length}</span>
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
                    {data?.backlog.map((ticket) => {
                        return <Card ticket= {ticket} type={type} />
                    })}
                </div>
                <div className="hero_Todo">
                    <div className="hero_header">
                        <div className="hero_wrap_left">
                            <img style={{ width: "18px", height: '18px', marginTop: "3px" }} src="https://img.icons8.com/ios-filled/30/b6b9bc/circled.png" alt="backlog" />
                            <span>Todo</span>
                            <span>{data?.todo.length}</span>
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
                    {data?.todo.map((ticket) => {
                        return <Card ticket= {ticket} type = {type}/>
                    })}
                </div>
                <div className="hero_progress">
                    <div className="hero_header">
                        <div className="hero_wrap_left">
                            <img style={{ width: "18px", height: '18px', marginTop: "3px" }} src={progress} alt="backlog" />
                            <span>In Progress</span>
                            <span>{data?.progress.length}</span>
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
                    {data?.progress.map((ticket) => {
                        return <Card ticket= {ticket} type = {type}/>
                    })}
                </div>
                <div className="hero_done">
                    <div className="hero_header">
                        <div className="hero_wrap_left">
                            <img style={{ width: "18px", height: '18px', marginTop: "3px" }} src={tick} alt="backlog" />
                            <span>Done</span>
                            <span>{data?.done.length}</span>
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
                    {data?.done.map((ticket) => {
                        return <Card ticket= {ticket} type = {type}/>
                    })}
                </div>
                <div className="hero_cancel">
                    <div className="hero_header">
                        <div className="hero_wrap_left">
                            <img style={{ width: "18px", height: '18px', marginTop: "3px" }} src={cancel} alt="backlog" />
                            <span>Cancelled</span>
                            <span>{data?.canceled.length}</span>
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
                    {data?.canceled.map((ticket) => {
                        return <Card ticket= {ticket} type = {type}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Status;