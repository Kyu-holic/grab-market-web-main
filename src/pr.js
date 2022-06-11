import React, { useEffect, useState } from "react";

function UseEffect() {
  const [name, setName] = useState("초기 닉네임");

  useEffect(() => {
    console.log("컴포넌트 나타남");
    console.log(name);
    return () => {
      console.log("cleanUp 함수");
    };
  });

  const onClick = () => {
    setName("닉네임 변경");
  };
  return (
    <div>
      {name} <button onClick={onClick}>변경</button>
    </div>
  );
}

export default UseEffect;