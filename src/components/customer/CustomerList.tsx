// 顧客一覧画面のプレースホルダー (暫定)
import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const CustomerList: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 4, mb: 4 }}>
                <Paper sx={{ p: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        顧客一覧
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        DAY 5で本格的な顧客一覧機能を実装予定です。
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default CustomerList;
