const Header = ({ title, taskCount }: any) => {
  return (
    <div className="column-header">
      <h1 className="column-name">
        {title}
        <p className="column-taskcount" >({taskCount})</p>
      </h1>
    </div>
  );
};

export default Header;
