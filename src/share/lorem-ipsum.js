const LOREM_ADMIN_LOGIN = {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdfQ.P8RoonpGRbvr5gZvzXVNoTX4-y4p3MhrfXYERtp9t7w"
}

const LOREM_USER_LOGIN = {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.xMYXKghI2OO_VH1TKKgBK30egGr9Dmv8uD8bjUXCZjE"
};

const LOREM_ADMIN_GET_ALL_EXAMS = {
    "examIds": [1]
};

const LOREM_ADMIN_GET_ONE_EXAM = {
    "id": 1,
    "name": "Lorem Ipsum",
    "score": 1,
    "questions": [
        {
            "id": 1,
            "statement": "Lorem Ipsum 1",
            "answers": [
                {
                    "id": 1,
                    "statement": "Answer 1",
                    "correctAnswer": true,
                    "selected": true,
                },{
                    "id": 2,
                    "statement": "Answer 2",
                    "correctAnswer": false,
                    "selected": false,
                },{
                    "id": 3,
                    "statement": "Answer 3",
                    "correctAnswer": false,
                    "selected": false,
                },{
                    "id": 4,
                    "statement": "Answer 4",
                    "correctAnswer": false,
                    "selected": false,
                },
            ]
        },{
            "id": 2,
            "statement": "Lorem Ipsum 2",
            "answers": [
                {
                    "id": 5,
                    "statement": "Answer 1",
                    "correctAnswer": false,
                    "selected": false,
                },{
                    "id": 6,
                    "statement": "Answer 2",
                    "correctAnswer": false,
                    "selected": false,
                },{
                    "id": 6,
                    "statement": "Answer 3",
                    "correctAnswer": true,
                    "selected": false,
                },{
                    "id": 7,
                    "statement": "Answer 4",
                    "correctAnswer": false,
                    "selected": true,
                },
            ]
        },{
            "id": 3,
            "statement": "Lorem Ipsum 3",
            "answers": [
                {
                    "id": 8,
                    "statement": "Answer 1",
                    "correctAnswer": false,
                    "selected": false,
                },{
                    "id": 9,
                    "statement": "Answer 2",
                    "correctAnswer": false,
                    "selected": false,
                },{
                    "id": 10,
                    "statement": "Answer 3",
                    "correctAnswer": false,
                    "selected": false,
                },{
                    "id": 11,
                    "statement": "Answer 4",
                    "correctAnswer": true,
                    "selected": false,
                },
            ]
        }
    ]
};

const LOREM_USER_GET_ALL_EXAMS = {
    "examIds": [1]
};

const LOREM_USER_GET_ONE_EXAM = {
    "id": 1,
    "name": "Lorem Ipsum",
    "questions": [
        {
            "id": 1,
            "statement": "Lorem Ipsum 1",
            "answers": [
                {
                    "id": 1,
                    "statement": "Answer 1",
                    "selected": false,
                },{
                    "id": 2,
                    "statement": "Answer 2",
                    "selected": false,
                },{
                    "id": 3,
                    "statement": "Answer 3",
                    "selected": false,
                },{
                    "id": 4,
                    "statement": "Answer 4",
                    "selected": false,
                },
            ]
        },{
            "id": 2,
            "statement": "Lorem Ipsum 2",
            "answers": [
                {
                    "id": 5,
                    "statement": "Answer 1",
                    "selected": false,
                },{
                    "id": 6,
                    "statement": "Answer 2",
                    "selected": false,
                },{
                    "id": 6,
                    "statement": "Answer 3",
                    "selected": false,
                },{
                    "id": 7,
                    "statement": "Answer 4",
                    "selected": false,
                },
            ]
        },{
            "id": 3,
            "statement": "Lorem Ipsum 3",
            "answers": [
                {
                    "id": 8,
                    "statement": "Answer 1",
                    "selected": false,
                },{
                    "id": 9,
                    "statement": "Answer 2",
                    "selected": false,
                },{
                    "id": 10,
                    "statement": "Answer 3",
                    "selected": false,
                },{
                    "id": 11,
                    "statement": "Answer 4",
                    "selected": false,
                },
            ]
        }
    ]
};

export {
    LOREM_ADMIN_LOGIN,
    LOREM_USER_LOGIN,
    LOREM_ADMIN_GET_ALL_EXAMS,
    LOREM_ADMIN_GET_ONE_EXAM,
    LOREM_USER_GET_ALL_EXAMS,
    LOREM_USER_GET_ONE_EXAM
}