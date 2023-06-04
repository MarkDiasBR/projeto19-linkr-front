import Header from "../../components/Header";
import PublishContainer from "../../components/TimeLine/PublishContainerComponent";
import PostsContainerComponents from "../../components/TimeLine/PostsContainerComponent";
import { TimeLineContainer, TimeLineTitle, Loading } from "./TimeLineStyle";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";


export default function TimeLine() {
    const { isLoadedPage } = useContext(UserContext);
    function loadingPage() {
        if (isLoadedPage) {
            return (
                <TimeLineContainer>
                    <TimeLineTitle>timeline</TimeLineTitle>
                    <PublishContainer />
                    <PostsContainerComponents />
                </TimeLineContainer>
            );
        }
        else {
            return (
                <Loading>LOADING...</Loading>
            );
        }
    }

    return (
        <>
            <Header />
            {loadingPage()}
        </>
    );
}

