import React from "react";

// 🔥 Nested Comments Data
const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "This is a parent comment",
    replies: [
      {
        name: "Akshay Saini",
        text: "Reply level 1",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Another reply",
        replies: [
          {
            name: "Akshay Saini",
            text: "Reply level 2",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Another top-level comment",
    replies: [],
  },
];

// 🔹 Single Comment Component
const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-lg my-2 shadow-sm">
      <img
        className="w-8 h-8"
        src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000"
        alt="user"
      />
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};

// 🔹 Recursive Comments List
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />

      {/* Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-5 pl-5 border-l border-gray-300">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

// 🔹 Main Container
const CommentsContainer = () => {
  return (
    <div className="m-5 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Comments</h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;