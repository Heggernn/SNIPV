import {
  Avatar,
  Badge,
  Button,
  Card,
  Collapse,
  Dropdown,
  Grid,
  Loading,
  Pagination,
  Text,
  Tooltip,
  User,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdFormatIndentIncrease } from "react-icons/md";
import { LoginIcon } from "../SVG/LoginIcon";
import LanguageBadge from "../Display/LanguageBadge";

const Feed = ({ snippet }) => {
  return (
    <div>
      {snippet && (
        <div className="max-w-[46rem]">
          {snippet.snips && (
            <div className="flex flex-col gap-4 ">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <div className="flex items-center gap-2 pl-2 h-10">
                  <div className="pt-3">
                    <Text h3 color="white">
                      <MdFormatIndentIncrease />
                    </Text>
                  </div>
                  <div className="w-full ">
                    <div className="uppercase">
                      <p className="font-semibold">Seneste SNIPS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-4">
                  {snippet.snips.slice(0, 10).map((snippet, index) => (
                    <div key={index}>
                      <Link
                        href={
                          snippet.snippetType === "code"
                            ? `/s/${snippet.id}`
                            : `/e/${snippet.id}`
                        }
                      >
                        <div className="hoverable-item">
                          <Card
                            isPressable
                            variant="flat"
                            css={{ mw: "100%", padding: "$0" }}
                            key={snippet.id}
                          >
                            <div className="cardHover bg-[#F1F7FF] hoverable-item flex gap-3 items-center p-2 border-b rounded-xl w-full">
                              <div className="w-full flex flex-col gap-2">
                                <div className="flex items-center">
                                  <div className="">
                                    <Tooltip
                                      content={snippet.userData.username}
                                      color="primary"
                                    >
                                      <User
                                        src={snippet.userData?.photoURL}
                                        zoomed
                                        squared
                                        pointer
                                      />
                                    </Tooltip>
                                  </div>

                                  <div className="w-full flex flex-col justify-center gap-3 MonoHeading">
                                    <div className="w-full">
                                      <p className="text-[#031B4E] text-lg font-[500] truncateText">
                                        {snippet.title}
                                      </p>
                                    </div>
                                    {snippet.description && (
                                      <div className="-mt-2 h-5">
                                        <h6 className="text-[#031b4ed4] whitespace-nowrap MonoHeading truncateText">
                                          {snippet.description}
                                        </h6>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex">
                                  <div className="w-24 flex justify-center">
                                    {snippet.snippetType == "code" && (
                                      <div className="pr-[.60rem]">
                                        <Badge
                                          isSquared
                                          color="primary"
                                          variant="flat"
                                        >
                                          KODE
                                        </Badge>
                                      </div>
                                    )}
                                    {snippet.snippetType == "error" && (
                                      <div className="pr-[.60rem]">
                                        <Badge
                                          isSquared
                                          color="error"
                                          variant="flat"
                                        >
                                          FEJL
                                        </Badge>
                                      </div>
                                    )}
                                  </div>
                                  <div className="w-full MonoHeading">
                                    <LanguageBadge snippet={snippet} />
                                  </div>
                                  <div className="text-[#031B4E]">
                                    <p className="text-xs font-mono">
                                      {new Date(
                                        snippet.postedAt.seconds * 1000
                                      ).toLocaleDateString("da-DK")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="hoverable-show">
                                <LoginIcon
                                  width={30}
                                  height={30}
                                  fill="#0072F5"
                                />
                              </div>
                            </div>
                          </Card>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-center">
                  <Link href="/snips">
                    <Text h5 className="cursor-pointer hover:underline">
                      SE ALLE
                    </Text>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
