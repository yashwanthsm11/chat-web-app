import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => { 
  return (
    <div style={{ height: "100vh" }}>
        <PrettyChatWindow
        projectId='631f2dca-e908-4878-8119-6e70cd77a5c9'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
        />
    </div>
  );
};

export default ChatsPage;
