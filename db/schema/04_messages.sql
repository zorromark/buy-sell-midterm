DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
 sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
 recipient_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
 message TEXT NOT NULL,
 timestamp TIMESTAMP DEFAULT NOW()::timestamp
);
