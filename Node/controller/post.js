const post = (req, res) => {

  res.json({

    posts: [
      { first: "This is the first post" },
      { second: "This is the second post" },
    ],
    
  });
};

module.exports = { post };
