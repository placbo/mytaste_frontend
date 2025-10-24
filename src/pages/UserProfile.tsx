import { FC } from 'react';
import { useAuth } from '../context/AuthContext';
import { Box, Typography, Button, Avatar, Paper, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserProfile: FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Avatar src={user.image} alt={user.displayName} sx={{ width: 120, height: 120 }} />

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                {user.displayName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                User ID: {user.id}
              </Typography>
              {user.isAdmin && (
                <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                  Administrator
                </Typography>
              )}
            </Box>

            <Paper sx={{ p: 2, width: '100%', bgcolor: 'background.default' }}>
              <Typography variant="h6" gutterBottom>
                Account Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2">
                  <strong>Display Name:</strong> {user.displayName}
                </Typography>
                <Typography variant="body2">
                  <strong>Role:</strong> {user.isAdmin ? 'Administrator' : 'User'}
                </Typography>
              </Box>
            </Paper>

            <Button
              variant="contained"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              fullWidth
              sx={{ mt: 2 }}
            >
              Logg ut
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
