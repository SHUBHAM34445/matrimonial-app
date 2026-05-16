// src/app/(main)/messages/page.js
"use client"; // This is a Client Component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import { useState, useRef, useEffect } from 'react';

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null); // Represents the selected chat partner's ID
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef(null);

  // Mock chat list and messages
  const chatList = [
    { id: 'chat1', name: 'Priya Sharma', photo: 'https://via.placeholder.com/50/FFD700/FFFFFF?text=PS', lastMessage: 'Hi! How are you?', time: '10:30 AM' },
    { id: 'chat2', name: 'Ankit Gupta', photo: 'https://via.placeholder.com/50/C0C0C0/FFFFFF?text=AG', lastMessage: 'Let\'s connect soon.', time: 'Yesterday' },
  ];

  const chatMessages = selectedChat ? {
    'chat1': [
      { id: 1, sender: 'Priya Sharma', message: 'Hello there!', time: '10:20 AM', type: 'received' },
      { id: 2, sender: 'You', message: 'Hi Priya! How are you?', time: '10:25 AM', type: 'sent' },
      { id: 3, sender: 'Priya Sharma', message: 'I am good, thanks! How about you?', time: '10:30 AM', type: 'received' },
    ],
    'chat2': [
      { id: 4, sender: 'You', message: 'Hey Ankit!', time: 'Yesterday', type: 'sent' },
      { id: 5, sender: 'Ankit Gupta', message: 'Let\'s connect soon.', time: 'Yesterday', type: 'received' },
    ],
  }[selectedChat] : [];

  useEffect(() => {
    // Scroll to bottom of messages whenever they update
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    console.log('Sending message:', messageInput, 'to', selectedChat);
    // TODO: Implement sending message to Strapi API
    // Add message to local state for instant display (optimistic update)
    if (selectedChat) {
        // This is a simplified mock. In a real app, you'd fetch/update from API.
        const newMsg = {
            id: Date.now(), // Unique ID
            sender: 'You',
            message: messageInput,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            type: 'sent'
        };
        // This won't actually update chatMessages as it's a fixed mock,
        // but shows the concept. You'd update your state holding messages.
        // setChatMessages(prev => ({...prev, [selectedChat]: [...prev[selectedChat], newMsg]}));
    }
    setMessageInput('');
  };

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden' }}> {/* Adjust 64px for header height */}
      {/* Chat List Pane */}
      <Box sx={{ width: 300, borderRight: '1px solid #e0e0e0', overflowY: 'auto' }}>
        <Typography variant="h6" sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
          Chats
        </Typography>
        <List>
          {chatList.map((chat) => (
            <Box key={chat.id}>
              <ListItem
                button
                onClick={() => setSelectedChat(chat.id)}
                selected={selectedChat === chat.id}
                alignItems="flex-start"
                sx={{ py: 1.5 }}
              >
                <ListItemAvatar>
                  <Avatar alt={chat.name} src={chat.photo} />
                </ListItemAvatar>
                <ListItemText
                  primary={chat.name}
                  secondary={
                    <Typography component="span" variant="body2" color="text.secondary" noWrap>
                      {chat.lastMessage}
                    </Typography>
                  }
                />
                <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto' }}>
                  {chat.time}
                </Typography>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ))}
        </List>
      </Box>

      {/* Chat Window Pane */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {!selectedChat ? (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" color="text.secondary">Select a chat to start messaging</Typography>
          </Box>
        ) : (
          <>
            {/* Chat Header */}
            <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #e0e0e0' }}>
              <Avatar alt={chatList.find(c => c.id === selectedChat)?.name} src={chatList.find(c => c.id === selectedChat)?.photo} />
              <Typography variant="h6">{chatList.find(c => c.id === selectedChat)?.name}</Typography>
            </Paper>

            {/* Messages Area */}
            <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {chatMessages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.type === 'sent' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      maxWidth: '70%',
                      backgroundColor: msg.type === 'sent' ? 'primary.light' : '#f0f0f0',
                      color: msg.type === 'sent' ? 'white' : 'text.primary',
                    }}
                  >
                    <Typography variant="body2">{msg.message}</Typography>
                    <Typography variant="caption" sx={{ display: 'block', mt: 0.5, textAlign: 'right' }}>
                      {msg.time}
                    </Typography>
                  </Paper>
                </Box>
              ))}
              <div ref={messagesEndRef} /> {/* Scroll to this element */}
            </Box>

            {/* Message Input */}
            <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) { // Allow shift+enter for new line
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
                disabled={messageInput.trim() === ''}
                sx={{ minWidth: 'auto', p: 1.5 }}
              >
                <SendIcon />
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}