import { useEffect, useReducer } from "react";
import MailCard from "../Component/MailCard";
import { mails } from "../Data/data";

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "handleStar": {
      return state.map((mail) =>
        mail.mId === action.mailId
          ? { ...mail, isStarred: !mail.isStarred }
          : { ...mail }
      );
    }
    case "MarkasRead1": {
      console.log("Readed");
      return state.map((mail) =>
        mail.mId === action.mailId
          ? { ...mail, unread: !mail.unread }
          : { ...mail }
      );
    }

    default: {
      console.log("Default called");
      return state;
    }
  }
}

export default function InBox() {
  const [mailData, dispatch] = useReducer(reducer, mails);

  function handleStar(idToStar) {
    dispatch({
      type: "handleStar",
      mailId: idToStar
    });
  }
  function markAsReadHandler(idReaded) {
    console.log("Button Clicked", idReaded);
    dispatch({
      type: "MarkasRead1",
      mailId: idReaded
    });
  }

  return (
    <>
      <h1>INBOX PAGE</h1>

      <div style={{ border: " 1px solid black" }}>
        <p>Filter</p>
        <label>
          <input type="checkbox" />
          Show unread Mail
        </label>
        <label>
          <input type="checkbox" />
          Show Star Mail
        </label>
      </div>

      <h4>
        UnRead:{" "}
        {mailData.reduce((acc, { unread }) => (unread ? acc + 1 : acc), 0)}
      </h4>
      {mailData.map((mail) => (
        <MailCard
          mail={{ ...mail }}
          handleStarTask={handleStar}
          markAsRead={markAsReadHandler}
        />
      ))}
    </>
  );
}

//Doubt
// mail={...mail} handleStar
