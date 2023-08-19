import { useState } from "react";

function Button(props) {
    
  return (
    <button class="like-button"  onClick={props.onClickFunction}>
      <i class="fa fa-heart" ></i>
    </button>
  );
}

function Display(props) {
  const rate =
    props.message > 20 ? "That's Great" : props.message > 10 ? "Good for Us" : props.message > 0?"Just fine":"Give us a Like";

  return (
    (
      <div className="container">
        <h3>Total Likes : {props.message}</h3>
        <h2>Hmm... {rate}</h2>
        <h2>{props.message>0 && "Thank you!!"}</h2>
      </div>
    )
  );
}

export default function Main() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => setCount(count + 1);

  return (
    <>
      <Button onClickFunction={incrementCounter} />
      <Display message={count} />
    </>
  );
}
