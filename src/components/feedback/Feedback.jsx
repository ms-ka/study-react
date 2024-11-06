import { useState } from "react";
import MyButton from "../myButton/MyButton";
import "./feedback.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className='like'>
        <span> {likes}</span>
        <MyButton 
        onClick={handleLike} 
        isDanger={false} 
        text={"+"}
        func={handleLike}
        > Like</MyButton>
      </div>

      <MyButton
        onClick={handleReset}
        type={"reset"}
        text={"Reset"}
        func={handleReset}
      > Reset</MyButton>
      
      <div>
        <MyButton 
        onClick={handleDislike} 
        isDanger={false} 
        text={"-"}
        func={handleDislike}
        >Dislike</MyButton>
        <span> {dislikes}</span>
      </div>
    </div>
  );
}
export default Feedback;
