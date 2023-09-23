'use client'
import {
    Avatar,
    Box,
    Grid,
    IconButton,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";
import { IUser } from "@/models";
  
  interface IComment {
    author?: IUser | undefined | null;
    text: string;
    authorId: number;
    date: string;
    deleteComment?: () => void;
  }
  
  const Comment = ({ author, authorId, text, date, deleteComment }: IComment) => {
    return (
      <ListItem
        sx={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px",
          margin: "5px 0",
        }}
        // secondaryAction={
        //   authorId === GetUserIdByCookies() && (
        //     <IconButton edge="end" aria-label="delete" onClick={deleteComment}>
        //       <DeleteIcon />
        //     </IconButton>
        //   )
        // }
      >
        <Box>
          <Box display={"flex"} alignItems={'center'}>
            <h4 style={{ marginRight: "15px", textAlign: "left" }}>{author?.name}</h4>
            <p style={{ textAlign: "left", color: "gray" }}>{`${new Date(
              Date.parse(date)
            ).toLocaleDateString()}`}</p>
          </Box>
          <Box>
            <p style={{ textAlign: "left" }}>{text}</p>
          </Box>
        </Box>
      </ListItem>
    );
  };
  
  export default Comment;