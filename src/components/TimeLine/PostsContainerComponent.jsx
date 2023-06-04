import socrates from "../../assets/socratesazul-cke.jpg"
//import diogenes from "../assets/Diogenes.jpeg";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { PostsContainer, Post, UserPhoto, PostData, PostTitle, PostSubtitle, LinkContainer, LinkData, LinkPhoto, LinkSummary, LinkTitle, LinkUrl } from "./PostsContainerComponentStyle";

export default function PostsContainerComponents() {
    const { timeLineData, metaDataInfo } = useContext(UserContext);

    function openUrl(url) {
        window.open(url, "_blank");
    }

    return (
        <PostsContainer>
            {timeLineData.slice().reverse().map((tln, index) => {
                const metaInfo = metaDataInfo.slice().reverse()[index];
                const description =
                    metaInfo?.description.length > 255
                        ? metaInfo?.description.slice(0, 255) + "..."
                        : metaInfo?.description;
                return (
                    <Post key={index}>
                        <UserPhoto src={tln.urlp} alt={`${tln.username} photo`} />
                        <PostData>
                            <PostTitle>{tln.username}</PostTitle>
                            <PostSubtitle>{tln.description}</PostSubtitle>
                            <LinkContainer onClick={() => openUrl(tln.url)}>
                                <LinkData>
                                    <LinkTitle>
                                        {metaInfo ? metaInfo.title : "loading..."}
                                    </LinkTitle>
                                    <LinkSummary>
                                        {metaInfo ? description : "loading..."}
                                    </LinkSummary>
                                    <LinkUrl>{tln.url}</LinkUrl>
                                </LinkData>
                                <LinkPhoto
                                    src={metaInfo ? metaInfo.images : socrates}
                                    alt="link photo"
                                />
                            </LinkContainer>
                        </PostData>
                    </Post>
                );
            })}
        </PostsContainer>
    );
}