import { useContext, useMemo } from "react";
import { DoorContext } from "../context/door-context";

const Results = () => {
  const doorContext = useContext(DoorContext);

  const selectedWinners = useMemo(
    () =>
      doorContext &&
      doorContext?.resultList.map((res, index) => (
        <div key={index} className="flex items-center px-2 justify-between">
          <p className="text-sm text-gray-600 text-muted-foreground">
            {res.user}
          </p>
          <p
            className={`text-sm ${
              res.result === "Win" ? "text-green-600" : "text-red-600"
            }`}
          >
            {res.result}
          </p>
        </div>
      )),
    [doorContext?.resultList]
  );

  if (doorContext && doorContext?.resultList.length === 0) {
    return <p>No results found.</p>;
  }
  return (
    <div className="w-[300px] flex flex-col gap-y-4 mt-8 border bg-white rounded-md p-4">
      {selectedWinners}
    </div>
  );
};

export default Results;
