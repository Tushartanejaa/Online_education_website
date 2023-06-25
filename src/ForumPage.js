import React, { useState } from 'react';
import "./ForumPage.css";

function ForumPage() {
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddDiscussion, setShowAddDiscussion] = useState(false);
  const [discussions, setDiscussions] = useState([
    { id: 1, title: 'Discussion 1', author: 'User 1', content: 'This is the first discussion.', comments: [] },
    { id: 2, title: 'Discussion 2', author: 'User 2', content: 'This is the second discussion.', comments: [] },
    { id: 3, title: 'Discussion 3', author: 'User 3', content: 'This is the third discussion.', comments: [] },
  ]);

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDiscussionClick = (discussion) => {
    setSelectedDiscussion(discussion);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() !== '') {
      const updatedDiscussions = discussions.map(discussion => {
        if (discussion.id === selectedDiscussion.id) {
          const updatedComments = [...discussion.comments, newComment];
          return { ...discussion, comments: updatedComments };
        }
        return discussion;
      });

      setDiscussions(updatedDiscussions);
      setNewComment('');
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleAddDiscussion = () => {
    setShowAddDiscussion(!showAddDiscussion);
  };

  const handleAddDiscussion = (title, author, content) => {
    const newDiscussion = {
      id: discussions.length + 1,
      title,
      author,
      content,
      comments: [],
    };

    setDiscussions([...discussions, newDiscussion]);
    setShowAddDiscussion(false);
  };

  return (
    <div style={{backgroundColor: 'beige', width: '50%', height: '80%', textAlign: 'center', margin: '10px 340px 20px'}}>
      <h1>Discussion Forum</h1>

      <div className="discussion-search">
        <label>Search:</label>
        <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      </div>

      <div className="discussion-list">
        <h2>Discussions</h2>
        {filteredDiscussions.length > 0 ? (
          <ul>
            {filteredDiscussions.map(discussion => (
              <li key={discussion.id} onClick={() => handleDiscussionClick(discussion)}>
                <h3>{discussion.title}</h3>
                <p>Author: {discussion.author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No discussions found.</p>
        )}
      </div>

      <div className="discussion-details">
        {selectedDiscussion ? (
          <div>
            <h2>{selectedDiscussion.title}</h2>
            <p>Author: {selectedDiscussion.author}</p>
            <p>{selectedDiscussion.content}</p>

            <div className="comments-section">
              <h3>Comments</h3>
              {selectedDiscussion.comments.length > 0 ? (
                <ul>
                  {selectedDiscussion.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet.</p>
              )}

              <form onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={handleCommentChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        ) : (
          <p>Select a discussion to view details and comments.</p>
        )}
      </div>

      {showAddDiscussion ? (
        <div className="add-discussion-form">
          <h2>Add Discussion</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Author" />
            <textarea placeholder="Content"></textarea>
            <button onClick={handleToggleAddDiscussion}>Cancel</button>
            <button onClick={handleAddDiscussion}>Add Discussion</button>
          </form>
        </div>
      ) : (
        <button onClick={handleToggleAddDiscussion}>Add Discussion</button>
      )}
    </div>
  );
}

export default ForumPage;
