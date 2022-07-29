import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const Set = ({ dummy }) => {
    return (
        <>
            {dummy.map((skeletun, index) => {
                return (
                    <>
                        <Stack spacing={1} className=" mb-4 col-5" key={index} data-id={skeletun.id} >
                            <Skeleton
                                variant="rectangular"
                                animation="wave"
                                width={"100%"}
                                height={300}
                                className="rounded"
                            />
                            <div className="d-flex justify-content-between mt-2">
                                <Skeleton variant="text" animation="wave" width={"35%"}  height={"50px"} />
                                <Skeleton variant="text" animation="wave" width={"20%"} />
                            </div>
                            <div className="d-flex justify-content-between mb-1">
                                <Skeleton variant="text" animation="wave" width={"50%"}   height={"30px"}  />
                                <Skeleton variant="text" animation="wave" width={"30%"}   height={"30px"}  />
                                
                            </div>
                            <Skeleton variant="text" animation="wave" width={"100%"}   height={"5px"}  />
                            <div className="d-flex justify-content-between align-content-center mt-3">
                                <Skeleton
                                    variant="circular"
                                    animation="wave"
                                    width={60}
                                    height={60}
                                />
                            <Skeleton variant="text" animation="wave" width={"18rem"} />
                            </div>
                            <div className="d-flex align-items-center justify-content-evenly">
                            <Skeleton variant="text" animation="wave" width={"70%"}  height={"50px"}  />
                            <Skeleton variant="text" animation="wave" width={"70px"}  height={"60px"}  />
                            </div>
                        </Stack>
                    </>
                )
            })}

        </>
    );
};
