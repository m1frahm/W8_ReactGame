const Header = (props) => {

  let message;
  if (props.name) {
    message = `Welcome to my game ${props.name}`;
  } else {
    message = `Welcome to my game`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;