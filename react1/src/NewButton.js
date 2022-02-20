const Button = (props) => {
  return (
      <div>
          <button onClick={props.onClick}>{props.title}</button>
      <div> )
  }
ReactDOM.render(
  <Button title={"Нажать"} onClick={()=>{alert(1)}} />,
  document.getElementById('react-container')
);