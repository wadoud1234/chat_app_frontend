export interface Message {
    id: string,
    text: string,
    user: {
        id: string,
        name: string,
        image: string
    },
    createdAt: string
}