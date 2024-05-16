import { useState } from "react"
import Heart from "react-heart"
import { useEffect } from "react"
function Like(props) {
  console.log(props.isLiked)
    const [active, setActive] = useState(props.isLiked)
    useEffect(() => {
      setActive(props.isLiked)
  }, [ props.isLiked ])
    console.log(active)
    return (
        <div style={{ width: "2rem" }} onClick={props.onClick}>
          <Heart isActive={active} onClick={() => setActive(!active)} animationScale = {1.25}  />
        </div>
    );
  }


  export default Like