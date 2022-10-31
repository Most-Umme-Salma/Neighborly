import React from "react";
import { v4 } from "uuid";
import "./Notification";

export default function NotificationProvider(props) {
  const notifications = [
    {
      id: v4(),
      type: "SUCCESS",
      massage: "Hallo world",
    },
  ];
  return (
    <div>
      <div className="notification-wraper">
        {notifications.map((note) => {
          return <notification key={note.id} {...note} />;
        })}
      </div>
      {props.children}
    </div>
  );
}
