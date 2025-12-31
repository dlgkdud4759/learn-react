import { useQuery } from "@tanstack/react-query";
import BoardInfo from "./BoardInfo";
import type { BoardListRes } from "@/types/board";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { useState } from "react";

const axiosInstance = getAxiosInstance();

function BoardList() {
  // 1. 게시물 목록 조회
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => axiosInstance.get<BoardListRes>(`/posts`),
    select: (response) => response.data.item,
  });

  // 2. 게시물 클릭 시 상세정보 업데이트(postId를 클릭한 게시물 id로 지정)
  const [postId, setPostId] = useState<number | null>(null);

  const list = data?.map((post) => (
    <li
      key={post._id}
      onClick={() => setPostId(post._id)}
      style={{ cursor: "pointer" }}
    >
      {post.title}
    </li>
  ));

  return (
    <>
      {isLoading && (
        <>
          <h3>로딩중...</h3>
          <p>잠시만 기다려 주세요</p>
        </>
      )}
      {error && (
        <>
          <h3>에러 발생!!!</h3>
          <p>{error.message}</p>
        </>
      )}

      {data && (
        <>
          <h3>게시물 목록</h3>
          <ul>{list}</ul>
        </>
      )}
      {postId && <BoardInfo postId={postId} />}
    </>
  );
}
export default BoardList;
