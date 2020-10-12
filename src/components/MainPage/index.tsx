import React from "react";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div>
      <Link to='/visit-history'>История посещений</Link>
    </div>
  )
}

export default MainPage;