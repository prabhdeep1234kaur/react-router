import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const myParam = useParams();
  return <div>Username is : {myParam.username}</div>;
};

export default User;
