const data = [
    {
    id: 1, // Unique identifier for the course
    name: 'Introduction to React Native',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'Inprogress
    img:'./image/OIP.jpeg', //Link to the course thumbnail
duration: '8 weeks', // Duration of the course
schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
location: 'Online',
prerequisites: ['Basic JavaScript knowledge', 'Familiarity withReact'],
syllabus: [
    {
    week: 1,
    topic: 'Introduction to React Native',
    content: 'Overview of React Native, setting up yourdevelopment environment.'
    },
    {
    week: 2,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Nativecomponents.'
    },
// Additional weeks and topics...
],
TableHeader: ["id","name", "Email", "Action"],

students: [
{
id: 101,
name: 'Alice Johnson',
email: 'alice@example.com',
enrollmentStatus: 'Open',
sortable:true,
},
{
id: 102,
name: 'Bob Smith',
email: 'bob@example.com',
enrollmentStatus: 'Inprogress',
},
{
    id: 103,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    enrollmentStatus: 'Open',
    },
    {
        id: 104,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        enrollmentStatus: 'Open',
        },
        {
            id: 105,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            enrollmentStatus: 'Open',
            },
            {
                id: 106,
                name: 'Alice Johnson',
                email: 'alice@example.com',
                enrollmentStatus: 'Open',
                },
                {
                    id: 107,
                    name: ' Johnson',
                    email: 'alice@example.com',
                    enrollmentStatus: 'inprogress',
                    },
                    {
                        id: 108,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                        enrollmentStatus: 'Open',
                        },
                        {
                            id: 109,
                            name: 'Alice Johnson',
                            email: 'alice@example.com',
                            enrollmentStatus: 'ended',
                            },
// Additional enrolled students...
],
},
];
export default data

