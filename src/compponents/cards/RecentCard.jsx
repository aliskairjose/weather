import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function RecentCard({ data }) {

  const location = JSON.parse(data);

  return (
    <div className="grid place-items-center w-[280px] h-[400px] border rounded-2xl">
      {location.name}
    </div>
  );
}
RecentCard.propTypes = {
  data: PropTypes.string,
};

export default RecentCard;
