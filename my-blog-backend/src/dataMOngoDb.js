import { MongoClient } from 'mongodb';
// const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("react-blog-db"); // Replace with your database name
        const collection = database.collection("articles");

        const documents = [
            {
                name: 'Self-Help',
                title: 'The 5AM Club',
                content: [
                    'The 5 AM Club is a self-help book written by Robin Sharma. The central theme revolves around the concept of waking up early at 5 AM to enhance personal productivity, well-being, and success. The book follows a fictional narrative, weaving together the stories of a billionaire, an artist, and an entrepreneur, who come together to form the 5 AM Club and learn life-changing lessons from a mysterious mentor. Sharma introduces the 20/20/20 formula, encouraging readers to spend the first hour of their day focusing on personal development, exercise, and planning. While the book has gained popularity for its motivational content and practical tips, some critics argue that the narrative format may not resonate with everyone, and the ideas presented are not entirely groundbreaking. Ultimately, its impact may vary depending on individual preferences and receptiveness to self-help concepts.'
                ]
            },
            {
                name: 'Fantasy',
                title: 'Lord of the Rings',
                content: [
                    'The Lord of the Rings is a classic fantasy trilogy written by J.R.R. Tolkien. Set in the fictional world of Middle-earth, the epic follows the quest to destroy the One Ring, an evil artifact that threatens the entire world. The story spans three books: The Fellowship of the Ring, The Two Towers, and The Return of the King. The diverse cast of characters, including hobbits, elves, dwarves, and humans, face challenges, battles, and moral dilemmas as they strive to overcome the dark forces of Sauron.'
                ]
            },
            {
                name: 'Fiction',
                title: 'Around the World in Eighty Days',
                content: [
                    'Around the World in Eighty Days is an adventure novel written by Jules Verne. The story revolves around Phileas Fogg, a wealthy and precise Englishman who, prompted by a bet, sets out to circumnavigate the globe in just 80 days. Fogg is accompanied by his French servant, Passepartout, and the two embark on a journey filled with challenges, obstacles, and unexpected adventures. The novel explores themes of time, precision, and the spirit of adventure.'
                ]
            },
            {
                name: 'Philosophical and Inspirational Fiction',
                title: 'The Alchemist',
                content: [
                    'The Alchemist is a philosophical and inspirational novel written by Brazilian author Paulo Coelho. The story follows Santiago, a young Andalusian shepherd, on his quest to discover a hidden treasure in Egypt. Along his journey, Santiago encounters a series of characters who impart wisdom and life lessons. The novel explores themes of destiny, personal legend, and the importance of listening to ones heart.'
                ]
            },
            {
                name: 'Mystery',
                title: 'The Hound of the Baskervilles',
                content: [
                    'The Hound of the Baskervilles follows detective Sherlock Holmes and his loyal friend Dr. John Watson as they investigate the mysterious death of Sir Charles Baskerville on the desolate moors of Devonshire.'
                ]
            },
            {
                name: 'Self-Help',
                title: 'Rich Dad Poor Dad',
                content: [
                    'Rich Dad Poor Dad by Robert T. Kiyosaki is a personal finance classic that presents the authors insights on money and investing through the contrasting experiences of his rich dad (a friend\'s father) and his poor dad (his biological father). The book emphasizes the importance of financial education, the difference between assets and liabilities, and the need to cultivate a mindset that fosters wealth-building.'
                ]
            },
            {
                name: 'Fiction',
                title: 'The Famous Five Series',
                content: [
                    'The Famous Five Series by Enid Blyton chronicles the adventures of four children—Julian, Dick, Anne, and their cousin George, along with her dog Timmy. During their school holidays, the group stumbles upon mysteries, faces villains, and uses teamwork to solve crimes. The series, known for its suspense, camaraderie, and a sense of justice, has become a beloved classic in children\'s literature.'
                ]
            }
        ];

        const result = await collection.insertMany(documents);
        console.log(`${result.insertedCount} documents were inserted`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
