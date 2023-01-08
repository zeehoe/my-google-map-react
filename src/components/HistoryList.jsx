import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { removeHistoryPlaces } from "../redux/actions/historyPlaces";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import useCheckMobileScreen from "../helpers/useCheckMobileScreen";

export default function HistoryList({ data, onItemClick }) {
  const dispatch = useDispatch();
  const maxDisplayDesktop = 5;
  const maxDisplayMobile = 3;
  const [maxDisplay, setMaxDisplay] = useState(maxDisplayMobile);
  const highlightColor = "#AAFF00";
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const isMobile = useCheckMobileScreen();

  React.useEffect(() => {
    if (data.length > 0) {
      setCurrentHighlight(data.length - 1);
    }
  }, [data]);
  React.useEffect(() => {
    if (isMobile) {
      setMaxDisplay(maxDisplayMobile);
    } else {
      setMaxDisplay(maxDisplayDesktop);
    }
  }, [isMobile]);

  const handleDelete = (index) => {
    dispatch(removeHistoryPlaces(index));
  };

  const onButtonClick = (item, index) => {
    onItemClick(item);
    setCurrentHighlight(index);
  };

  const getOriDataIndex = (currentMapIndex) => {
    console.log(data.length,maxDisplay,currentMapIndex)
    return data.length > maxDisplay
      ? data.length - maxDisplay + currentMapIndex
      : currentMapIndex;
  };

  return (
    <Stack direction="row" spacing={1}>
      {data
        .slice(Math.max(0, data.length - maxDisplay), data.length)
        .map((item, displayedIndex) => (
          <Chip
            style={{
              maxWidth: 95 / Math.min(maxDisplay, data.length) + "vw",
              background:
                getOriDataIndex(displayedIndex) == currentHighlight
                  ? highlightColor
                  : "",
              fontWeight:
                getOriDataIndex(displayedIndex) == currentHighlight
                  ? "bold"
                  : "normal",
            }}
            variant={getOriDataIndex(displayedIndex) == currentHighlight ? "filled" : "outlined"}
            key={uuidv4()}
            label={item.description}
            onClick={() => onButtonClick(item, getOriDataIndex(displayedIndex))}
            onDelete={() => handleDelete(getOriDataIndex(displayedIndex))}
          />
        ))}
    </Stack>
  );
}
