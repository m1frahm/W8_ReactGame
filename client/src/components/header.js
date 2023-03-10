const Header = (props) => {

  let message;
  if (props.name) {
    message = `LET'S BEGIN ${props.name}`;
  } else {
    message = `LET'S BEGIN`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;