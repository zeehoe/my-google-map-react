import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { removeHistoryPlaces } from "../redux/actions/historyPlaces";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

export default function HistoryList({ data, onItemClick }) {
  const dispatch = useDispatch();
  const maxDisplay = 3;
  const highlightColor = "#AAFF00";
  const [currentHighlight, setCurrentHighlight] = useState(0);
  React.useEffect(() => {
    if (data.length > 0) {
      setCurrentHighlight(data.length - 1);
    }
  }, [data]);

  const handleDelete = (index) => {
    dispatch(removeHistoryPlaces(index));
  };

  const onButtonClick = (item, index) => {
    onItemClick(item);
    setCurrentHighlight(index);
  };

  const getAffectedIndex = (currentMapIndex) => {
    return data.length > maxDisplay
      ? data.length - maxDisplay + currentMapIndex
      : currentMapIndex;
  };

  return (
    <Stack direction="row" spacing={1}>
      {data
        .slice(Math.max(0, data.length - maxDisplay), data.length)
        .map((item, index) => (
          <Chip
            style={{
              maxWidth: 95 / Math.min(maxDisplay, data.length) + "vw",
              background:
                getAffectedIndex(index) == currentHighlight
                  ? highlightColor
                  : "",
              fontWeight:
                getAffectedIndex(index) == currentHighlight ? "bold" : "normal",
            }}
            variant={index == currentHighlight ? "filled" : "outlined"}
            key={uuidv4()}
            label={item.description}
            onClick={() => onButtonClick(item, index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
    </Stack>
  );
}
