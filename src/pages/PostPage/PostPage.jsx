import Header from "../../contexts/Header";
import PublishContainer from "../../components/PublishContainerComponent";
import PostsContainerComponents from "../../components/PostsContainerComponent";
import { TimeLineContainer, TimeLineTitle } from "./PostPageStyle";


export default function PostPage() {
    return (
        <>
            <Header />
            <TimeLineContainer>
                <TimeLineTitle>timeline</TimeLineTitle>
                <PublishContainer />
                <PostsContainerComponents />
            </TimeLineContainer>
        </>
    );
}