import { useState, useEffect } from 'react';
import { fetchUsers, fetchUserById } from '../../api/user';
import './GetUsers.css';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Failed to load users. Make sure your backend server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = async (id) => {
    try {
      const user = await fetchUserById(id);
      setSelectedUser(user);
    } catch (err) {
      console.error('Failed to fetch user details:', err);
    }
  };

  const filteredUsers = users.filter(user => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.firstName?.toLowerCase().includes(searchLower) ||
      user.lastName?.toLowerCase().includes(searchLower) ||
      user.email?.toLowerCase().includes(searchLower) ||
      user.userName?.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return (
      <div className="users-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users-container">
        <div className="users-header">
          <h1>
            <span className="gradient-text">User</span> Management
          </h1>
        </div>
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <h3>Connection Error</h3>
          <p>{error}</p>
          <button onClick={loadUsers} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>
          <span className="gradient-text">User</span> Management
        </h1>
        <p className="subtitle">
          Total Users: <span>{users.length}</span>
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users by name, email, or username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={loadUsers} className="refresh-btn" title="Refresh users">
            ↻
          </button>
        </div>
      </div>

      <div className="users-grid">
        {filteredUsers.length === 0 ? (
          <div className="no-results">
            <p>No users found matching "{searchTerm}"</p>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className={`user-card ${selectedUser?._id === user._id ? 'selected' : ''}`}
              onClick={() => handleUserClick(user._id)}
            >
              <div className="user-avatar">
                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
              </div>
              <div className="user-info">
                <h3>{user.firstName} {user.lastName}</h3>
                <p className="username">@{user.userName}</p>
                <p className="email">{user.email}</p>
                {user.isAdmin && <span className="admin-badge">Admin</span>}
              </div>
            </div>
          ))
        )}
      </div>

      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedUser(null)}>
              ✕
            </button>
            <div className="modal-header">
              <div className="user-avatar large">
                {selectedUser.firstName?.charAt(0)}{selectedUser.lastName?.charAt(0)}
              </div>
              <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
              {selectedUser.isAdmin && <span className="admin-badge">Admin</span>}
            </div>
            <div className="modal-body">
              <div className="detail-row">
                <span className="detail-label">Username</span>
                <span className="detail-value">@{selectedUser.userName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email</span>
                <span className="detail-value">{selectedUser.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">User ID</span>
                <span className="detail-value id">{selectedUser._id}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetUsers;