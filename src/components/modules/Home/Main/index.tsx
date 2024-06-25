"use client";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { getRequest } from "@/services/request";
import { tagEndpoint } from "@/services/endpoint";
import TagRender from "./Tag";
import PostsRender from "./PostRender";

function Home() {
  useEffect(() => {
    const setup = async () => {
      await getRequest(tagEndpoint.GET_TAG);
    };
    setup();
  }, []);
  return (
    <S.HomeWrapper>
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.PostContainer>
            <TagRender />
            <PostsRender />
          </S.PostContainer>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
