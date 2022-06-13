import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <Box key={i}>
          <span>{article.name} |</span>
          <Link to={`/articles/${article.id}`} className="preview-link">
            <h1>{article.slug}</h1>
            <p>{article.text}</p>
            <span>Read more ...</span>
          </Link>
        </Box>
      ))}
    </div>
  );
};

export default Feed;
