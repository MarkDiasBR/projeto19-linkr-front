import Header from "../../components/Header";
import PublishContainer from "../../components/PostPage/PublishContainerComponent";
import PostsContainerComponents from "../../components/PostPage/PostsContainerComponent";
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