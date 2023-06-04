import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (({ children }) => {
    const [attTimeLine, setAttTimeLine] = useState(false);
    const [timeLineData, setTimeLineData] = useState([]);
    let [metaDataInfo, setMetaDetaInfo] = useState([]);
    const [isLoadedPage, setIsLoadedPage] = useState(false);
    const [isLoadedTrendingTags, setIsLoadedTrendingTags] = useState(false);
    //const [token, setToken] = useState("");
    return (
        <UserContext.Provider
            value={{
                //token,
                //setToken,
                attTimeLine,
                setAttTimeLine,
                timeLineData,
                setTimeLineData,
                metaDataInfo,
                setMetaDetaInfo,
                isLoadedPage,
                setIsLoadedPage,
                isLoadedTrendingTags,
                setIsLoadedTrendingTags
            }}
        >
            {children}
        </UserContext.Provider>
    );
});