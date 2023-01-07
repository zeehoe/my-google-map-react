import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { removeHistoryPlaces } from "../redux/actions/historyPlaces";
import { v4 as uuidv4 } from 'uuid';

export default function HistoryList({ data, onItemClick }) {
  const dispatch = useDispatch();
  const maxDisplay = 15;

  const handleDelete = (index) => {
    dispatch(removeHistoryPlaces(index));
  };

  return (
    <Stack direction="row" spacing={1}>
      {data.slice(0, maxDisplay).map((item, index) => (
        <Chip
        style={{maxWidth:'200px'}}
          key={uuidv4()}
          label={item.description}
          onClick={()=>onItemClick(item)}
          onDelete={()=>handleDelete(index)}
        />
      ))}
    </Stack>
  );
}