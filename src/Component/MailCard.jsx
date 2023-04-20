import { Link } from "react-router-dom";
import "./MailCard.css";
export default function MailCard({ mail, handleStarTask, markAsRead }) {
  // console.log(props);
  // console.log(markAsRead);
  const { mId, unread, isStarred, subject, content } = mail;
  return (
    <article
      style={{
        border: "1px solid black",
        margin: "1rem",
        padding: "1rem",
        backgroundColor: unread ? "#f5f7fa" : "white"
      }}
    >
      <header className="Heading">
        <h3>Subject: {subject}</h3>
        <button onClick={() => handleStarTask(mId)}>
          {isStarred ? "Unstar" : "Star"}
        </button>
      </header>
      <p>{content}</p>

      <div className="footer">
        <div className="linktoNav">
          {/* <Link to="/${id}">View Detail</Link> */}
        </div>
        <div>
          <button>Delete</button>
          <button onClick={() => markAsRead(mId)}>
            {unread ? "Mark As Read" : "Mark As Unread"}
          </button>
          <button>Report Spam</button>
        </div>
      </div>
    </article>
  );
}

// mId: 'guid-1',
//     unread: false,
//     isStarred: false,
//     subject: 'Training Program',
//     content:
