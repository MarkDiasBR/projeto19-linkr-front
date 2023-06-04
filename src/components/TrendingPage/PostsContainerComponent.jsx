import socrates from "../../assets/socratesazul-cke.jpg";
//import diogenes from "../assets/Diogenes.jpeg";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import {
    LikeButtonIcon,
    UserStats,
    BoldTag,
    PostsContainer,
    Post,
    UserPhoto,
    PostData,
    PostTitle,
    PostSubtitle,
    LinkContainer,
    LinkData,
    LinkPhoto,
    LinkSummary,
    LinkTitle,
    LinkUrl,
    LikeCount,
} from "./PostsContainerComponentStyle";

export default function PostsContainerComponents() {
    const { timeLineData, metaDataInfo } = useContext(UserContext);
    const [isLike, setIsLike] = useState(Array(timeLineData.length).fill(false));
    //const [likeCount, setLikeCount] = useState()

    ///GEREI NUMEROS DE LIKES ALEATORIOS MAS PRECISA SER DE ACORD COM O POST...
    const randomLikes = timeLineData.map(() => Math.floor(Math.random() * timeLineData.length));


    function openUrl(url) {
        window.open(url, "_blank");
    }

    function DescriptionComponent({ description }) {
        return (
            <div>
                {description.split(" ").map((word, index) => {
                    if (word.startsWith("#")) {
                        return <BoldTag key={index}>{word} </BoldTag>;
                    } else {
                        return <span key={index}>{word} </span>;
                    }
                })}
            </div>
        );
    }

    function changeLikeIcon(index) {
        setIsLike((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }

    function likeIcon(index) {
        if (isLike[index]) {
            return (
                <BsSuitHeartFill
                    style={{ height: "30px", width: "30px", color: "red" }}
                />
            );
        } else {
            return (
                <BsSuitHeart
                    style={{ height: "30px", width: "30px", color: "white" }}
                />
            );
        }
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
                        <UserStats>
                            <UserPhoto src={tln.urlp} alt={`${tln.username} photo`} />
                            <LikeButtonIcon onClick={() => changeLikeIcon(index)}>
                                {likeIcon(index)}
                            </LikeButtonIcon>
                            <LikeCount>
                                {`${randomLikes[index]} likes`}
                            </LikeCount>
                        </UserStats>
                        <PostData>
                            <PostTitle>{tln.username}</PostTitle>
                            <PostSubtitle>{tln.description}</PostSubtitle>
                            <LinkContainer onClick={() => openUrl(tln.url)}>
                                <LinkData>
                                    <LinkTitle>
                                        {metaInfo ? metaInfo.title : "loading..."}
                                    </LinkTitle>
                                    <LinkSummary>
                                        <DescriptionComponent description={description} />
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