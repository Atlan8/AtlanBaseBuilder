export interface PostCommentReplyInfo {
  id: number;
  username: string;
  replyId: number;
  replyUsername?: string;
  datetime: string;
  postId: number;
  content: string;
}

export interface PostCommentInfo {
  id: number;
  username: string;
  content: string;
  datetime: string;
  device: string; // 来自
  ipAddress: string; // ip属地
  floor: string; // 帖子评论楼层
  cover?: string; // 帖子评论封面
  reply?: PostCommentReplyInfo[]; // 评论的回复
}

export interface PostInfo {
  title: string;
  author: string;
  comment: PostCommentInfo[];
}
