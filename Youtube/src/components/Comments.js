import React from 'react';

const commentsData = [
    {
        name: "Keerthu",
        text: "This is a great post!",
        replies: [
            {
                name: "John",
                text: "I totally agree with you!",
                replies: [
                    {
                        name: "Alice",
                        text: "Me too! The content is really helpful.",
                        replies: [
                            {
                                name: "Bob",
                                text: "Yes! I learned a lot from this.",
                                replies: []
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "David",
        text: "Nice explanation!",
        replies: [
            {
                name: "Sarah",
                text: "I had the same thoughts!",
                replies: []
            },
        ]
    },
];

const SingleCmnt = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '15px',
            padding: '10px',
            background: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #ddd'
        }}>
            <img 
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginRight: '10px'
                }} 
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid" 
                alt="avatar"
            />
            <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>{name}</p>
                <p style={{ marginBottom: '5px', fontSize: '14px', color: '#555' }}>{text}</p>
                {/* Render replies if available */}
                {replies.length > 0 && <CmntList com={replies} />}
            </div>
        </div>
    );
};

const CmntList = ({ com }) => {
    return (
        <div style={{ paddingLeft: '50px', marginTop: '10px', borderLeft: '2px solid #ddd' }}>
            {com.map((c, index) => (
                <SingleCmnt key={index} data={c} />
            ))}
        </div>
    );
};

const Comments = () => {
    return (
        <div style={{
            width: '1100px',
            margin: '20px auto',
            padding: '20px',
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
            
            <CmntList com={commentsData} />
        </div>
    );
};

export default Comments;
