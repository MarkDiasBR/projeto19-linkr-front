import { Container, ContainerProfileAndLikes, ContentContainer, DescriptionContainer,
    LinkContainer, TextContainer, ThumbContainer, LinkTitleContainer, LinkDescriptionContainer, 
    LinkUrlContainer, EditDeleteContainer, CommentsContainer, MainContainer, CommentContainer,
    InputCommentContainer, CommentMainContainer } from "./styled";
import { Link } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { AiOutlineComment } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { useRef, useEffect, useState } from "react";

export default function Post() {
    const textareaRef = useRef(null);
    const [commentIsVisible, setCommentIsVisible] = useState([false]);

    useEffect(() => {
        function resizeFunction() {
            const initialPosition = textareaRef.current.style.height;
            const initialNumber = Number(initialPosition.replace("px",'')) > 200 ? 200 : Number(initialPosition.replace("px",''));
            console.log("initialPosition", initialPosition)
            textareaRef.current.style.height = "auto";

            if (textareaRef.current.scrollHeight>39) {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 14}px`;
            } else {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }

            const finalPosition = textareaRef.current.style.height;
            const finalNumber = Number(finalPosition.replace("px",'')) > 200 ? 200 : Number(finalPosition.replace("px",''));
            console.log('finalPosition',finalPosition)

            const difference = finalNumber - initialNumber;
            
            if (difference !== 0) window.scrollBy(0,difference);
        }

        textareaRef.current.style.cssText = `height: ${textareaRef.current.scrollHeight}px; overflow-y: hidden`;

        textareaRef.current.addEventListener("input", resizeFunction) 

        return () => {
            textareaRef.current?.removeEventListener("input", resizeFunction) ;
        };
    }, []);

    function toggleComments() {
        setCommentIsVisible(!commentIsVisible);
    }

    return (
        <Container>
            <MainContainer>
                <EditDeleteContainer>
                    <button>
                        <FaPencilAlt />
                    </button>
                    <button>
                        <FaTrashAlt />
                    </button>
                </EditDeleteContainer>
                <ContainerProfileAndLikes>
                    <Link>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                    </Link>
                    <div>
                        <button>
                            <IoMdHeartEmpty />
                        </button>
                        <p>14 likes</p>
                    </div>
                    <div>
                        <button
                            onClick={toggleComments}
                        >
                            <AiOutlineComment />
                        </button>
                        <p>3 comments</p>
                    </div>
                    <div>
                        <button>
                            <BiRepost />
                        </button>
                        <p>0 re-posts</p>
                    </div>
                </ContainerProfileAndLikes>
                <ContentContainer>
                    <Link>
                        Juvenal Juvêncio
                    </Link>
                    <DescriptionContainer>
                        Muito maneiro esse tutorial de Material UI com React, deem uma olhada! <Link>#react</Link> <Link>#material</Link>
                    </DescriptionContainer>
                    <Link>
                        <LinkContainer>
                            <TextContainer>
                                <LinkTitleContainer>
                                    Como aplicar o Material UI em um projeto React
                                </LinkTitleContainer>
                                <LinkDescriptionContainer>
                                    Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.
                                </LinkDescriptionContainer>
                                <LinkUrlContainer>
                                    https://medium.com/@pshrmn/a-simple-react-router
                                </LinkUrlContainer>
                            </TextContainer>
                            <ThumbContainer>
                                <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
                            </ThumbContainer>
                        </LinkContainer>
                    </Link>
                </ContentContainer>
            </MainContainer>
            {
                commentIsVisible ?
                <CommentsContainer >
                    <CommentContainer>
                        <Link>
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                        </Link>
                        <CommentMainContainer>
                            <h1>
                                <Link>João Avatares</Link><span> • following</span><span> • post's author</span>
                            </h1>
                            <p>
                                Adorei esse post, ajuda muito a usar Material UI com React! Adorei esse post, ajuda muito a usar Material UI com React! Adorei esse post, ajuda muito a usar Material UI com React! Adorei esse post, ajuda muito a usar Material UI com React! Adorei esse post, ajuda muito a usar Material UI com React! <Link>#react</Link>
                            </p>
                        </CommentMainContainer>
                    </CommentContainer>
                    
                    <InputCommentContainer>
                        <Link>
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                        </Link>
                        <form>
                            <textarea 
                                ref={textareaRef}
                                placeholder="write a comment..."
                                required
                            />
                            <button>
                                <FiSend />
                            </button>
                        </form>
                    </InputCommentContainer>
                </CommentsContainer>
                : ''
            }       
        </Container>
    )
}