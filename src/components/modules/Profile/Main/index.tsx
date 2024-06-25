// Profile/index.tsx
"use client";
import useFriend from "@/hooks/useFriend";
import { useEffect } from "react";
import Banner from "../Banner";
import Introduce from "../introduce";
import PostProfile from "../PostProfile";
import { useAuth } from "@/hooks/useAuthStatus";
import { Spin } from "antd";
import * as S from "./styles";
import ListFriend from "../ListFriend";

interface ProfileProps {
  profileHash: string;
}

const Profile: React.FC<ProfileProps> = ({ profileHash }) => {
  const { loading } = useAuth();
  const { checkFriend } = useFriend(profileHash);

  useEffect(() => {
    if (!loading) {
      checkFriend();
    }
  }, [profileHash, loading]);

  return (
    <S.HomeWrapper>
      <Spin spinning={loading} fullscreen />
      <Banner profileHash={profileHash} />
      <S.Main>
        <S.Sidebar>
          <Introduce />
          <ListFriend />
        </S.Sidebar>
        <S.Content>
          <PostProfile />
        </S.Content>
      </S.Main>
    </S.HomeWrapper>
  );
};

export default Profile;
