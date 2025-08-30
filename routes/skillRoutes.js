import express from 'express';
import dbPool from '../db';

const router = express.Router();

router.get('/skills/employee-count', async (req, res) => {
    try {
        const [results] = await dbPool.query(
            `SELECT s.name, COUNT(es.employee_id) AS employeeCount
            FROM skills s
            JOIN employee_skills es ON s.id = es.skill_id
            GROUP BY s.id
            ORDER BY employeeCount DESC`
        );
        res.json(results);
    } catch (error) {
        console.error('Error fetching employee count by skill:', error);
        res.status(500).json({ error: 'Failed to fetch skill data.' });
    }
});

// ... (existing routes should be placed here) ...

export default router;
