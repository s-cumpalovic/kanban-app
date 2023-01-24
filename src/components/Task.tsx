import commentsSvg from "../libs/Rectangle.svg";
import subtasksSvg from "../libs/subtasks_indicator.svg";
import DateAvatar from "./DateAvatar";

type Props = {
  description: string;
  date: string;
  comments_count: number;
  subtask_indicator: number;
};

const Task = (props: Props) => {
  let ovalNumber = Math.floor(Math.random() * 4) + 1;

  return (
    <div className="task">
      <p className="description">{props.description.substring(0, 70)}</p>
      <div className="comments-subtasks">
        <div className="comments-svgs">
          <div className="oval-group">
            {Array.from({ length: ovalNumber }, (_, i) => {
              const randomNumber = i + 1;
              return <div key={i} className={`oval-${randomNumber}`}></div>;
            })}
          </div>
          <img src={commentsSvg} alt="comments icon" />
          <p>{props.comments_count}</p>
          <img src={subtasksSvg} alt="subtasks icon" />
          <p>{props.subtask_indicator}</p>
        </div>
        <div className="date-avatar">
          <DateAvatar {...props} />
        </div>
      </div>
    </div>
  );
};

export default Task;
