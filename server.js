require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// 提供配置给前端
app.get('/config', (req, res) => {
    res.json({
        signature: process.env.SIGNATURE,
        projectId: process.env.PROJECT_ID,
        virtualHumanId: process.env.VIRTUAL_HUMAN_ID
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
