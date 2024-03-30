import { Button, ThemeProvider, createTheme } from '@mui/material';

const adminActionsTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Mantinia Regular',
          color: '#E2C799',
          border: '1px solid #E2C799',
          backgroundColor: '#3D405B',
          '&:hover': {
            backgroundColor: '#E2C799',
            color: '#3D405B',
          },
        },
      },
    },
  },
});

function AdminActions(): JSX.Element {
  return (
    <ThemeProvider theme={adminActionsTheme}>
      <div className="admin-actions">
        <Button size="large">Download as CSV</Button>
        <Button size="large">Charts</Button>
      </div>
    </ThemeProvider>
  );
}

export default AdminActions;
