type Props = {
  date: string;
};

const DateAvatar = (props: Props) => {
  let ovalNumber = Math.floor(Math.random() * 4) + 1;

  return (
    <>
      <div className="date-element">
        <p>{props.date}</p>
      </div>
      <div className="images-container">
        {Array.from({ length: ovalNumber }, (_, i) => {
          const randomNumber = i + 1;
          return (
            <>
              <img
                key={i}
                className="avatar"
                src={`https://picsum.photos/200/300?random=${randomNumber}`}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default DateAvatar;
