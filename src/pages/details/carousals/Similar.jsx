import React from "react";

// import Carousel from "../../../components/carousal/Carousal";
import useFetch from "../../../hooks/useFetch";
import Carousal from "../../../components/carousal/Carousal"



const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousal
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;