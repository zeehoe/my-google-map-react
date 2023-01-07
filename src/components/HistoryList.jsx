import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { removeHistoryPlaces } from "../redux/actions/historyPlaces";

export default function HistoryList({ data, onItemClick }) {
  const dispatch = useDispatch();
  const maxDisplay = 5;

  const handleDelete = (index) => {
    dispatch(removeHistoryPlaces(index));
  };

  return (
    <Stack direction="row" spacing={1}>
      {data.slice(0, maxDisplay).map((item, index) => (
        <Chip
        style={{maxWidth:'200px'}}
          key={new Date().getTime()}
          label={item.description}
          onClick={()=>onItemClick(item)}
          onDelete={()=>handleDelete(index)}
        />
      ))}
    </Stack>
  );
}