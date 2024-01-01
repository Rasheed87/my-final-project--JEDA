import "./conv-msg.css";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../../data";

const ConvMsg = () => {
  return (
    <Box p={3} sx={{ height: "800px" }}>
      <Stack spcaing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              break;
            case 'msg':
              switch (el.subtype) {
                case "msg":
                  break;
                case "doc":
                  break;
                case "link":
                  break;
                case "reply":
                  break;

                default:
                  break;
              }
              break;

            default:
                return <></>;
             
          }
        })}
      </Stack>
    </Box>
  );
};

export default ConvMsg;
