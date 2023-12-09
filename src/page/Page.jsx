import React, { useEffect, useState } from "react";
import "./page.css";
import Hero from "../Components/Hero";
import axios from "axios";

const Page = () => {
  const [display, setDisplay] = useState(false);
  const [initial, setInitial] = useState(true);
  const [grouping, setGrouping] = useState();
  const [ordering, setOrdering] = useState();
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    console.log(data);
    setTickets(data.tickets);
    setUsers(data.users);
  };

  useEffect(() => {
    if (initial) {
      setInitial(false);
      setGrouping(localStorage.getItem("grouping") || "status");
      setOrdering(localStorage.getItem("ordering") || "priority");
      fetchData();
    }
  }, [initial]);

  useEffect(() => {
    if (initial) return;
    console.log("first");
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("ordering", ordering);
    console.log(grouping);
    if (grouping === "status") {
      if (ordering === "priority") {
        const backlog = tickets
          .filter((ticket) => ticket.status === "Backlog")
          .sort((a, b) => b.priority - a.priority);
        const todo = tickets
          .filter((ticket) => ticket.status === "Todo")
          .sort((a, b) => b.priority - a.priority);
        const progress = tickets
          .filter((ticket) => ticket.status === "In progress")
          .sort((a, b) => b.priority - a.priority);
        const done = tickets
          .filter((ticket) => ticket.status === "Done")
          .sort((a, b) => b.priority - a.priority);
        const canceled = tickets
          .filter((ticket) => ticket.status === "Canceled")
          .sort((a, b) => b.priority - a.priority);
        backlog.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        todo.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        progress.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        done.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        canceled.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });

        const sorted = {
          backlog: backlog,
          todo: todo,
          progress: progress,
          done: done,
          canceled: canceled,
        };
        console.log(sorted);
        setData(sorted);
        setLoading(false);
      } else {
        const backlog = tickets
          .filter((ticket) => ticket.status === "Backlog")
          .sort((a, b) => a.title.localeCompare(b.title));
        const todo = tickets
          .filter((ticket) => ticket.status === "Todo")
          .sort((a, b) => a.title.localeCompare(b.title));
        const progress = tickets
          .filter((ticket) => ticket.status === "In progress")
          .sort((a, b) => a.title.localeCompare(b.title));
        const done = tickets
          .filter((ticket) => ticket.status === "Done")
          .sort((a, b) => a.title.localeCompare(b.title));
        const canceled = tickets
          .filter((ticket) => ticket.status === "Canceled")
          .sort((a, b) => a.title.localeCompare(b.title));
        backlog.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        todo.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        progress.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        done.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });
        canceled.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
        });

        const sorted = {
          backlog: backlog,
          todo: todo,
          progress: progress,
          done: done,
          canceled: canceled,
        };
        console.log(sorted);
        setData(sorted);
        setLoading(false);
      }
    } else if (grouping === "user") {
      if (ordering === "priority") {
        const grouped = tickets.map((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          ticket.available = user.available;
          let avatar = user.name
            .split(" ")
            .map((n) => n[0])
            .join("");
          avatar = avatar.length > 2 ? avatar.slice(0, 2) : avatar;
          avatar = avatar.toUpperCase();
          ticket.avatar = avatar;
          return ticket;
        });
        //group by user name
        const groupedByUser = grouped.reduce((acc, obj) => {
          const key = obj.name;
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
        //sort by priority
        for (let key in groupedByUser) {
          groupedByUser[key].sort((a, b) => b.priority - a.priority);
        }
        const sorted = [];
        for (let key in groupedByUser) {
          sorted.push({
            name: key,
            available: groupedByUser[key][0].available,
            avatar: groupedByUser[key][0].avatar,
            tickets: groupedByUser[key],
          });
        }
        console.log(sorted);
        setData(sorted);
        setLoading(false);
      } else {
        setLoading(true);
        const grouped = tickets.map((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.name = user.name;
          let avatar = user.name
            .split(" ")
            .map((n) => n[0])
            .join("");
          avatar = avatar.length > 2 ? avatar.slice(0, 2) : avatar;
          avatar = avatar.toUpperCase();
          ticket.avatar = avatar;
          ticket.available = user.available;
          return ticket;
        });
        //group by user name avatar available and tickets
        // {name:"Gaurav Rai",avatar:"GR",available:false,tickets:[{},{},{}]}
        const groupedByUser = grouped.reduce((acc, obj) => {
          const key = obj.name;
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
        //sort by title
        for (let key in groupedByUser) {
          groupedByUser[key].sort((a, b) => a.title.localeCompare(b.title));
        }
        const sorted = [];
        for (let key in groupedByUser) {
          sorted.push({
            name: key,
            available: groupedByUser[key][0].available,
            avatar: groupedByUser[key][0].avatar,
            tickets: groupedByUser[key],
          });
        }
        console.log(sorted);
        setData(sorted);

        setLoading(false);
      }
    } else {
      //grouping by priority in descending
      //ex {"4":[{},{},{}],"3":[{},{},{}],"2":[{},{},{}],"1":[{},{},{}],"0":[{},{},{}]}
      setLoading(true);
      const grouped = tickets.map((ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        ticket.name = user.name;
        ticket.available = user.available;
        return ticket;
      });

      //group by priority in descending order
      const groupedByPriority = grouped.reduce((acc, obj) => {
        const key = obj.priority;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      console.log(groupedByPriority);
      //sort key in descending order
      //sort by title acc to keys
      for (let key in groupedByPriority) {
        groupedByPriority[key].sort((a, b) => a.title.localeCompare(b.title));
      }
      const sorted = [];
      for (let key in groupedByPriority) {
        sorted.push({ priority: key, tickets: groupedByPriority[key] });
      }
      console.log(sorted);
      setData(sorted);
      setLoading(false);
    }
  }, [ordering, grouping, tickets, users, initial]);

  return (
    <>
      <div className="app_container">
        {/* navbar */}
        <div className="app_navbar">
          <div className="app_nav_display">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: "10px",
              }}
              onClick={() => {
                setDisplay(!display);
              }}
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/30/00000/vertical-settings-mixer--v1.png"
                alt="vertical-settings-mixer--v1"
                style={{
                  transform: "rotate(90deg)",
                  width: "20px",
                }}
              />

              <span className="span">Display </span>
              <img
                src="https://img.icons8.com/ios-glyphs/30/00000/collapse-arrow.png"
                alt="collapse-arrow"
                style={{
                  transform: !display ? "rotate(180deg)" : "rotate(0deg)",
                  height: "15px",
                  width: "15px",
                  marginTop: "3px",
                }}
              />
            </div>
            {/*  */}
            {display && (
              <div className="drop-down">
                <div className="grouping">
                  <div className="">Grouping</div>
                  <div className="">
                    <select
                      value={grouping}
                      onChange={(e) => {
                        setGrouping(e.target.value);
                        setLoading(true);
                        setDisplay(false);
                      }}
                      name="cars"
                      id="cars"
                    >
                      <option value="status" selected>
                        Status
                      </option>
                      <option value="user"> User</option>
                      <option value="priority"> Priority</option>
                    </select>
                  </div>
                </div>
                <div className="ordering">
                  <div className="">Ordering</div>
                  <div className="">
                    <select
                      value={ordering}
                      onChange={(e) => {
                        setOrdering(e.target.value);
                        setLoading(true);
                        setDisplay(false);
                      }}
                      name="cars"
                      id="cars"
                    >
                      {grouping !== "priority" && (
                        <option value="priority" selected>
                          Priority
                        </option>
                      )}
                      <option value="title"> Title</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* body */}
        <div className="app_hero">
          {!loading && <Hero data={data} type={grouping} />}
        </div>
      </div>
    </>
  );
};

export default Page;
