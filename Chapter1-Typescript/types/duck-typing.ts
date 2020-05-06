/*
To increase flexibility (and easy migration from straight js project)
TypeScript supports duck-typing.

Duck Typing is an example of a structural type system in which type
compatibility and equivalence are determined by the type's actual
structure.

The name comes from, "If it looks like a duck and quacks like a duck..
it must be a duck."
*/

interface Comment {
    id: number;
    name: string;
    content: string;
}

interface Reply {
    id: number;
    name: string;
    content: string;
    parentCommentId: number;
}

const comment: Comment = {
    id: 1,
    name: 'Ryan',
    content: "I'm here",
};

const reply: Reply = {
    id: 1,
    name: 'Ryan',
    content: 'Also talking to myself',
    parentCommentId: 1,
};

const postComment = (comment: Comment): void => {
    console.log('Comment by ', comment.name);
};

export const duckTyping = (): void => {
    postComment(comment);
    postComment(reply);
};
